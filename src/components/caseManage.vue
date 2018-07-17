<style scoped>
@import '../style/caseManage.css';
</style>
<template>
  <div class="caseManage">
    <div class="loadingBox hide">
      <div class="loadingBoxContent">
          <img  src="../images/loading.gif" />
      </div>
    </div>
    <span class="creatCase backColorGreen" v-if="manualStatus == 2" @click="checkState">繁忙</span>
    <span class="creatCase backColorGreen" v-if="manualStatus == 0" @click="checkState">空闲</span>
    <div class="openOrdercompleteDialog hide">
      <div class="openOrdercompleteDialogBox">
        <span @click="closeopenOrderEndxDialog" class="closeCityDiolag">×</span>
        <div class="selectBox">
          <div class="completeImg">
           <img src="../images/complete.png"/>
            <p class="completeText">查勘已完成</p>
            <div v-if="haveCaseActive">
              <p class="dealText">检测到您当前存在'待处理案件',请选择处理新案件还是处理待处理案件</p>
              <div class="dealCaseButton">
                <span class="dealNewCase dealCase">处理新案件</span>
                <span class="dealOldCase dealCase backColorGreen">处理'待处理案件'</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 理赔信息弹框 -->
    <!-- <div class="claim-wrap hide">
        <div class="claim-content">
          <div class="top-wrap">
              <h4>请完善理赔信息</h4>
              <span @click="closeClaimDiolag" class="xmark">×</span>
          </div>
          
          <div class="che-one" v-for="(item,index) in ImgInfo">
               <p class="plate">{{item.originalVehicleLicenseNo}}</p>
               <div class="part-wrap part-wrap-one" >
                  <div class="part" @click="part($event,item)" >正前部<span>1</span></div>
                  <div class="part" @click="part($event,item)" >左前部<span>2</span></div>
                  <div class="part" @click="part($event,item)" >右前部<span>3</span></div>
                  <div class="part" @click="part($event,item)" >左中部<span>4</span></div>
                  <div class="part" @click="part($event,item)" >正后部<span>5</span></div>
                  <div class="part" @click="part($event,item)" >左后部<span>6</span></div>
                  <div class="part" @click="part($event,item)" >右后部<span>7</span></div>
                  <div class="part" @click="part($event,item)" >右中部<span>8</span></div>
               </div>
               <div class="input-box">
                     <span>赔付金额</span>
                     <input type="text" name=""  @blur="one_part($event,index)">
                </div>
          </div>
          <div class="checkbox-wrap">
          <el-checkbox-group v-model="checkedCities"  @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          </div>
          <el-button type="primary" class="but-claim" @click="claimButton">确定</el-button>
        </div>
    </div> -->
    <div class="orderSelectDialog hide">
      <div class="orderSelectDialogBox">
          <h4>请描述事故经过</h4>
          <span @click="closeOrderDiolag" class="closeCityDiolag">×</span>
          <div class="selectBox">
            <div class="selectType">
              <select placeholder="请选择订单类型" v-model="isExceptionComplete">
                <option value="1">正常办结</option>
                <option value="0">异常办结</option>
              </select>
            </div>
           <!--  <textarea data-m class="textareaBox" v-model="exceptionComment" placeholder="请输入事故经过"></textarea> -->
             <!-- <div class="but_wrap">
                <span class="setGreen">发送电子查勘单</span>
                <span class="setWhite" @click="checkedOneEven">发送转账授权书</span>
                <span class="setWhite" @click="checkedTwoEven">快赔协议书</span>
             </div> -->
            <div class="openOrderEndBox">
              <span class="backColorGreen surebutton" @click="openOrderEndBox">确定</span>
            </div>
          </div>
      </div>
    </div>
    <div class="cityDialog hide">
      <div class="cityDialogBox">
        <span @click="closeCityDiolag" class="closeCityDiolag">×</span>
        <div class="cityNameBox clear">
          <span class="citySimpleName" v-for="item in cityData" @click="selectCity(item)">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="beizhuDiolag hide">
      <div class="editorContent">
        <h4>备注信息</h4>
        <span @click="closeBeizhu" class="right closeEditorCar">×</span>
        <div class="inputBox">
          <textarea style="width:100%;height:200px;border:1px solid #bbb;border-radius:6px;" v-model="beizhuInfo" placeholder="请输入备注信息" ></textarea>
        </div>
        <div style="margin: 20px auto;text-align: center;">
          <span class="backColorGreen saveCarInfo" @click="saveBeizhu">保存</span>
        </div>
      </div>
    </div>
    <div class="editorCarInfo hide">
      <div class="editorContent">
        <h4>车辆信息</h4>
        <span @click="closeEditorCar" class="right closeEditorCar">×</span>
        <div class="inputBox">
          <span>车牌号:</span>
          <input @click="openCityDialog" v-model="getCity" type="text" readonly="readonly" class="creatInputNo"/>
          <input style="width:140px;" v-model="vehicleLicenseNo" placeholder="请输入车牌号" type="text"/>
        </div>
        <div class="inputBox">
          <span>手机号:</span><input v-model="mobileNumber" placeholder="请输入手机号" type="tel" maxlength="11"/>
        </div>
        <div style="margin: 20px auto;text-align: center;">
          <span class="backColorGreen saveCarInfo" @click="savevehicle">保存</span>
        </div>
      </div>
    </div>
    <div class="takePhoneImgBox hide">
      <div class="takebigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closetakeCaleImg" class="right closeCaleImgBox">×</span>
        <div class="imgSize" style="height:480px;overflow-y: scroll;">
          <img id="bigsizeImg" :src="originalPhotoUrl" />
        </div>
        <div style="display: flex;justify-content: center;margin-top:20px;">
          <div class="takedeletImg" @click="deletTakeImg">删除</div>
          <div class="takesaveImg backColorGreen" @click="openType">保存</div>
        </div>
      </div>
    </div>
    <div class="takePhonetypeBox hide">
      <div class="typeContent">
        <h4>请选择照片类型</h4>
        <span @click="closetypebox" class="right closetypeBox">×</span>
        <div class="typeCar">
          <div class="m-selectImgType-tit">
            <ul style="display: flex;">
              <li v-if="aimActive"  class="showTag" @click="selectCar($event,saveonevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{saveonevehicleLicenseNo}}</a>
                <div v-if="aimActive" class="tag"></div>
              </li>
              <li  class="" v-if="!aimActive" @click="selectCar($event,saveonevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{saveonevehicleLicenseNo}}</a>
                <div v-if="aimActive" class="tag"></div>
              </li>
              <li  v-if="savetwovehicleLicenseNo != '' && !thirdOneActive" class="" @click="selectCar($event,savetwovehicleLicenseNo)" >
                <a href="#" title="#">车牌号：{{savetwovehicleLicenseNo}}</a>
                <div v-if="thirdOneActive" class="tag"></div>
              </li>
              <li  v-if="savetwovehicleLicenseNo != '' && thirdOneActive" class="showTag" @click="selectCar($event,savetwovehicleLicenseNo)" >
                <a href="#" title="#">车牌号：{{savetwovehicleLicenseNo}}</a>
                <div v-if="thirdOneActive" class="tag"></div>
              </li>
              <li v-if="savethreevehicleLicenseNo != '' && thirdTwoActive " data-id="c0"  class="showTag" @click="selectCar($event,savethreevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{savethreevehicleLicenseNo}}</a>
                <div v-if="thirdTwoActive" class="tag"></div>
              </li>
              <li v-if="savethreevehicleLicenseNo != '' && !thirdTwoActive " data-id="c0"  class="" @click="selectCar($event,savethreevehicleLicenseNo)">
                <a href="#" title="#">车牌号：{{savethreevehicleLicenseNo}}</a>
                <div v-if="thirdTwoActive" class="tag"></div>
              </li>
            </ul>
          </div>
          <div class="m-selectImgType-cont" id="selectImgTypeCont">
              <dl class="clear">
                <dd data-code="item.code" class="ddClass" @click="selectType($event,item.photoType)" v-for="(item,index) in oneTypeSurveyPhotos">
                  <a href="#" title="#" data-type="item.photoType">{{item.photoTypeComment}}</a>
                  <div class="tag hide"></div>
                </dd>
              </dl>
          </div>
          <div style="text-align: center;margin-top:30px;">
            <span class="saveTakeImg backColorGreen" @click="sureTakeImg">确定</span>
          </div>
        </div>
      </div>
    </div>
    <div class="scalImgBox hide">
      <div class="bigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closeScaleImg" class="right closeCaleImgBox">×</span>
        <p style="margin: 20px;color: #666;" v-if="surveyPhotos.length>1">images {{scalImgCurrentIndex}} of {{scalImgLength}}</p>
        <div class="prebutton" @click="preScaleImg" v-if="surveyPhotos.length>1">
          <img src="../images/icon_ctrl_1.png"/>
        </div>
        <div class="imgSize" style="left:24px;">
          <ul class="scaleUlBox">
            <li v-for="item in surveyPhotos" :style="{width: clientimgWidth}">
              <img  :src="item.watermarkPhotoUrl" />
            </li>
          </ul>
        </div>
        <div class="nextbutton" @click="nextScaleImg" v-if="surveyPhotos.length>1">
          <img src="../images/icon_ctrl_0.png"/>
        </div>
      </div>
    </div>
    <div class="contentTop clear">
      <div class="topLeft left">
        <span v-if="showDealCase" class="smallbutton"></span>
        <span v-else class="twosmallbutton"></span>
        <p class="caseButton backColorGreen doingCase selectButton" @click="changeCaseStatius('1')">正在处理案件</p>
        <p class="caseButton backColorGreen waitCase" @click="changeCaseStatius('2')">待处理案件</p>
      </div>
      <div v-show='showDealCase' class="caseLeft">
        <div id="doing" class="cont" >
          <div class="item-txt-list" style="display:flex;justify-content: space-between;" v-if="doingActive">
            <div style="display:flex;">
              <div class="infoDiv">
                <p>车牌号：<span id="bdno">{{leftData.reportVehicleLicenseNo}}</span></p>
                <p>保险公司：{{leftData.insuranceCompanyName}}</p>
                <p class="address">报案地点：{{leftData.reportLocation}}</p>
              </div>
              <div class="infoDiv">
                <p>报案人姓名：{{leftData.reporterName}}</p>
                <p>报案人电话：<span id="bdtel">{{leftData.reporterPhone}}<span></span></span>
                <img v-if="insurecode == 111111111111" src="../images/phone.png" class="callPhone_img" @click="callPhone($event,leftData.reporterPhone)">
                </p>
              </div>
              <div class="infoDiv">
                <p>查勘员姓名：{{leftData.liveSurveyorName}} </p>
                <p>
                查勘员电话：{{leftData.liveSurveyorPhone }}
              <img v-if="insurecode == 111111111111" src="../images/phone.png" class="callPhone_img" @click="callPhone($event,leftData.liveSurveyorPhone)">
                </p>
                <p v-if="leftData.liveSurveyorStatus == '11'">查勘员状态：待指派</p>
                <p v-if="leftData.liveSurveyorStatus == '12'">查勘员状态：已指派</p>
                <p v-if="leftData.liveSurveyorStatus == '13'">查勘员状态：已到达</p>
                <p v-if="leftData.liveSurveyorStatus == '14'">查勘员状态：查勘中</p>
                <p v-if="leftData.liveSurveyorStatus == '15'">查勘员状态：已查勘</p>
              </div>
              <div class="infoDiv">
                <p style="margin-bottom:6px;">订单状态：<span  v-if="leftData.orderStatus == '06'">待连线</span>
                  <span  v-if="leftData.orderStatus == '07'">查勘中</span>
                  <span  v-if="leftData.orderStatus == '08'">待审核</span>
                  <span  v-if="leftData.orderStatus == '11'">已取消</span>
                </p>
              </div>
            </div>
            <div style="display:flex;">
              <div class="infoDiv">
                <p  v-if="!OnlineActive && !processOnlineActive && !toOnlineActive"  class="link-btn mr10 disabled" id="online">连线</p>
                <p  class="link-btn mr10 disabled " v-if="!OnlineActive && !processOnlineActive && toOnlineActive" id="onlineLoding" >连线中</p>
                <p  class="link-btn mr10" v-if="!OnlineActive && processOnlineActive && !toOnlineActive" @click="join" id="onLinking" >连线 <span id="countTime" data-max="30">{{conttime}}</span>s</p>
                <p  class="link-btn mr10 warn" @click="disconnect('0')" v-if="OnlineActive && !processOnlineActive && !toOnlineActive" id="onOff" >挂断</p>
                <p  class="link-btn-max"  style="margin-top: 5px;" v-if="twoButton && surveyActive" id="finishOrder" @click="openOrderSelect">查勘完成</p>
                <p  v-else  style="margin-top: 5px;" id="nofinishOrder">查勘完成</p>
              </div>
              <div class="infoDiv">
                <p href="javascript:;" class="link-btn" v-if="twoButton" id="hangUp" @click="hangUp(roomId)">挂起订单</p>
                <p href="javascript:;" class="link-btn" v-if="!twoButton" id="nohangUp">挂起订单</p>
                <p href="javascript:;"  style="margin-top: 5px;"  id="beizhu" @click="openBeizhu">备注</p>
              </div>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img  src="../images/bookIco_0.png">
            </div>
            <p>暂无正在处理中的案件...</p>
          </div>
        </div>
      </div>
      <div v-show='!showDealCase' class="caseRight">
        <div id="wait" class="cont">
          <div class="wait-law-case-mod left" id="waitLawCase" style="overflow:hidden;overflow-y: scroll; height:100px;"  v-if="waitActive" >
            <!--<div class="wait-law-case-mod" id="waitLawCase" v-if="waitActive" >-->
            <div v-for="item in noDealCase"  style="display: inline-block;" class="wait-law-case" @dblclick ="goleftLine(item.surveyNo,item)" title="双击进行处理">
              <div style="display:flex;">
                 <div class="infoDiv" style="margin: 2px 7px;">
                    <p>车牌号：{{item.reportVehicleLicenseNo}}</p>
                    <p>查勘员姓名：{{item.liveSurveyorName}}</p>
                    <p v-if = "item.orderStatus == '06'">订单状态：待查勘</p>
                    <p v-if = "item.orderStatus == '07'">订单状态：查勘中</p>
                    <p v-if = "item.orderStatus == '08'">订单状态：已查勘</p>
                    <p v-if = "item.orderStatus == '11'">订单状态：已取消</p>
                  </div>
                  <div class="infoDiv" style="padding: 2px 7px;">
                    <p>报案人电话：{{item.reporterPhone}}</p>
                    <p>查勘员电话：{{item.liveSurveyorPhone}}</p>
                  </div>
              </div>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img src="../images/bookIco_0.png">
            </div>
            <p>暂无待处理的案件...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="caseContent">
      <div @click="paizhao"></div>
      <video v-if="haveVideoActive" style="height:1px;width: 1px;" src="../images/source.mp3" autoplay="" type="video/mp3" controls="controls"></video>
      <div class="caseCenter">
        <div class="video-player">
          <div id="video" class="video" style="width:100%;height: 488px;">
            <div v-show="steamActive" class="video-panel" style="height:500px;display:flex;">
              <div :style="{width: clientWidth}" style="position:relative;">
                
                <video id="remoteVideo" style="width:100%;height:470px;" autoplay playsinline></video>
                <video id="localVideo" muted autoplay playinline v-show="showLocal"></video>
                <canvas id="mycanvas" width="1280" height="720" style="width:100%;height:470px;display:none;"></canvas>


              </div>
              <div :style="{width: clientWidth}">
                <img style="width:100%;height:500px;" src="../../rtcv/static/videoDefoult.png"/>
              </div>
            </div>
            <div v-show="steamActive" style="width:800px;height:100px;margin-top:-100px;"  class="videoBox ">
              <div id="bar_46122248740144030"  :style="{width: clientWidth}" style=" height: 100%; position: relative; bottom: 0; right: 0;">
                <div class="player-control">
                  <div class="player-control-box">
                    <!-- 静音 -->
                    <!-- <div id="closeRecording" class="player-recording">
                    <img src="../images/video_ico_0.png">
                    </div> -->
                    <!-- 打开闪光灯 -->
                    <div class="player-auto-flash" id="flashButton" @click="openLight">
                      <img src="../images/video_ico_1.png">
                    </div>
                    <!-- 手机拍照 -->
                    <div class="player-photo" id="photoButton" @click="takePic">
                      <img src="../images/video_ico_2.png">
                    </div>
                    <!-- 截图按钮 -->
                    <div class="player-photo" id="photoButton" @click="takeScreenshot" title="截图">
                      <img src="../images/screenshot.png">
                    </div>
                    <!-- 双向按钮 -->
                    <div class="player-photo" id="photoButton">
                      <img src="../images/doubleBoxOpen.png" title="打开双向视频" v-if="!showLocal" @click="triggerBox">
                      <img src="../images/doubleBoxClose.png" title="关闭双向视频" v-else @click="triggerBox">
                    </div>
                    <!-- <div class="player-photo" title="截图设置说明">
                      <router-link to="/takePicHelps" target="_blank">
                        <img src="../images/help.png">
                      </router-link>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            <div v-show="!steamActive" class="videoBox" style="display:flex;justify-content:center;">
              <img style="width:100%;height:500px;" id="video-background" src="../../rtcv/static/video-default.png"/>
              <img style="width:100%;height:500px;" id="video-background1" src="../../rtcv/static/videoDefoult.png"/>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="caseRight">-->
        <!--<div class="tit">-->
          <!--<h4>待处理案件</h4>-->
        <!--</div>-->
        <!--<div id="wait" class="cont">-->
          <!--<div class="wait-law-case-mod" id="waitLawCase" v-if="waitActive" >-->
            <!--<div @dblclick ="goleftLine(item.surveyNo,item)" title="双击进行处理" class="wait-law-case" v-for="item in noDealCase">-->
              <!--<ul>-->
                <!--<li>车牌号：{{item.reportVehicleLicenseNo}}</li>-->
                <!--<li>报案人电话：{{item.reporterPhone}}</li>-->
                <!--<li>查勘员姓名：{{item.liveSurveyorName}}</li>-->
                <!--<li>查勘员电话：{{item.liveSurveyorPhone}}</li>-->
                <!--<li v-if = "item.orderStatus == '06'">订单状态：待查勘</li>-->
                <!--<li v-if = "item.orderStatus == '07'">订单状态：查勘中</li>-->
                <!--<li v-if = "item.orderStatus == '08'">订单状态：已查勘</li>-->
                <!--<li v-if = "item.orderStatus == '11'">订单状态：已取消</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="m-noContent-mod" v-else>-->
            <!--<div class="mnm-icon">-->
              <!--<img src="../images/bookIco_0.png">-->
            <!--</div>-->
            <!--<p>暂无待处理的案件...</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <div class="casePhotos">
      <div class="g-content-row"><!-- 69a49132-13fd-4705-b769-3f9ac3161fc2 -->
        <div class="ts-word" v-if="this.orgCode == '69a49132-13fd-4705-b769-3f9ac3161fc2'">如无行驶证请拍摄车辆年检标；营运车辆请拍摄营运资格证、从业资格证、开箱拍摄装载情况；搜集三者电话和骑手合影；前后碰撞请开箱拍摄内部及灯爪情况；现场如有特殊情况请及时反馈调度组！</div>
        <div class="gcr-mod m-carNo-imgInfo">
          <div class="gcr-tit" id="carInfo" style="justify-content: space-between;">
            <div style="display:flex;">
              <h4>照片信息</h4>
              <div v-if="carPhoneActive" style="display:flex;">
                <dl class="m-carNo-list" id="selectImgType" @click="selectCarAim('0',$event,saveonevehicleLicenseNo)">
                  <dd id="c0" class="data-car-m" >
                    <span v-if="oneCarActive" style="color: #35aa42;">标的车：{{saveonevehicleLicenseNo}}</span>
                    <span v-else>标的车：{{saveonevehicleLicenseNo}}</span>
                    <i data-type="1"  data-id="839" data-licenseno="saveonevehicleLicenseNo" @click="editorCar(saveonevehicleLicenseNo,saveonemobileNumber,saveoneoriginalVehicleLicenseNo,isOrderVehicleone,'0' )" v-if="oneCarActive" class="u-edit-icon"></i>
                    <i data-type="1"  data-id="839" data-licenseno="saveonevehicleLicenseNo" @click="editorCar(saveonevehicleLicenseNo,saveonemobileNumber,saveoneoriginalVehicleLicenseNo,isOrderVehicleone,'0')" v-else class="u-edit-iconGreay hide"></i>
                  </dd>
                </dl>
                <dl v-if="ImgInfo.length>1" class="m-carNo-list" id="selectImgTypeTwo" @click="selectCarAim('1',$event,savetwovehicleLicenseNo)">
                  <dd id="c1" class="data-car-m">
                    <span v-if="TwoCarActive" style="color: #35aa42;">三者车：{{savetwovehicleLicenseNo}}</span>
                    <span v-else>三者车：{{savetwovehicleLicenseNo}}</span>
                    <i data-type="1"  data-id="839"  @click="editorCar(savetwovehicleLicenseNo,savetwomobileNumber,savetwooriginalVehicleLicenseNo,isOrderVehicletwo,'1')" v-if="TwoCarActive" class="u-edit-icon"></i>
                    <i data-type="1" data-id="839"  @click="editorCar(savetwovehicleLicenseNo,savetwomobileNumber,savetwooriginalVehicleLicenseNo,isOrderVehicletwo,'1')" v-else class="u-edit-iconGreay"></i>
                  </dd>
                </dl>
                <dl v-if="ImgInfo.length > 2" class="m-carNo-list" id="selectImgTypeThree" @click="selectCarAim('2',$event,savethreevehicleLicenseNo)">
                  <dd id="c2" class="data-car-m">
                    <span v-if="threeCarActive" style="color: #35aa42;">三者车：{{savethreevehicleLicenseNo}}</span>
                    <span v-else>三者车：{{savethreevehicleLicenseNo}}</span>
                    <i data-type="1"  data-id="839" @click="editorCar(savethreevehicleLicenseNo,savethreemobileNumber,savethreeoriginalVehicleLicenseNo,isOrderVehiclethree,'2')" v-if="threeCarActive" class="u-edit-icon"></i>
                    <i data-type="1"  data-id="839" @click="editorCar(savethreevehicleLicenseNo,savethreemobileNumber,savethreeoriginalVehicleLicenseNo,isOrderVehiclethree,'2')" v-else class="u-edit-iconGreay "></i>
                  </dd>
                </dl>
                <div class="m-carNo-add" v-if="carThreeActive" id="addCarNo" @click="openAddCar('3')"></div>
              </div>
            </div>
            <div style="margin-top: 3px;">
              <span class="backColorGreen backColorGreenButton" @click="takephoneType('0')">45度角</span>
              <span class="backColorGreen backColorGreenButton" @click="takephoneType('1')">车架号</span>
              <span class="backColorGreen backColorGreenButton" @click="takephoneType('2')">行驶驾驶证</span>
            </div>
          </div>
          <div class="gcr-cont" style="padding-top: 0">
            <div class="m-carNo-imgList" id="picListZone" v-if="carPhoneActive">
              <!--<div class="prev" @click="preImginfo"></div>-->
              <div class="ulBox">
                <ul v-if="oneCarActive" class="suibian">
                  <li class="suibianList"  @click="seletedCarType($event,saveonevehicleLicenseNo,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in oneTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                      <div class="circle" v-if="item.photoCount > 1">{{item.photoCount}}</div>
                    </div>
                  </li>
                </ul>
                <ul v-if="TwoCarActive" class="suibian">
                  <li class="suibianList" @click="seletedCarType($event,savetwovehicleLicenseNo,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in twoTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                      <div class="circle" v-if="item.photoCount > 1">{{item.photoCount}}</div>
                    </div>

                  </li>
                </ul>
                <ul v-if="threeCarActive" class="suibian">
                  <li class="suibianList" @click="seletedCarType($event,savethreevehicleLicenseNo,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in threeTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                      <div class="circle" v-if="item.photoCount > 1">{{item.photoCount}}</div>
                    </div>
                  </li>
                </ul>
              </div>
              <!--<div class="next" @click="nextImgInfo"></div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-inner footer_p">
        <p> 版权所有：北京中车宝联科技有限责任公司</p>
      </div>
    </div>
      <!-- 打电话 -->
    <call-modal v-if="callPhoneStatus" v-bind:phone="callPhoneNum"></call-modal>
  </div>
</template>
<script>

  import caseList from '@/components/caseList'
  import caseMonitor from '@/components/caseMonitor'
  import callModal from '../components/callModal'
  import Bus from "../../rtcv/static/bus.js"
  import Viewer from 'viewerjs';
  import axios from 'axios';
  export default {
    ready() {
      console.log('111');
    },
    data() {
      return{
        insurecode:"",
        xsource:"",
        claimList:[],
        isTargetSign: false,
        isThirdSign: false,
        signatureList:[],
        claimMoneyOne:{},
        claimInformationOne:"",
        checkedCities:[""],
        cityOptions:["标的签字","三者的签字"],
        checkedValue:"",
        checkedOneState:false,
        checkedTwoState:false,
        clientWidth: '',
        clientimgWidth:'',
        showDealCase: true,
        beizhuInfo: "",
        editorcar: "",
        opsType: "1",
        isOrderVehicleone: "",
        isOrderVehicletwo:"",
        isOrderVehiclethree: "",
        saveoneoriginalVehicleLicenseNo: "",
        savetwooriginalVehicleLicenseNo: "",
        savethreeoriginalVehicleLicenseNo: "",
        haveVideoActive: false,
        exceptionCode: "",
        exceptionComment: "",
        isExceptionComplete: "1",
        photoCountActive: false,
        aimActive: false,
        thirdOneActive: false,
        thirdTwoActive: false,
        carThreeActive: true,
        carPhoneActive: false,
        steamActive: false,
        manualStatus: 2,
        noDealCase:[],
//        noDealCase:[{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"}],
        vehicleLicenseNo: "",
        mobileNumber:"",
        savephotoType: "",
        savephotoUrl: "",
        surveyNo: "",
        saveonevehicleLicenseNo: "",
        saveonemobileNumber: "",//标的车手机号
        savetwovehicleLicenseNo: "",
        savetwomobileNumber:"",//三者车第二个车手机号
        savethreevehicleLicenseNo: "",
        savethreemobileNumber: "",//三者车第三个车手机号
        oneCarActive: true,
        TwoCarActive: false,
        threeCarActive: false,
        haveCaseActive: false,
        surveyPhotos:[],//同种类型图片
        imglength: 15,//缩略图片个数,
        scalImgLength:"",//同种图片个数
        scalImgCurrentIndex: "1",
        oneTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/3.png"
              }
            ]
          }
        ],
        twoTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/3.png"
              }
            ]
          }
        ],
        threeTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/3.png"
              }
            ]
          }
        ],
        tooneTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../../rtcv/static/3.png"
              }
            ]
          }
        ],
        carTypecarType: [],
        takephotoUrl:'',
        cityData: ['京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','贵','云','藏','陕','甘','青','宁','新','琼','渝','川','桂'],
//        //倒计时
//        twoButton: true,
//        toOnlineActive: false,
//        processOnlineActive: true,
//        OnlineActive: false,
//
        //接通过程中
//        twoButton: false,
//        toOnlineActive: true,
//        processOnlineActive: false,
//        OnlineActive: false,
        //视频通话时
//        twoButton: false,
//        toOnlineActive: false,
//        processOnlineActive: false,
//        OnlineActive: true,
//未连接是
        surveyActive: false,
        twoButton: true,
        toOnlineActive: false,
        processOnlineActive: false,
        OnlineActive: false,

        waitActive: false,
        doingActive: false,
        jianKongActive: true,
        allCaseActive: false,
        newlongitude:"",//视频的经纬度
        newlatitude:"",//视频的经纬度
        ImgInfo: [],
        imgIndex: '',
        imgType: "",
        photoUrl: "",
        getCity: '京',
        left:0,
        scaleImgLeft: 0,
        roomId: "",
        roomInstance: '',
        localEl:"",
        remoteEl:"",
        videosEl: "",
        userId: "",
        orgCode: "",
        conttime: '30',
        leftData:"",
        node: "",
        connectNode: "",
        sessionNode: "",
        syncSessionNodePath: "",
        t: '',
        originalPhotoUrl:"",
        watermarkPhotoUrl:"",
        source: '',
        longitude:"",
        latitude:"",
        savevehicleLicenseNo: "",
        photoType: "",
        errorCode: "",
        errorMsg: "",
        remoteStream: "",
        localStream: "",
        warning:"",
        handleSurvey: "",
        beatTime: "",
        freshActive: false,
        originalVehicleLicenseNo: "",
        isOrderVehicle: "",
        dataString: '',
        dataInfoMsg: '',
        fromAccount: '',
        videoroomID: "",
        list:[],
        showLocal: false,
        wlhData:"",
        callPhoneNum:"",//拨打电话值
        callPhoneStatus:false,
        isScreenShot: false,
        listeners: {
//          "onConnNotify": webimhandler.onConnNotify, //选填
//          "onBigGroupMsgNotify": function (msg) {
//            webimhandler.onBigGroupMsgNotify(msg, function (msgs) {
//              receiveMsg(msgs);
//            })
//          }, //监听新消息(大群)事件，必填
//          "onMsgNotify": this.onMsgNotify(), //监听新消息(私聊(包括普通消息和全员推送消息)，普通群(非直播聊天室)消息)事件，必填
//          "onGroupSystemNotifys": RTCRoom.onGroupSystemNotifys, //监听（多终端同步）群系统消息事件，必填
          "onGroupInfoChangeNotify": webimhandler.onGroupInfoChangeNotify,
          // 'onKickedEventCall': self.onKickedEventCall // 踢人操作
        }
      }
    },
    created(){
      this.listeners.onConnNotify = this.onConnNotify;
      this.listeners.onMsgNotify = this.onMsgNotify;
       this.onDoubleRoomPageLoad();
//      this.saveaccout(roomUserId)
//      this.getUserMedia({ieVideo:true},"","");
      this.userId = localStorage.getItem('userId');
      this.orgCode = localStorage.getItem('orgCode');
      this.localEl = document.getElementById('local');
      this.videosEl = document.getElementById('ieVideo');
      this.getbeatTime()
      var m1 = localStorage.getItem('m'+this.userId);
      if(!this.freshActive){
        m1++;
      }
      localStorage.setItem('m'+this.userId,m1);
      if(this.userId&& this.orgCode){

      }else{
        this.$router.push({path:"/"})
      }
      this.getNodealCase()
      this.checkStateOne();
      this.getLeftData();
       Bus.$on('gbCallPhoneTc', () => { //Hub接收事件
        this.callPhoneStatus = false;
       });
      
    },

    watch:{

    },
    mounted () {
      this.insurecode = localStorage.getItem('insurecode');
      console.log(this.insurecode)
      var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;//浏览器宽度　

      this.clientWidth = w*(0.45)+'px';
      this.clientimgWidth = w*(0.40)+'px';
      window.onbeforeunload = function(){
        localStorage.setItem('A',"2")
      };
      window.onunload = function(){
//        that.roomInstance.disconnect();
      }
      this.beatTime = setInterval(() => {
        this.getbeatTime()
      }, 15000);
//      this.dataInfoMsg = setInterval(() => {
//        this.DataInfo()
//      }, 1000)
    },
    methods: {
       //打电话
      callPhone(e,phone){
        if(phone.length == 0){
           this.open4("电话号不能为空!")
          return
        }
        this.callPhoneStatus = true;
        this.callPhoneNum = phone;
      },
      handleCheckedCitiesChange(value) {
        this.signatureList = value;
          //alert(value)
      },
      //理赔金额
      one_part(e,key){
         this.claimMoneyOne[key] = e.target.value;
      },
      //处理数据
      modifyData(arr){
        for(var i = 0; i < arr .length; i++){
            arr[i] =  arr[i].substr(0,arr[i].length-1)
        }
        return arr
      },
      disposalData(arr){
        // console.log(arr,55555555)
           var claimList = [];
           for(var i = 0; i < this.ImgInfo.length; i++){
              var obj = {};
              obj.licenseNo = this.ImgInfo[i].originalVehicleLicenseNo;
              //cs
              //obj.surveyBaseInfoId = 1997;
              obj.surveyBaseInfoId = this.ImgInfo[i].id;
              obj.damagedPart = arr[i];
              obj.claimAmount = this.claimMoneyOne[i];
              claimList.push(obj)
             
           }
           return claimList;
      },
      //签字数据
       signatureData(){
             if(this.signatureList.length == 3){
              this.isTargetSign = true;
              this.isThirdSign = true;
              
            }else{
                if(this.signatureList[1] == "标的签字"){
                   this.isTargetSign = true;
                   this.isThirdSign = false;
                   
                }
              if(this.signatureList[1] == "三者的签字"){
                   this.isThirdSign = true;
                   this.isTargetSign = false;
                   
              }
              if(!this.signatureList[1]){
                  this.isThirdSign = false;
                  this.isTargetSign = false;
              }
            }
       },
      //理赔确定按钮
      claimButton(){
         var arr = $(".part");
         var claimInformationOne = "";
         var noList = [];
         var num = 0;
         var str = "";
         var monber = 0;
         for(var i = 0;i < arr.length;i++){
              num ++ ;
              if($(arr[i]).hasClass("checkoutGreen")){
                 str = $(arr[i]).children("span").html() + "-";
              }else{
                 str = "";
              };
              claimInformationOne += str
              if(num%8 == 0 && claimInformationOne != ""){
                noList.push(claimInformationOne);
                str = "";
                claimInformationOne = "";
              }

          };
          //理赔部位表
         var list =  this.modifyData(noList);
         if(list.length != this.ImgInfo.length){
              this.$message.error("请将信息填写完成！");
              return
         }
         for(var i  in this.claimMoneyOne){
            monber ++;
         }
         if(monber != this.ImgInfo.length){
            this.$message.error("请将信息填写完成！");
            return
         }
          //理赔信息
           var claimList = this.disposalData(list);
           this.claimList = claimList;
           this.signatureData();
            $(".claim-wrap").addClass("hide");
        
         // console.log(this.ImgInfo,222222)
         // console.log(claimList,6666666666)
         
      },
      part(e){
          if($(e.target).hasClass("checkoutGreen")){
              $(e.target).removeClass("checkoutGreen");
              $(e.target).addClass("checkoutWhite");
            }else{
              $(e.target).addClass("checkoutGreen");
              $(e.target).removeClass("checkoutWhite");
            }
      },
      closeClaimDiolag(){
        $(".claim-wrap").addClass("hide");
      },
      checkedOneEven(e){
          if(!this.checkedTwoState){
             if($(e.target).hasClass("setGreen")){
              $(e.target).removeClass("setGreen");
              $(e.target).addClass("setWhite");
              this.checkedValue = "";
              this.checkedOneState = false;
            }else{
              $(e.target).addClass("setGreen");
              $(e.target).removeClass("setWhite");
              this.checkedValue = 2;
              this.checkedOneState = true;
            }
          }
             
          
      },
      checkedTwoEven(e){
        if(!this.checkedOneState){
          if($(e.target).hasClass("setGreen")){
            $(e.target).removeClass("setGreen");
            $(e.target).addClass("setWhite");
            this.checkedValue = "";
            this.checkedTwoState = false;
            $('.claim-wrap').addClass("hide");
          }else{
            $(e.target).addClass("setGreen");
            $(e.target).removeClass("setWhite");
            this.checkedValue = 3;
            this.checkedTwoState = true;
            $('.claim-wrap').removeClass("hide");
          }
        }
      },

      
      onConnNotify (resp) {
        switch (resp.ErrorCode) {
          case webim.CONNECTION_STATUS.ON:
            console.log('建立连接成功: ' + resp.ErrorInfo)
            webim.Log.warn('建立连接成功: ' + resp.ErrorInfo);
            break;
          case webim.CONNECTION_STATUS.OFF:
            console.log('连接已断开，无法收到新消息，请检查下你的网络是否正常: ' + resp.ErrorInfo);
           this.open4('请检查下你的网络是否正常')
            break;
          case webim.CONNECTION_STATUS.RECONNECT:
            console.log('连接状态恢复正常: ' + resp.ErrorInfo)
            break;
          default:
            console.log('未知连接状态: =' + resp.ErrorInfo);
            break;
        }
       },
      //3个照片类型
      takephoneType(type){

        var photoType = 'WEB$$takePic'+ type;
        console.log(photoType)
        this.sendMsg(this.fromAccount,photoType)
      },
      paizhao(){

      },
      changeCaseStatius(type){
        if(type == 1){
//          this.getLeftData()
          this.showDealCase = true;
          $(".doingCase").addClass("selectButton")
          $(".waitCase").removeClass("selectButton")
        }else if(type == 2){
          this.getNodealCase()
          $(".waitCase").addClass("selectButton");
          $(".doingCase").removeClass("selectButton")
          this.showDealCase = false;
        }
      },
      onDoubleRoomPageLoad() {
      var that = this;
      // doCheckIE();
    //doLoadActiveXPlugin();
    RTCRoom.httpRequest({
      //url: "https://lvb.qcloud.com/weapp/double_room/get_im_login_info",
      url: "https://160716803.shipinlipei.com/weapp/double_room/get_im_login_info",
      data: {userIDPrefix: "IE(ActiveX)"},
      method: "POST",
      success: function (ret) {
        if (ret.data.code != 0) {
          console.log("获取IM登录信息失败:" + ret.data.toString());
        }
        //gai
        //ret.data.serverDomain = "https://lvb.qcloud.com/weapp/double_room/";
        //https://160716803.shipinlipei.com
        ret.data.serverDomain = "https://160716803.shipinlipei.com/weapp/double_room/";
        userID = ret.data.userID;
        ret.data.divId = "PusherAreaID";
        ret.data.userName = myUserName;
        console.log(that.listeners)
        that.wlhData = ret.data;
        console.log(that.wlhData,"that.wlhData")
        RTCRoom.init({
          data: ret.data,
          success: function (ret) {
            console.log('ret'+JSON.stringify(ret))
            console.log("2082"+JSON.stringify(loginInfo))
            webim.login(
              loginInfo, that.listeners, options,
              function (resp) {
                console.log('webim登陆成功');
                console.log('userID'+userID);
                loginInfo.identifierNick = resp.identifierNick;//设置当前用户昵称;
                //保存imaccount
                that.saveWebimaccount(loginInfo.identifier)
              },
              function (err) {
                //console.log(err.ErrorInfo);
              }
            );
            console.log("登录初始化成功");
            // refreshRoomList(3000);
            // var nameview = document.getElementById("my-username");
            // nameview.innerText = myUserName;
          },
          fail: function () {
            console.log("获取IM登录信息成功，初始化失败:", ret.data.toString());
          }
        });

        RTCRoom.setListener({
          onGetPusherList: onGetMemberList,
          onPusherJoin: onMemberJoin,
          onPusherQuit: onMemberQuit,
           onRoomClose: that.onRoomClose,
//          onRecvRoomTextMsg: that.onRecvRoomTextMsg
        });

      },
      fail: function (ret) {
        alert("进入双人视频失败，请刷新页面重试，错误码:" + ret.code + ret.msg);
      }
    });
  },
      saveWebimaccount(webAccount){
        console.log(webAccount)
        var data = {
          "imAccount":webAccount,
          'userId':this.userId,
        }
        axios.post(this.ajaxUrl+"/web/surveyor/v1/im/account",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.open2(response.data.resdes)
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      onRoomClose(ret){
        var type = '1'
        this.disconnect(type)
      },
      onRecvRoomTextMsg(ret){
        console.log("收到消息:" + ret.textMsg);
      },
      //发送消息
   sendMsg (selToID,isReceive) {
     console.log('selToID'+selToID)
     console.log('isReceive'+isReceive)
    var selType = webim.SESSION_TYPE.C2C;//一对一
    var selSessHeadUrl;
    var selSess = new webim.Session(selType, selToID, selToID, selSessHeadUrl, Math.round(new Date().getTime() / 1000));
    var isSend = false;//是否为自己发送
    var seq = -1;//消息序列，-1表示sdk自动生成，用于去重
    var random = Math.round(Math.random() * 4294967296);//消息随机数，用于去重
    var msgTime = Math.round(new Date().getTime() / 1000);//消息时间戳
    var subType;//消息子类型
    if (selType == webim.SESSION_TYPE.GROUP) {
      //群消息子类型如下：
      //webim.GROUP_MSG_SUB_TYPE.COMMON-普通消息,
      //webim.GROUP_MSG_SUB_TYPE.LOVEMSG-点赞消息，优先级最低
      //webim.GROUP_MSG_SUB_TYPE.TIP-提示消息(不支持发送，用于区分群消息子类型)，
      //webim.GROUP_MSG_SUB_TYPE.REDPACKET-红包消息，优先级最高
      subType = webim.GROUP_MSG_SUB_TYPE.COMMON;
    } else {
      //C2C消息子类型如下：
      //webim.C2C_MSG_SUB_TYPE.COMMON-普通消息,
      subType = webim.C2C_MSG_SUB_TYPE.COMMON;
    }
    var msg = new webim.Msg(selSess, isSend, seq, random, msgTime, loginInfo.identifier, subType, loginInfo.identifierNick);
    var text_obj = new webim.Msg.Elem.Text(isReceive);
    msg.addText(text_obj);
    //调用发送消息接口
    webim.sendMsg(msg, function (resp) {
      //if (selType == webim.SESSION_TYPE.C2C) {//私聊时，在聊天窗口手动添加一条发的消息，群聊时，长轮询接口会返回自己发的消息
      //  addMsg(msg);
      //}
      webim.Log.info("发自定义消息成功");
      console.log("发自定义消息成功")
    }, function (err) {
      webim.Log.info(err.ErrorInfo);
      console.log('发自定义消息失败:', err);
    });
  },
      //监听消息
        onMsgNotify(newMsgList) {

          console.info('监听新消息事件 =====> ' ,newMsgList);
//            console.warn('监听新消息事件 =====> ' + newMsgList);
          var sess, newMsg,selSess;
          //获取所有聊天会话
          var sessMap = webim.MsgStore.sessMap();

          for (var j in newMsgList) {//遍历新消息
            newMsg = newMsgList[j];
            console.log(newMsg,"xioaxi")
            this.fromAccount = newMsg.fromAccount;
            selSess = newMsg.getSession();
            //在聊天窗体中新增一条消息
            this.dataString = convertMsgtoHtml(newMsg);
            console.log(this.dataString,88888888888888888)
           
            this.dataString = this.dataString.replace(/&quot;/g, "'");
            this.DataInfo()

          }
          //消息已读上报，以及设置会话自动已读标记
          webim.setAutoRead(selSess, true, true);
          for (var i in sessMap) {
            sess = sessMap[i];
            if (loginInfo.identifier != sess.id()) {//更新其他聊天对象的未读消息数
//                    updateSessDiv(sess.type(), sess.id(), sess.unread());
            }
          }
        },
      DataInfo(){
        console.log('dataString2067'+this.dataString)
        if(this.dataString){
          this.dataString = eval("("+this.dataString+")");
            this.newlongitude = this.dataString.longitude;
            this.newlatitude = this.dataString.latitude;
            console.log(this.newlatitude,this.newlongitude,"weigu ");
          if(this.dataString.hangup == 'hangup'){//对方退出房间
            this.disconnect("1");
            return
          }else if('imgurl' in this.dataString){//监听收到图片
            if('source' in this.dataString){
              this.source = this.dataString.source;

              //小程序发送的IM
            }
            console.log('2193'+this.dataString.imgurl)
            this.longitude = this.dataString.longitude;
            this.latitude = this.dataString.latitude;

            this.watermarkPhotoUrl = this.dataString.watermarkPhotoUrl;
            this.originalPhotoUrl = this.dataString.originalPhotoUrl;
            console.log(this.originalPhotoUrl)
            this.$nextTick(() => {
              new Viewer(document.getElementById('bigsizeImg'), {
                url: 'data-src',
                navbar:false,
                toolbar:false,
                loop: true
              })
            })
            this.openTakePhone();
          }else{
//            this.getroomList()
            this.getsyncSessionNodePath();


          }
        }

      },
      // 双向视频
      triggerBox (){
          this.showLocal = ! this.showLocal;
          if(this.showLocal){
            this.sendMsg(this.fromAccount,'WEB$$openRemoteWindow');
          }else {
            this.sendMsg(this.fromAccount,'WEB$$closeRemoteWindow');            
          }
      },
      //退出房间(挂断)
      disconnect(type){
        this.showLocal = false;
        this.source = ''
//        console.log('accountInfo.roomID'+accountInfo.roomID)
        clearInterval(this.t);
        this.conttime = 30;
        this.releaseStatius()
        this.surveyActive = true;
        if(type == '0'){//手动挂断
          var text = 'hangup';
          this.sendMsg(this.fromAccount,text);
        }
        RTCRoom.exitRoom();
        inRoom = false;
        // RTCRoom.setMute(true);
        this.$nextTick(()=>{
          this.steamActive = false;
          this.twoButton =  true;
          this.toOnlineActive = false;
          this.processOnlineActive = false;
          this.OnlineActive  = false;
          this.listeners.onMsgNotify = this.onMsgNotify;

        })
      },
      getroomList(){//获取房间id
        var that = this;
        console.log('2254'+this.dataString)
        RTCRoom.getRoomList({
          data: {
            index: 0,
            cnt: 100
          },
          success: function(ret) {
            ret.rooms.forEach(function (roomInfo) {
              console.log('roomInfo'+roomInfo)
//              that.videoroomID =  roomInfo.roomID.toString();
//              console.log('房间id'+that.videoroomID)
//              roomID = that.videoroomID;
//              that.getsyncSessionNodePath();
            });
          },
          fail: function(ret) {
            console.log("拉取房间列表失败");
          }
        });
      },
      //保存roomuserId
      saveaccout(roomuserId){
        var data = {
          "imAccount": roomuserId,
          "userId": 58

        }
        axios.post(this.ajaxUrl+"/heartbeat/v1/beat",data)
          .then(response => {
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      showFull(){
        var myvideo=document.getElementById("remote");
        myvideo.webkitrequestFullscreen();
      },
      getbeatTime(){
        var data = {
          'userid':this.userId,

        }
        axios.post(this.ajaxUrl+"/heartbeat/v1/beat",data)
          .then(response => {
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      open6() {
        this.$message({
          showClose: true,
          message: '操作成功',
          type: 'success'
        });
      },
      open2(resdes) {
        this.$message.success(resdes);
      },
      open4(resdes) {
        this.$message.error(resdes);
      },
      //保存照片
      sureTakeImg(){

        // alert(this.newlongitude,this.newlatitude)
        if(this.savevehicleLicenseNo == ''){
          this.open4("请选择车牌号")
        }else if(this.photoType == ''){
          this.open4("请选择照片类型")
        }else{
          //重新
          //this.xsource = this.source;
          if(this.source == 'wechat'){
            var url = '/survey/order/v2/photo/choice';
            var data = {
            "originalPhotoUrl":this.originalPhotoUrl,
            'photoType':this.photoType,
            // "photoUrl":this.watermarkPhotoUrl,
            "surveyNo": this.roomId,
            "vehicleLicenseNo": this.savevehicleLicenseNo,
            "longitude":this.longitude,
            "latitude": this.latitude
            }
          }else{
            var url = '/survey/order/v1/photo/choice';
            var data = {
            "originalPhotoUrl":this.originalPhotoUrl,
            'photoType':this.photoType,
            "photoUrl":this.watermarkPhotoUrl,
            "surveyNo": this.roomId,
            "vehicleLicenseNo": this.savevehicleLicenseNo,
            "longitude":this.longitude,
            "latitude": this.latitude
            }
          }
          axios.post(this.ajaxUrl+url,data)
            .then(response => {
              if(response.data.rescode == 200){
                $(".takePhoneImgBox").addClass("hide")
                $(".takePhonetypeBox").addClass("hide")
                this.open2(response.data.resdes)
                this.photoType = '';
                $("#selectImgTypeCont").find(".tag").addClass("hide");
                $(".ddClass").removeClass("showTag");
                this.getPhontos();
                this.aimActive = false;
                this.thirdOneActive = false;
                this.thirdTwoActive=false;
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }

      },
      forceClose(){
        var data = {
          "userId":this.userId
        }
        axios.post(this.ajaxUrl+"/web/surveyor/v1//force/close",data)
          .then(response => {
            if(response.data.rescode == 200){
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      enterVedeo(){
        $("#bar_46122248740144030").removeClass("hide");
      },
      leaveVideo(){
        $("#bar_46122248740144030").addClass("hide");
      },
      openLight(){
        var openLight = 'WEB$$openLight';
        this.sendMsg(this.fromAccount,openLight);
      },

      takeScreenshot(e) {
        this.isScreenShot = true;

        var canvas = document.getElementById("mycanvas");
        var video = document.getElementById("remoteVideo");
        var context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var image = new Image();
        // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
        // 指定格式 PNG
        var src = canvas.toDataURL("image/jpeg");

        // 把照片发给后台
        axios
          .post(this.ajaxUrl + "/survey/order/v1/photo/upload", {
            imageBase64: src.replace("data:image/jpeg;base64,", "")
          })
          .then(res => {
            if (res.data.rescode == 200) {
              this.originalPhotoUrl = res.data.data.originalPhotoUrl;
              // 显示图片弹窗
              $(".takePhoneImgBox").removeClass("hide");
            } else {
              this.open4('上传失败');
            }
          });
      },


      //点击拍照
      takePic(){
        this.isScreenShot = false;
        //发送拍照片指令
        var isPhone = 'WEB$$takePic';
        this.sendMsg(this.fromAccount,isPhone);
      },
      pushErroCode(){
        if(this.errorCode == '41001'){
          this.open4(" token 过期")
        } else if(this.errorCode == '41002'){
          this.open4("token 无效")
        }else if(this.errorCode == '41004'){
          this.open4("视频会议建联失败")
        }else if(this.errorCode == '41005'){
          this.open4("音视频设备获取失败")
        }else if(this.errorCode == '41006'){
//          this.open4("操作超时")
        }
        if(this.roomId == ""){
          this.roomId = "noSurveyNo"
        }
        var data = {
          'surveyNo':this.roomId,
          "videoRoomId":this.roomId,
          "errorCode": this.errorCode,
          "errorMsg":this.errorMsg
        }
        axios.post(this.ajaxUrl+"/survey/ieVideo/v1//error/trace",data)
          .then(response => {
            if(response.data.rescode == 200){

            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //改变坐席自动状态
      releaseStatius(){
        var data = {
          "surveyNo":this.roomId
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/release",data)
          .then(response => {
            if(response.data.rescode == 200){
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //
      rollback(){
        var data = {
          "surveyNo":this.roomId
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/timeout/rollback",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.getNodealCase();
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },

      //忽略订单
      ignoreCase(){
        var data = {
          'surveyNo':this.roomId,
          "userId":this.userId
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/ignore",data)
          .then(response => {
            if(response.data.rescode == 200){
              $(".takePhoneImgBox").addClass("hide")
              $(".takePhonetypeBox").addClass("hide")
              this.open2(response.data.resdes)
              this.photoType = '';
              $("#selectImgTypeCont").find(".tag").addClass("hide");
              $(".ddClass").removeClass("showTag");
              this.aimActive = false;
              this.thirdOneActive = false;
              this.thirdTwoActive=false;
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //视频接连失败请求
      connectFail(){
        var data = {
          "surveyNo": this.roomId,
        }
        axios.post(this.ajaxUrl+"/survey/ieVideo/v1/connect/fail",data)
          .then(response => {
            if(response.data.rescode == 200){
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      join(){
        this.haveVideoActive = false;
        this.handleSurvey = '';
        this.acceptStatus(this.roomId);
        $(".takePhoneImgBox").addClass("hide");
        this.twoButton= false;
        this.toOnlineActive= true;
        this.processOnlineActive= false;
        this.OnlineActive=false;
        this.surveyActive = false;
        this.conttime = 30;
        clearInterval(this.t);
        var that = this;
        var isReceive = 'WEB$$goToConnection';
        that.steamActive = true;
        this.$nextTick(() => {
          // var cameras = RTCRoom.getCameras();
          // if (cameras.camera_cnt <= 0) {
          //   alert("进入房间失败，没有可用的摄像头");
          //   this.steamActive = false;
          //   this.twoButton =  true;
          //   this.toOnlineActive = false;
          //   this.processOnlineActive = false;
          //   this.OnlineActive  = false;
          //   this.listeners.onMsgNotify = this.onMsgNotify;
          //   return;
          // }
          inRoom = true;
          var data = that.wlhData;
          data.roomID = that.videoroomID;
          RTCRoom.enterRoom({
            data: data,
            success: function () {
              that.sendMsg(that.fromAccount,isReceive);
              that.twoButton = false;
              that.surveyActive = false;
              that.toOnlineActive = false;
              that.processOnlineActive =  false;
              that.OnlineActive = true;
            },
            fail: function (ret) {
              console.log(ret);
            }
          })
        })
      },
      //监听是否有视频发起
      getsyncSessionNodePath(){
        var that = this;
        if(this.dataString){
          that.haveVideoActive = true;
          console.log('2693'+that.dataString);
          that.getNodealCase();
          that.leftData = that.dataString.orderData;
//          that.leftData = that.dataString.surveyOrderInfo;
          that.videoroomID = that.dataString.videoRoomId;
          if('source' in that.dataString){
              that.xsource = that.dataString.source;
              //小程序发送的IM
            }
            console.log('房间id'+that.videoroomID)
            roomID = that.videoroomID;
            that.roomId = that.leftData.surveyNo;
            console.log(that.leftData.reportVehicleLicenseNo)
            that.savevehicleLicenseNo = that.leftData.reportVehicleLicenseNo;
            that.saveonevehicleLicenseNo = that.leftData.reportVehicleLicenseNo
            if(that.leftData.isNew == '0'){
              that.twoButton = false;
            }else{
              that.twoButton = true;
            }
          that.doingActive = true;
          that.toOnlineActive = false;
          that.processOnlineActive = true;
          that.OnlineActive = false;
          that.surveyActive = false;
          clearInterval(that.t);       //停止计时器
          that.t = setInterval(function () {
            if (that.conttime > 0) {
              that.conttime = that.conttime-1;
            }
            if (that.conttime === 0) {

              that.haveVideoActive = false;
              //发送未接视频指令
              var  isReceive = 'WEB$$refuseConnection';//未接听视频
              that.sendMsg(that.fromAccount,isReceive);
              console.log('2829'+that.leftData.isNew)
              if(that.leftData.isNew == '0'){//新订单发起视频未连接
                that.ignoreCase();
                that.ImgInfo = [];
                that.carPhoneActive = false;
                that.saveonevehicleLicenseNo ='';
                that.savetwovehicleLicenseNo = '';
                that.savethreevehicleLicenseNo = '';
                that.leftData = '';
                that.savevehicleLicenseNo = '';
                that.doingActive = false;//显示左边无案件图标
              }else if(that.leftData.isNew == '1'){//旧案件发起视频未连接
                if(that.leftData.isWait  == "1"){// 不是待处理订单需要停留在左边
                  that.twoButton = true;
                  that.surveyActive = true;
                  that.toOnlineActive=false;
                  that.processOnlineActive=false;
                  that.OnlineActive=false;
                  that.handleSurvey = '';
                }else if(that.leftData.isWait  == "0"){//待处理订单需要停留在右边
                  that.ImgInfo = [];
                  that.carPhoneActive = false;
                  that.saveonevehicleLicenseNo ='';
                  that.savetwovehicleLicenseNo = '';
                  that.savethreevehicleLicenseNo = '';
                  that.leftData = '';
                  that.savevehicleLicenseNo = '';
                  that.doingActive = false;//显示左边无案件图标
                  that.rollback();

                }
              }
              that.conttime = 30;
              clearInterval(that.t);       //停止计时器
            }
          }, 1000)
          that.getPhontos();
        }
      },
      //后台修改状态
      acceptStatus(surveyNo){
        var data = {
          "surveyNo": surveyNo
        }
        axios.post(this.ajaxUrl+"/survey/video/v1/accept/connect",data)
          .then(response => {
            if(response.data.rescode == 200){
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
     //点击挂起
      hangUp(surveyNo){
        var data = {
          "surveyNo": surveyNo
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/suspend",data)
          .then(response => {
            if(response.data.rescode == 200){
                this.ImgInfo = [];
                this.carPhoneActive = false;
                this.saveonevehicleLicenseNo ='';
                this.savetwovehicleLicenseNo = '';
                this.savethreevehicleLicenseNo = '';
                this.leftData = '';
                this.savevehicleLicenseNo = '';
                this.doingActive = false;//显示左边无案件图标
                this.getNodealCase();
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      //获取挂起订单列表
      getNodealCase(){
        var data = {
          "userId":parseInt(this.userId)
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/wait/order/list",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.noDealCase = response.data.data;
//            /  this.noDealCase =  [{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"},{"reportVehicleLicenseNo":"222",'reporterPhone':"33",'liveSurveyorName':"333",'liveSurveyorPhone':"5555",'orderStatus':"06"}]
              if(this.noDealCase.length!=0){
                this.waitActive = true;//应该true
              }
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      editorCar(vehicleLicenseNo,mobileNumber,originalVehicleLicenseNo,isOrderVehicle,editorcar){
        $(".editorCarInfo").removeClass("hide");
        this.originalVehicleLicenseNo  = originalVehicleLicenseNo;
        this.isOrderVehicle = isOrderVehicle;
        //新加手机号
        this.mobileNumber = mobileNumber;
        this.opsType = "0";
        console.log(this.originalVehicleLicenseNo);
        this.getCity = vehicleLicenseNo.substring(0,1);
        this.vehicleLicenseNo = vehicleLicenseNo.substring(1);
        console.log(vehicleLicenseNo)
      },
      //保存车辆车牌号
      savevehicle(){
        var r = /^[0-9]*$/;
        var phone = this.mobileNumber;
        if(!r.test(phone)){
            this.open4("请输入正确的手机号");
            return
        };
        if(this.vehicleLicenseNo == ''){
          this.open4("请输入车牌号");
        }else{
          if(this.originalVehicleLicenseNo == ''){
            this.originalVehicleLicenseNo = this.getCity+this.vehicleLicenseNo;
          }
          var data = {
            'surveyNo':this.roomId,
            "vehicleLicenseNo":this.getCity+this.vehicleLicenseNo,
            "originalVehicleLicenseNo": this.originalVehicleLicenseNo,
            "isOrderVehicle": this.isOrderVehicle,
             "mobileNumber" :this.mobileNumber,
            "opsType": this.opsType
          }
          axios.post(this.ajaxUrl+"/survey/vehicle/v1/vehicle",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(this.isOrderVehicle == "1"){
                  this.leftData.reportVehicleLicenseNo = this.getCity+this.vehicleLicenseNo;
                }
                $(".editorCarInfo").addClass("hide")
                this.vehicleLicenseNo = "";
                this.getCity = "京";
                this.open2(response.data.resdes);
                this.getPhontos()
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },
        //保存备注信息
      saveBeizhu(){
        this.beizhuInfo = this.beizhuInfo.replace(/(^\s*)|(\s*$)/g, "");
        if(this.beizhuInfo == ''){
          this.open4("请输入备注")
        }else{
          var data = {
            'surveyNo':this.roomId,
            "noteContent":this.beizhuInfo

          }
          axios.post(this.ajaxUrl+"/survey/order/v1/save/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                this.beizhuInfo = '';
                $(".beizhuDiolag").addClass('hide');
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },
      closeEditorCar(){
        $(".editorCarInfo").addClass('hide');
        this.getCity = '京';
        this.vehicleLicenseNo = '';
      },
      closeBeizhu(){
        $(".beizhuDiolag").addClass('hide');
      },
      getPhontos(){
        var data = {
          'surveyNo':this.roomId,
        }
        axios.post(this.ajaxUrl+"/survey/vehicle/v1/vehicle/list",data)
          .then(response => {
            if(response.data.rescode == 200){
              this.carPhoneActive = true;
              this.ImgInfo = response.data.data;
              this.oneTypeSurveyPhotos = [
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "0",
                  "photoTypeComment": "45度车辆前景照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "1",
                  "photoTypeComment": "当事人和车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "2",
                  "photoTypeComment": "当事车辆车架号",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "3",
                  "photoTypeComment": "车辆受损细节(1)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/1.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "4",
                  "photoTypeComment": "车辆受损细节(2)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/1.png"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "5",
                  "photoTypeComment": " 交强险标志",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "6",
                  "photoTypeComment": "银行卡照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "7",
                  "photoTypeComment": "其它照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "8",
                  "photoTypeComment": "事故认定书",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "9",
                  "photoTypeComment": "行驶本照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "10",
                  "photoTypeComment": "驾驶证照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "11",
                  "photoTypeComment": "当事人签名照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/2.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "12",
                  "photoTypeComment": "身份证正面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "13",
                  "photoTypeComment": "身份证背面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "14",
                  "photoTypeComment": "查勘员与车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/3.png"
                    }
                  ]
                }
              ];
              this.twoTypeSurveyPhotos = [
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "0",
                  "photoTypeComment": "45度车辆前景照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "1",
                  "photoTypeComment": "当事人和车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "2",
                  "photoTypeComment": "当事车辆车架号",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "3",
                  "photoTypeComment": "车辆受损细节(1)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/1.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "4",
                  "photoTypeComment": "车辆受损细节(2)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/1.png"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "5",
                  "photoTypeComment": " 交强险标志",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "6",
                  "photoTypeComment": "银行卡照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "7",
                  "photoTypeComment": "其它照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "8",
                  "photoTypeComment": "事故认定书",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "9",
                  "photoTypeComment": "行驶本照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "10",
                  "photoTypeComment": "驾驶证照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "11",
                  "photoTypeComment": "当事人签名照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/2.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "12",
                  "photoTypeComment": "身份证正面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "13",
                  "photoTypeComment": "身份证背面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "14",
                  "photoTypeComment": "查勘员与车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/3.png"
                    }
                  ]
                }
              ];
              this.threeTypeSurveyPhotos = [
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "0",
                  "photoTypeComment": "45度车辆前景照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_1.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "1",
                  "photoTypeComment": "当事人和车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_2.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "2",
                  "photoTypeComment": "当事车辆车架号",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_3.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "3",
                  "photoTypeComment": "车辆受损细节(1)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/1.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "4",
                  "photoTypeComment": "车辆受损细节(2)",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/1.png"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "5",
                  "photoTypeComment": " 交强险标志",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_4.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "6",
                  "photoTypeComment": "银行卡照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_5.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "7",
                  "photoTypeComment": "其它照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_6.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "8",
                  "photoTypeComment": "事故认定书",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_7.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "9",
                  "photoTypeComment": "行驶本照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_8.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "10",
                  "photoTypeComment": "驾驶证照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_9.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "11",
                  "photoTypeComment": "当事人签名照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/2.png"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "12",
                  "photoTypeComment": "身份证正面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_10.jpg"
                    }
                  ]
                },{
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "13",
                  "photoTypeComment": "身份证背面照片",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/icon_noImg_11.jpg"
                    }
                  ]
                },
                {
                  'hasUrl': 'false',
                  "photoCount": "",
                  "photoType": "14",
                  "photoTypeComment": "查勘员与车辆合影",
                  "surveyPhotos": [
                    {
                      "photoId": "",
                      "watermarkPhotoUrl": "../../rtcv/static/3.png"
                    }
                  ]
                }
              ];
              console.log(this.ImgInfo.length)
              if(this.ImgInfo.length == 3){
                 this.carThreeActive = false;
              }
              for(let k in this.ImgInfo){
                if(k == 0){
                  for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
                    this.saveonevehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
                    //新加手机号，标车第一个
                    this.saveonemobileNumber = this.ImgInfo[k].mobileNumber;
                    this.saveoneoriginalVehicleLicenseNo = this.ImgInfo[k].originalVehicleLicenseNo;
                    this.isOrderVehicleone = this.ImgInfo[k].isOrderVehicle;
                    for(let j in this.oneTypeSurveyPhotos){
                      if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.oneTypeSurveyPhotos[j].photoType){
                        this.oneTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                        this.oneTypeSurveyPhotos[j].hasUrl = 'true';
                      }
                    }
                  }
                }else if(k == 1){
                  for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
                    this.savetwovehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
                    //新加手机号，第二个
                    this.savetwomobileNumber = this.ImgInfo[k].mobileNumber;
                    this.savetwooriginalVehicleLicenseNo = this.ImgInfo[k].originalVehicleLicenseNo;
                    this.isOrderVehicletwo = this.ImgInfo[k].isOrderVehicle;
                    for(let j  in this.twoTypeSurveyPhotos){
                      if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.twoTypeSurveyPhotos[j].photoType){
                        this.twoTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                        this.twoTypeSurveyPhotos[j].hasUrl = 'true';
                      }
                    }
                  }
                }else if(k == 2){
                  for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
                    this.savethreevehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
                    //新加手机号，第三个
                    this.savethreemobileNumber = this.ImgInfo[k].mobileNumber;
                    this.savethreeoriginalVehicleLicenseNo = this.ImgInfo[k].originalVehicleLicenseNo;
                    this.isOrderVehiclethree = this.ImgInfo[k].isOrderVehicle;
                    for(let j  in this.threeTypeSurveyPhotos){
                      if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.threeTypeSurveyPhotos[j].photoType){
                        this.threeTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                        this.threeTypeSurveyPhotos[j].hasUrl = 'true';
                      }
                    }
                  }
                }
              }
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })


      },
      selectCarAim(order,ele,savevehicleLicenseNo){
        this.left = 0;
        this.savevehicleLicenseNo = savevehicleLicenseNo;
        $(".suibian").css("left",this.left);
        switch (order) {
          case "0":
            this.oneCarActive = true;
            this.TwoCarActive = false;
            this.threeCarActive = false;
            $(".tag").addClass("hide")
            break;
          case "1":
            this.oneCarActive = false;
            this.TwoCarActive = true;
            this.threeCarActive = false;
            $(".tag").addClass("hide")
            break;
          case "2":
            this.oneCarActive = false;
            this.TwoCarActive = false;
            this.threeCarActive = true;
            $(".tag").addClass("hide")
            break;
        }

      },
      typeSelection(){
          var str = "1";
          if(this.checkedOneState){
             str = "2";
          }
          if(this.checkedTwoState){
            str = "3"
          }
          return str
      },
      setElectronic(){
         var type =  this.typeSelection();
         var surveyNo = this.leftData.surveyNo;
         var data = {};
         if(!this.checkedTwoState){
            data.type =  this.typeSelection();
            //cs
            //data.surveyNo = "9e9d5480311b4b3496b16c9664fd84e3"
            data.surveyNo = this.leftData.surveyNo;
         }else{
            data.type =  this.typeSelection();
            //cs
            //data.surveyNo = "9e9d5480311b4b3496b16c9664fd84e3"
            data.surveyNo = this.leftData.surveyNo;
            data.isTargetSign = this.isTargetSign;
            data.isThirdSign = this.isThirdSign;
            data.claimList = this.claimList;
         };
          axios.post(this.ajaxUrl+"/survey_single/v1/send",data)
          .then(response => {
              console.log("测试接口失败")
             if(response.data.rescode == 200){
              //console.log(response,"测试接口通过")
               this.surveyComplete();
               
             }
          }, err => {
            console.log(err);
            $(".loadingBox").addClass('hide')
          })
          .catch((error) => {
            console.log(error)
            $(".loadingBox").addClass('hide')
          })
        console.log(data,5555555555)
      },
      surveyComplete(){
         var data = {
          "surveyNo":this.roomId,
          "isExceptionComplete":this.isExceptionComplete,
          // "exceptionCode":this.exceptionCode,
          //"exceptionComment": this.exceptionComment
        }
        // alert(this.source)
        if(this.xsource == 'wechat'){
            var url = '/survey/order/v1/weixin/complete';
          }else{
            var url = '/survey/order/v1/complete';
          }
        axios.post(this.ajaxUrl+url,data)
          .then(response => {
//            $(".loadingBox").addClass('hide')
            if(response.data.rescode == 200){
              this.ImgInfo = [];
              this.carPhoneActive = false;
              this.saveonevehicleLicenseNo ='';
              this.savetwovehicleLicenseNo = '';
              this.savethreevehicleLicenseNo = '';
              this.leftData = '';
              this.savevehicleLicenseNo = '';
              this.steamActive = false;
              this.twoButton =  true;
              this.toOnlineActive = false;
              this.processOnlineActive = false;
              this.OnlineActive  = false;
              this.doingActive = false;
              this.xsource = "";
              $(".orderSelectDialog").addClass("hide");
               this.open6();
              //this.setElectronic();
            }else{
                //console.log(response.data.resdes,444444444)
//              $(".loadingBox").addClass('hide')
              //this.open4(response.data.resdes.exceptionComment)
              //this.open4("请输入事故经过");
              this.open4("请发送电子查勘单");
            }
          }, err => {
            console.log(err);
            $(".loadingBox").addClass('hide')
          })
          .catch((error) => {
            console.log(error)
            $(".loadingBox").addClass('hide')
          })
      },
    //查勘完成
      openOrderEndBox(){
//        $(".loadingBox").removeClass('hide')
          //测试
         // this.setElectronic();
         // return
          //this.setElectronic();
         this.surveyComplete();
      },
      closeopenOrderEndxDialog(){
        $(".openOrdercompleteDialog").addClass("hide");
      },
      openOrderSelect(){
        $(".orderSelectDialog").removeClass("hide");
      },
      openBeizhu(){
        $(".beizhuDiolag").removeClass("hide");
          var data = {
            'surveyNo':this.roomId,
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/query/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                this.beizhuInfo =response.data.data.noteContent;
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
      },
      closeOrderDiolag(){
        $(".orderSelectDialog").addClass("hide");
      },
      getLeftData(){
          var data = {
            "userId": this.userId
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/processing",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data){
                  this.doingActive = true;
                  this.leftData = response.data.data;
                  this.roomId = response.data.data.surveyNo;
                  this.savevehicleLicenseNo = response.data.data.reportVehicleLicenseNo;
                  this.twoButton = true;
                  this.surveyActive = true;
                  this.toOnlineActive = false;
                  this.processOnlineActive = false;
                  this.OnlineActive = false;
                  this.getPhontos()
                }
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
      },
      //双击挂起订单
      goleftLine(surveyNo,itemdata){
        this.roomId = surveyNo;
        if(!this.doingActive){
          var data = {
            "surveyNo":surveyNo
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/wait/handle",data)
            .then(response => {
              if(response.data.rescode == 200){
                this.leftData = itemdata;
                this.savevehicleLicenseNo = this.leftData.reportVehicleLicenseNo;
                this.handleSurvey = response.data.data.surveyNo;
                this.twoButton = true;
                this.surveyActive = true;
                this.toOnlineActive = false;
                this.processOnlineActive = false;
                this.OnlineActive = false;
                this.doingActive = true;
                this.roomId = surveyNo;
                this.getNodealCase();
                this.getPhontos();
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },
      //选择车辆
      selectCar(ele,vehicleLicenseNo){
        console.log(vehicleLicenseNo)
        this.savevehicleLicenseNo = vehicleLicenseNo;
        if(vehicleLicenseNo == this.saveonevehicleLicenseNo){
          this.aimActive = true;
          this.thirdOneActive = false;
          this.thirdTwoActive=false;
        }else if(vehicleLicenseNo == this.savetwovehicleLicenseNo){
          this.aimActive = false;
          this.thirdOneActive = true;
          this.thirdTwoActive=false;
        }else if(vehicleLicenseNo == this.savethreevehicleLicenseNo){
          this.aimActive = false;
          this.thirdOneActive = false;
          this.thirdTwoActive = true;
        }

      },
      //选择车辆类型
      selectType(ele,photoType){
        if(($(ele.target).parent().attr("class")).indexOf("ddClass") > -1){
          $(ele.target).parent().siblings().removeClass("showTag")
          $(ele.target).parent().siblings().children(".tag").addClass("hide");
          $(ele.target).siblings().removeClass("hide")
          $(ele.target).parent().addClass("showTag")
          this.photoType = photoType
        }
      },
      //选择缩略图车辆类型
      seletedCarType(ele,vehicleLicenseNo,photoType){
        if($(ele.target).attr("class").indexOf("hoverBox")>-1){
          $(ele.target).parent().siblings().find(".tag").addClass("hide");
          $(ele.target).parent().find(".tag").removeClass("hide");
          this.photoType = photoType;
          this.savevehicleLicenseNo = vehicleLicenseNo;
          var node = this.node;
        }
      },
      enterBox(ele){
        $(ele.target).find(".hoverBox").removeClass("hide")
      },
      leaveBox(ele){
        $(ele.target).find(".hoverBox").addClass("hide")
      },
      checkStateOne(){
        axios.get(this.ajaxUrl+"/web/surveyor/v1/webstatus/"+this.userId)
          .then(response => {
            if(response.status == 200){
              this.manualStatus = response.data.data.manualstatus;

            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })

      },
      checkState(){
        if(this.manualStatus == 2){
          var data = {
            "userId":parseInt(this.userId),
            "manualStatus":'0'
          }
          axios.post(this.ajaxUrl+"/web/surveyor/v1/manual/status",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data.code == 0){
                  this.manualStatus = response.data.data.manualStatus;
                }else{
                  this.open4("暂时无法改变状态")
                }
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }else{
          var data = {
            "userId":parseInt(this.userId),
            "manualStatus":'2'
          }
          axios.post(this.ajaxUrl+"/web/surveyor/v1/manual/status",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data.code == 0){
                  this.manualStatus = response.data.data.manualStatus;
                }else{
                  this.open4("暂时无法改变状态")
                }
              }else{
                this.open4(response.data.resdes)
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },

      openType(){
        if(this.isScreenShot){
          this.longitude = this.newlongitude;
          this.latitude = this.newlatitude;
          this.source = 'wechat';
        }
        if(this.photoType != '' && this.savevehicleLicenseNo != '' && this.roomId != '' && this.longitude != '' && this.latitude != ''&&this.originalPhotoUrl !=''){//已经选择车辆信息
          this.sureTakeImg()
        }else{
          this.photoType = '';
          if(this.originalPhotoUrl != ''){
            $(".takePhonetypeBox").removeClass("hide");
            this.selectCar("",this.savevehicleLicenseNo)
          }else{
            this.open4("图片保存失败,请重新上传")
          }

        }
      },
      deletTakeImg(){
        if(this.source != ''){
          this.watermarkPhotoUrl = ''
        }
        var data = {
          'originalPhotoUrl':this.originalPhotoUrl,
          "watermarkPhotoUrl":this.watermarkPhotoUrl,
        }
        axios.post(this.ajaxUrl+"/survey/order/v1/photo/remove",data)
          .then(response => {
            if(response.data.rescode == 200){
              $(".takePhoneImgBox").addClass("hide")
              this.open2(response.data.resdes)
            }else{
              this.open4(response.data.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      closetypebox(){
        $(".takePhonetypeBox").addClass("hide");
        this.photoType = ''
      },
      preImginfo(){
        if(this.left < '-1'){
          this.left = this.left + 184;
          $(".suibian").animate({
              left : this.left
            },500)
        }
      },
      nextImgInfo(){
        var length = -(((this.imglength-7)*184)+1)
        if(this.left > length){
          this.left = this.left - 184;
          $(".suibian").animate({left: this.left},500)
        }
      },
      closeCityDiolag(){
        $(".cityDialog").addClass("hide")
      },
      selectCity(city){
        this.getCity = city;
        $(".cityDialog").addClass("hide")
      },
      openCityDialog(){//打开城市
        $(".cityDialog").removeClass("hide")
      },
      openAddCar(){
        $(".editorCarInfo").removeClass("hide");
        this.originalVehicleLicenseNo = '';
        this.isOrderVehicle = '0';
        this.getCity = '京';
        this.opsType = "1"
      },
//      上一张
      preScaleImg(){
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;//浏览器宽度　
        var liwidth =  w*(0.40);
        console.log();
        console.log(this.scaleImgLeft)
        if(this.scaleImgLeft < '-1'){
          this.scaleImgLeft = this.scaleImgLeft + liwidth;
          this.scalImgCurrentIndex --;
          $(".scaleUlBox").animate({left: this.scaleImgLeft},500)
        }
      },
//      下一张
      nextScaleImg(){
        if(this.scalImgCurrentIndex >= this.scalImgLength) {
          return;
        }

          var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;//浏览器宽度　
        var liwidth =  w*(0.40);
//        var liwidth = $('.scaleUlBox').find("li").width();
        console.log(liwidth)
//        var length = -(((this.scalImgLength-2)*(liwidth))-1)
        console.log(this.scaleImgLeft);
        console.log(length)
        this.scalImgCurrentIndex ++;
        this.scaleImgLeft = this.scaleImgLeft - liwidth;
        $(".scaleUlBox").animate({left: this.scaleImgLeft},500)

      },
      openTakePhone(){
        $(".takePhoneImgBox").removeClass('hide');
      },
      closeScaleImg(){
        $(".scalImgBox").addClass('hide');
        this.scaleImgLeft = 0;
        this.scalImgCurrentIndex = '1';
        $(".scaleUlBox").css("left",this.scaleImgLeft)
        this.surveyPhotos = [];
        this.imgType = "";
      },
      closetakeCaleImg(){
        $(".takePhoneImgBox").addClass('hide');
          this.originalPhotoUrl = '';
          this.watermarkPhotoUrl = '';
          this.longitude = '';
          this.latitude = '';
      },
//查看放大图片
      scaleImg(surveyPhotos,ele,code,photoTypeComment){
        $(".scaleUlBox").css("left",'0')
        this.scaleImgLeft = 0;
        this.scalImgLength = surveyPhotos.length;
        this.surveyPhotos = surveyPhotos;
        console.log(surveyPhotos)
        if(surveyPhotos.length !=0 ){
          console.log(photoTypeComment)
          this.scaleImgLeft = 0;
          $(".scalImgBox").removeClass('hide');
          this.imgType = photoTypeComment;
        }
      },
      tabChange(event){
        var attributes = event.target.attributes;
        for(var i=0;i< attributes.length;i++){
          if(i == 1){
            if(attributes[i].nodeValue.indexOf('caseJiankong') > -1){
              attributes[i].nodeValue = 'caseJiankong active';
              $(".allCase").attr("class","allCase");
              this.jianKongActive = true;
              this.allCaseActive = false;
            }else  if(event.target.attributes[i].nodeValue.indexOf('allCase') > -1){
              $(".caseJiankong").attr("class","caseJiankong");
              attributes[i].nodeValue = 'allCase active';
              this.jianKongActive = false;
              this.allCaseActive = true;
            }
          }
        }
      }
    },
    components: {
       callModal,
    },
    destroyed () {
      clearInterval(this.beatTime);
      clearInterval(this.dataInfoMsg);
    },
  }

</script>

