var WebRTCRoom = (function () {

//  var serverDomain = '//xzb.qcloud.com/webrtc/weapp/webrtc_room',
  //var serverDomain = '//160716803.shipinlipei.com/weapp/double_room',//生产
  var serverDomain = '//nweeyr0w.qcloud.la/weapp/double_room',//测试
   // var serverDomain = '//jiw5ccnh.qcloud.la/weapp/double_room',
    requestNum = 0,
    heart = '', // 判断心跳变量
    heartBeatReq = null,
    requestSeq = 0, // 请求id
    requestTask = []; // 请求task

  var heartBeatFailCount = 0; // 心跳包超时失败次数

  /***********************************************************************************
   * http请求
   * 
   * [request 封装request请求]
   * @param {object}
   *   url: 请求接口url
   *   data: 请求参数
   *   success: 成功回调
   *   fail: 失败回调
   *   complete: 完成回调
   *
   ************************************************************************************/
   var heart = '', viewTag = 0;

/************************************************************************************/
/*HttpRequest
/************************************************************************************/
    function request(object) {
       if (!serverDomain)  {
           console.log('请设置serverDomain');
           object.fail || object.fail({errCode:-1, errMsg:"serverDomain为空, 请调用init接口进行设置"});
           return;
       }
	   console.log("服务器地址："+serverDomain + object.url);
       httpRequest({
           url: serverDomain + object.url,
           data: object.data || {},
           method: "POST",
           success: object.success || function () {},
           fail: object.fail || function () {},
           complete: object.complete || function () {}
       })
    }

function httpRequest(object) {
    object= object|| {};
    object.method = (object.method|| "GET").toUpperCase();
    object.dataType = "json";
    var params = formatParams(object.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

   var timeout_time = typeof(object.timeout) == "undefined" ? 10000 : object.timeout;
    var timeout = false;
    var timer = setTimeout(function () {
        timeout = true;
        xhr.abort();
    }, timeout_time);
    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (timeout) {
                object.fail && object.fail({code: -1, msg:"请求超时"});
            }
            var status = xhr.status;
            clearTimeout(timer);
            if (status >= 200 && status < 300) {
                var jsonObj = JSON.parse(xhr.responseText);
                object.success && object.success({status: status, data:jsonObj});
            } else {
                object.fail && object.fail({code:status, msg:xhr.message});
            }

            object.complete && object.complete();
        }
    }

    //连接 和 发送 - 第二步
    if (object.method == "GET") {
        xhr.open("GET", object.url + "?" + params, true);
        xhr.send(null);
    } else if (object.method == "POST") {
        xhr.open("POST", object.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".",""));
    return arr.join("&");
}


  function getLoginInfo(userID, success, fail) {
    var data = {};
    if (userID) {
      data.userID = userID;
    }
    data.userIDPrefix = 'webrtc';
    request({
      url: '/get_im_login_info',
      data: data,
      success: success,
      fail: fail
    })
  }

  function getRoomList(index, count, success, fail) {
    request({
      url: '/get_room_list',
      data: {
        index: index,
        cnt: count
      },
      success: success,
      fail: fail
    })
  }

  function createRoom(userID, nickName, roomInfo, success, fail) {
    console.warn('创建房间:' + userID + ", " + roomInfo);
    request({
      url: '/create_room',
      data: {
        userID: userID,
        userName: nickName,
        roomName: roomInfo,
        // userAvatar: '123',
        // roomid: 4444
      },
      success: function (res) {
        console.warn("创建房间成功:", res);
        success && success(res);
      },
      fail: fail
    })
  }

  function enterRoom(userID, nickName, roomID, success, fail) {
    request({
      url: '/add_pusher',
      data: {
        userID: userID,
        roomID: parseInt(roomID),
        userName: nickName ? nickName:'546546456',
        userAvatar: "789456",
        pushURL: "no rtmp url"
      },
      success: function (res) {
        success && success(res);
      },
      fail: fail
    })
  }

  function quitRoom(userID, roomID, success, fail) {
    request({
      url: '/destroy_room',
      data: {
        userID: userID,
        roomID: roomID
      },
      success: success,
      fail: fail
    });
    stopHeartBeat();
  }


  function get_room_members(roomID, success, fail) {
    request({
      url: '/get_pushers',
      data: {
        roomID: roomID
      },
      success: success,
      fail: fail
    });
  }

  function startHeartBeat(userID, roomID) {
    heart = '1';
    heartBeat(userID, roomID);
  }

  function stopHeartBeat() {
    heart = '';
    if (heartBeatReq) {
      heartBeatReq.abort();
      heartBeatReq = null;
    }
  }

  function heartBeat(userID, roomID, succ, fail) {
    if (!heart) {
      return;
    }
    heartBeatReq = request({
      url: '/pusher_heartbeat',
      data: {
        userID: userID,
        roomID: roomID
      },
      success: function (res) {
        heartBeatFailCount = 0;
        console.log("心跳成功", {
          userID: userID,
          roomID: roomID
        });
        succ && succ(userID, roomID);
        if (heart) {
          setTimeout(() => {
            heartBeat(userID, roomID, succ, fail);
          }, 7000);
        }
      },
      fail: function (res) {
        heartBeatFailCount++;
        if (heartBeatFailCount > 2) {
          fail && fail(userID, roomID);
        } else {
          if (heart) {
            setTimeout(() => {
              heartBeat(userID, roomID, succ, fail);
            }, 7000);
          }
        }
      }
    })
  }

  return {
    stopHeartBeat: stopHeartBeat,
    startHeartBeat: startHeartBeat,
    getLoginInfo: getLoginInfo,
    getRoomList: getRoomList,
    createRoom: createRoom,
    enterRoom: enterRoom,
    quitRoom: quitRoom,
    get_room_members: get_room_members
  }
})();
