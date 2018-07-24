<style scoped>
  .caseDetail{
    background: rgba(0,0,0,0.3);
    width: 100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index:100;
  }
  .caseDetailBox{
    width: 1000px;
    margin: 10vh auto;
    background: #fff;
    padding: 20px;
    max-height: 76vh;
    position: relative;
  }
  .closCaseDetail{
    font-size: 42px;
    position: absolute;
    right: 15px;
    top: 0;
    cursor: pointer;
    z-index: 10000;
  }
  .detailContent{
    overflow-y: scroll;
    max-height: 65vh;
    overflow-x: hidden;
  }
  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .caseInfo{
    font-size: 14px;
    color: #232323;
    margin-top:15px;
  }
  .caseInfo i{
    padding-right: 20px;
    display:inline-block;

  }
  .chakanno, .baoxianNo{
    min-width: 25%;
  }
  .caseInfoBox{
    padding: 5px 0;
    text-align: left;
  }
  .AimCar{
    width: 100%;
    margin: 15px 0;
  }
  .aimheader{
    height: 30px;
    color: #fff;
    background: #2EAB3B;
    font-size: 15px;
    line-height: 30px;
    padding-left:15px;
    position:relative;
  }
  .addBut{
    width:20px;
    height:20px;
    background-color: #2EAB3B;
    border-radius: 50%;
    line-height:17px;
    text-align: center;
    position:absolute;
    right:10px;
    top:5px;
    border:1px solid #FFFFFF;
    color:#FFFFFF;
    cursor: pointer;
  }
  .aimInfo{
    width: 100%;
  }
  .aimInfo .table{
    width:100%;
  }
  .aimInfo .table td{
    padding: 3px;
  }
  .aimCarImg{
    width: 100%;
    border: 1px solid #bbb;
    border-top: none;
    padding: 10px 0;
  }
  .aimCarImg ul{
    display: flex;
  }
  .aimCarImg li{
    width: 22%;
    padding:12px 0px;
    margin-left: 10px;
  }
  .aimCarImg img{
    width: 100%;
    height: 200px;
  }
  .aimCarImg span{
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(201,202,204,0.8);
    color: #232323;
    display: block;
    margin-top: -4px
  }
  .videoBox{
    text-align:center;
  }
.videoBox video{
  height: 200px;
  width: 30%;
  padding: 20px;

}
  /*ieVideo::-webkit-media-controls-enclosure {*/
    /*overflow:hidden;*/
  /*}*/
  /*ieVideo::-webkit-media-controls-panel {*/
    /*width: calc(100% + 30px);*/
  /*}*/
  .reporPerson img, .caseInfoBox img{
    padding-left: 7px;
    height: 16px;
    width: 14px;
  }
  .caseInfoBox img{
    padding-right:0;
  }
  .caseInfoBoxAdress{
    position: relative;
    display:inline-block;
    width: 22%;
  }
  .caseInfoBoxTitle{
    width: 70px;
    display: inline-block;
  }
  .caseInfoBoxInfo{
    position: absolute;
    left: 75px;
    top: 0;
  }
  .footerBox{
    text-align: center;
    margin: 40px;
    width: 100%;

  }
  .download,.cancel{
    display: inline-block;
    height:35px;
    width: 185px;
    color:#fff;
    background: #2EAB3B;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
  }
  #videoBox video{
    object-fit:fill
  }
  .beizhuInfo{
    border: 1px solid #bbb;
    min-height:100px;
    width:100%;
    padding:10px 16px;
    font-size: 14px;
    line-height: 20px;
  }
  .oneMonitor{
    position: relative;
  }
  .send-documents{
    position:absolute;
    left:90px;
    top:0px;
    padding-left:450px;
    overflow: hidden;
  }
  .sent-but{
    float:left;
    cursor:pointer;
    margin-right:30px;
    width:140px;
    height:30px;
    background-color:green;
    border:1px solid green; 
    line-height: 30px;
    text-align: center;
    color:#fff;
    border-radius: 5px;
  }
  .select-wrap{
    float:left;
    margin-top:-2px;
  }

  .claim-wrap-tong{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .szc-wrap{
     background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .czm-wrap{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
  .czm-content{
    width: 500px;
    margin: 6vh;
    margin-left:35%;
    background: #fff;
    margin-top: 20vh;
    position: relative;
  }
  .claim-content{
    width: 900px;
    margin: 6vh;
    background: #fff;
    height:500px;
    overflow: scroll;
    position: fixed;
    left:50%;
    top:50%;
    margin-top:-30vh;
    margin-left:-450px;
  }
  .top-wrap{
    overflow: hidden;
    border-bottom:1px solid #b6b6b6;
  }
  .top-wrap h4{
    float:left;
    font-size: 18px;
    line-height: 70px;
    padding-left:20px;
  }
  .xmark{
   float:right;
    font-size: 42px;
  }
  .che-one{
    padding:20px 0px 20px 80px;
  
  }
  .part-wrap{
    overflow: hidden;
  }
  .part{
    width:100px;
    height:40px;
    line-height: 40px;
    text-align:center;
    border:1px solid #b6b6b6;
    float:left;
    margin-right:30px;
    margin-bottom:20px;
  }
  .part span{
    display:none;
  }
  .input-box input{
    width:200px;
    height:30px;
    border:1px solid #b6b6b6;
    background-color:#fff; 
  }
  .plate{
     padding-bottom:20px;
  }
  .checkbox-wrap{
    padding-left:30px;
    padding-bottom:30px;
  }
  .but-czm{
     width:300px;
     margin-left:100px;
     margin-bottom:20px;
  }
  .but-claim{
    width:300px;
    margin-left:180px;
    margin-bottom:20px;
  }
  .checkoutGreen{
    color:#fff;
    background-color:green;
  }
  .checkoutWhite{
     color:#000;
    background-color:#fff;
  }
  .czxm{
    margin-left:10px;
    color:#2fab3b;
  }


   .che-one-wrap{
    height:400px;
    overflow: scroll;
    padding:20px 20px;
  }
  .underlying-wrap{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    overflow: scroll;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 201;
  }
   .claim-content-underiy{
     width: 600px;
     margin:0 auto;
     margin-left:50%;
     background: #fff;
     margin-top: 20vh;
     height:300px;
     overflow: scroll;
     position: relative;
  }
  .beizhuInfoIncidentGra{
    color:#c8c8c8;
  }
  .xe_top{
    padding-bottom:10px;
  }
  .checkbox-wrap-xe{
    padding-left:80px;
  }
  .el-radio+.el-radio{
    margin-left: 0px !important;
    margin-top:10px;
  }


  .rs-che-one{
    border:1px solid #bbb;
    border-top:none;
    margin-bottom:20px;
  }
  .addinsitituteSpan{
    display: inline-block;
    width: 118px;
    font-size: 14px;
    text-align: right;
   /* margin-right: 4px;*/
  }
  .rsContent{
    padding-bottom: 20px;
  }
  .creatInput{
    height:35px;
    line-height:35px;
    padding-left: 6px;
    border: 1px solid #bbb;
    border-radius:4px;
    width: 162px;
  }
  .clear {
    zoom:1;
  }
  .clear:after {
   clear:both;
   content:'.';
   display:block;
   width: 0;
   height: 0;
   visibility:hidden;
}
.basic-li{
  float:left;
  margin:10px 0px;
}
 .tuiBox{
    position: absolute;
    top: 40px;
    left: 44%;
    max-height:400px;
    overflow-y:scroll;
    z-index: 20;
  }
  .addinsitituteSpan-two{
    width:66px;
  }
  .creatInput-two{
    width:120px;
  }
  .checkListOne{
      width:100px;
  }
  .checkListOneTe{
      width:114px;
  }
  .checkListOne-wrap{
    padding:10px 0px 10px 30px;
  }
  .el-checkbox{
    margin-right:0px !important;
  }
  .feed_textarea{
    width:500px;
    resize: none;
    height: 70px;
    max-height: 70px;
    border:1px solid #dddddd;
    border-radius: 10px;
    padding:3px 3px;
    text-indent:2px;
    font-size: 15px;
    vertical-align:top;
  }
  .fgx{
    border:1px dashed #BBBBBB;
    margin:0px 30px;
  }
  .bz{
    padding:0px 30px;
    color:#E51C23;
    margin-bottom:10px;
  }
  .signBut{
    margin-bottom:20px;
  }
  .el-input--suffix .el-input__inner{
    margin-top: 0px !important;
    width:160px !important;
  }




  .affirmBook-top{
     padding:20px 0px 10px;
  }
  .affirmBook-content{

    border:1px solid #b6b6b6;
  }
  .affirmBook-top h2{
    text-align: center;
    margin-bottom:10px;
  }
   .affirmBook-top p{
    text-align: center;
  }
  .base-one{
    width:50%;
    float:left;
  }
  .base-two{
    width:25%;
    float:left;
  }
  .base-three{
    width:33.3%;
    float:left;
  }
  .base-list{
    border-right:1px solid #b6b6b6;
    border-bottom:1px solid #b6b6b6;
    float:left;
    height:30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
  }
  .base-list-left{
    width:32%;
  }
  .base-list-right{
    width:68%;
  }
  .base-one-last{
    border-right:none;
  }
  .left{
    float:left;
  }
  .right{
    float:right;
  }
  .base-left{
    text-align: center;
    width:10%;
    padding:71px 0px;
    border-right:1px solid #b6b6b6;
    border-bottom:1px solid #b6b6b6;
  }
  .base-left-two{
    padding:120px 0px;
  }
  .base-list-two-left{
    width:42%;
  }
   .base-list-two-right{
    width:58%;
  }
  .traumaticList{
    width:15%;
    float:left;
    text-align: center;
    line-height: 30px;
  }
  .tableList{
    width:15%;
   /* float:left;
    text-align: center;
    line-height: 30px;*/
  }
  .jtsq{
    padding:6px 30px;
    word-wrap: break-word;
    word-break: normal;
  }
  .table-wid{
    height:50px;
    line-height: 15px;
    padding-top:5px;
  }
  .border-none{
    border:none;
    /*border-top:1px solid #b6b6b6;*/
  }
</style>
<template>
  <div class="caseDetail">
    <div class="caseDetailBox">
      <span @click="closCaseDetail" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">案件详情</h4>
         <!-- <div class="send-documents">
            <span class="sent-but" @click="underlyingThreeCar">发送人伤查勘单</span>
            <span style="lineHeight:30px;">(未发送)</span>
         </div> -->
         <div class="send-documents">
            <span class="sent-but" @click="lookHurtBill">查看人伤查勘单</span>
            <span style="lineHeight:30px;">(已发送，已签字)</span>
         </div>
        <!-- 查看人伤查勘单 -->
      <div class="claim-wrap-tong claim-wrap-ckHurt hide" >
        <div class="claim-content" style="width:1000px;marginLeft:-500px;">
          <div class="top-wrap">
              <h4>人伤查勘单</h4>
              <span @click="closeHurtDiolag" class="xmark">×</span>
          </div>
          <div style="width:800px;margin:0 auto;">
             <div class="affirmBook-top">
                 <h2>
                   中华联合保险
                 </h2>
                 <p style="border-top:1px solid #232323;marginBottom:30px;"></p>
                 <p>222222</p>
             </div>
             <div class="affirmBook-content">
                <ul class="clear">
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                      被保险人：
                    </p>
                    <p class="base-list base-list-right">2222</p>
                  </li>
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                     保险编号：
                    </p>
                    <p class="base-list base-list-right base-one-last">2222</p>
                  </li>
                   <li class="clear base-one">
                    <p class="base-list base-list-left">
                      出险时间：
                    </p>
                    <p class="base-list base-list-right">2222</p>
                  </li>
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                      出险地点：
                    </p>
                    <p class="base-list base-list-right base-one-last">2222</p>
                  </li>
                   <li class="clear base-one">
                    <p class="base-list base-list-left">
                      受害人/联系人：
                    </p>
                    <p class="base-list base-list-right">2222</p>
                  </li>
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                      联系电话：
                    </p>
                    <p class="base-list base-list-right base-one-last">2222</p>
                  </li>
                   <li class="clear base-one">
                    <p class="base-list base-list-left">
                      就诊医院：
                    </p>
                    <p class="base-list base-list-right">2222</p>
                  </li>
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                     医院等级：
                    </p>
                    <p class="base-list base-list-right base-one-last">2222</p>
                  </li>
                   <li class="clear base-one">
                    <p class="base-list base-list-left">
                      负责医师：
                    </p>
                    <p class="base-list base-list-right">2222</p>
                  </li>
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                      医师电话：
                    </p>
                    <p class="base-list base-list-right base-one-last">2222</p>
                  </li>
                   <li class="clear base-one">
                    <p class="base-list base-list-left">
                      住院号：
                    </p>
                    <p class="base-list base-list-right">2222</p>
                  </li>
                  <li class="clear base-one">
                    <p class="base-list base-list-left">
                      就诊科室及床号：
                    </p>
                    <p class="base-list base-list-right base-one-last">2222</p>
                  </li>
                </ul>

                <div class="clear">
                    <div class="left base-left">
                        伤/亡者基本情况
                    </div>
                    <ul class="left clear" style="width:90%;">
                       <li class="clear base-two">
                         <p class="base-list base-list-two-left">
                           姓名：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-two">
                         <p class="base-list base-list-two-left">
                           性别：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-two">
                         <p class="base-list base-list-two-left">
                           年龄：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-two">
                         <p class="base-list base-list-two-left">
                           户口性质：
                         </p>
                         <p class="base-list base-list-two-right base-one-last">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left">
                           职务：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left">
                           收入：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left">
                           领取方式：
                         </p>
                         <p class="base-list base-list-two-right base-one-last">2222</p>
                       </li>
                        <li class="clear base-one">
                         <p class="base-list base-list-left">
                           身份证：
                         </p>
                         <p class="base-list base-list-right">2222</p>
                       </li>
                       <li class="clear base-one">
                         <p class="base-list  base-list-left">
                           工作单位：
                         </p>
                         <p class="base-list base-list-right base-one-last">2222</p>
                       </li>
                       <li class="clear base-one" style="width:70%;">
                         <p class="base-list base-list-left">
                           记住地点及年限：
                         </p>
                         <p class="base-list base-list-right">2222</p>
                       </li>
                       <li class="clear base-three" style="width:30%;">
                         <p class="base-list base-list-two-left ">
                           住房性质：
                         </p>
                         <p class="base-list base-list-two-right base-one-last">2222</p>
                       </li>
                        <li class="clear base-three">
                         <p class="base-list base-list-two-left">
                           已住院天数：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left" style="width:44%;">
                           已花费医疗费用：
                         </p>
                         <p class="base-list base-list-two-right" style="width:56%;">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left" style="width:50%;">
                           预计花费医疗总额：
                         </p>
                         <p class="base-list base-list-two-right base-one-last" style="width:50%;">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left">
                           是否已手术：
                         </p>
                         <p class="base-list base-list-two-right">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left" style="width:50%;">
                           预估可达伤残等级：
                         </p>
                         <p class="base-list base-list-two-right" style="width:50%;">2222</p>
                       </li>
                       <li class="clear base-three">
                         <p class="base-list base-list-two-left" style="width:50%;">
                           受伤时所在位置：
                         </p>
                         <p class="base-list base-list-two-right base-one-last" style="width:50%;">2222</p>
                       </li>
                    </ul>
                </div>
                
                 <div class="clear">
                    <div class="left base-left base-left-two injury-top">
                        伤情描述
                    </div>
                    <div class="left injury-content" style="width:90%;">
                       <ul class="clear" >
                          <li class="traumaticList">
                              姓名
                          </li>
                          <li class="traumaticList">
                              性别
                          </li>
                          <li class="traumaticList">
                              年龄
                          </li>
                          <li class="traumaticList">
                              户口性质
                          </li>
                          <li class="traumaticList">
                              姓名
                          </li>
                          <li class="traumaticList">
                              性别
                          </li>
                          <li class="traumaticList">
                              年龄
                          </li>
                          <li class="traumaticList">
                              户口性质
                          </li>
                            <li class="traumaticList">
                              姓名
                          </li>
                          <li class="traumaticList">
                              性别
                          </li>
                          <li class="traumaticList">
                              年龄
                          </li>
                          <li class="traumaticList">
                              户口性质
                          </li>
                          <li class="traumaticList">
                              姓名
                          </li>
                          <li class="traumaticList">
                              性别
                          </li>
                          <li class="traumaticList">
                              年龄
                          </li>
                          <li class="traumaticList">
                              户口性质
                          </li>
                            <li class="traumaticList">
                              姓名
                          </li>
                          <li class="traumaticList">
                              性别
                          </li>
                          <li class="traumaticList">
                              年龄
                          </li>
                          <li class="traumaticList">
                              户口性质
                          </li>
                          <li class="traumaticList">
                              姓名
                          </li>
                          <li class="traumaticList">
                              性别
                          </li>
                          <li class="traumaticList">
                              年龄
                          </li>
                          <li class="traumaticList">
                              户口性质
                          </li>
                       </ul>
                       <div class="jtsq">
                         <span>具体伤情描述：</span>
                         4545665445664546546545454566544566454654654545456654456645465465454
                       </div>
                    </div>
                </div>
                

                 <div class="clear">
                    <div class="left base-left base-left-two nurse-top">
                        护理人员情况
                    </div>
                    <div class="left nurse-content" style="width:90%;borderTop:1px solid #b6b6b6">
                        <ul class="clear" >
                           <li class="traumaticList base-list">
                               姓名
                           </li>
                           <li class="traumaticList base-list" style="width:19%">
                               工作单位
                           </li>
                           <li class="traumaticList base-list" style="width:18%">
                               职务
                           </li>
                           <li class="traumaticList base-list">
                               收入
                           </li>
                           <li class="traumaticList base-list" style="width:18%">
                               联系电话
                           </li>
                           <li class="traumaticList base-list base-one-last">
                               与伤者关系
                           </li>
                        </ul>
                         <ul class="clear" >
                           <li class="traumaticList base-list table-wid">
                               1
                           </li>
                           <li class="traumaticList base-list table-wid" style="width:19%">
                               2
                           </li>
                           <li class="traumaticList base-list table-wid" style="width:18%">
                               3
                           </li>
                           <li class="traumaticList base-list table-wid">
                               4
                           </li>
                           <li class="traumaticList base-list table-wid" style="width:18%">
                               18236169404
                           </li>
                           <li class="traumaticList base-list table-wid base-one-last">
                               其它有抚养/赡养关系的人
                           </li>
                        </ul>
                        
                    </div>
                </div>
                

                 <div class="clear">
                    <div class="left base-left base-left-two family-top">
                        家庭成员情况（限死亡伤残事故）
                    </div>
                    <div class="left family-content" style="width:90%;borderTop:1px solid #b6b6b6">
                        <ul class="clear" >
                           <li class="base-list tableList">
                               姓名
                           </li>
                           <li class="base-list tableList" style="width:10%;">
                               年龄
                           </li>
                           <li class="base-list tableList">
                               出生日期
                           </li>
                           <li class="base-list tableList">
                               有无劳动能力
                           </li>
                           <li class="base-list tableList">
                               有无生活来源
                           </li>
                           <li class="base-list tableList">
                               户口性质
                           </li>
                           <li class="base-list base-one-last tableList">
                               与伤者关系
                           </li>
                        </ul>
                        <ul class="clear" >
                           <li class="base-list tableList table-wid">
                               姓名
                           </li>
                           <li class="base-list tableList table-wid" style="width:10%;">
                               年龄
                           </li>
                           <li class="base-list tableList table-wid">
                               出生日期
                           </li>
                           <li class="base-list tableList table-wid">
                               有无劳动能力
                           </li>
                           <li class="base-list tableList table-wid">
                               有无生活来源
                           </li>
                           <li class="base-list tableList table-wid">
                               户口性质
                           </li>
                           <li class="base-list base-one-last table-wid tableList">
                               其它有抚养/赡养关系的人
                           </li>
                        </ul>
                        
                    </div>
                </div>
                
                 <div class="clear">
                    <div class="left base-left" style="padding:30px 0px;">
                        温馨提示：
                    </div>
                    <div class="left" style="width:90%;borderTop:1px solid #b6b6b6">
                       <p style="padding:10px;">请务必提供伤者本人银行卡信息，便于支付赔款。</p>
                       <ul class="left clear" style="width:90%;">
                         <li class="clear base-three">
                           <p class="base-list base-list-two-left border-none">
                             持卡人姓名：
                           </p>
                           <p class="base-list base-list-two-right border-none">2222</p>
                         </li>
                         <li class="clear base-three">
                           <p class="base-list base-list-two-left border-none">
                             开户行:
                           </p>
                           <p class="base-list base-list-two-right border-none">2222</p>
                         </li>
                         <li class="clear base-three">
                           <p class="base-list base-list-two-left border-none">
                             卡号：
                           </p>
                           <p class="base-list base-list-two-right base-one-last border-none">2222</p>
                         </li>
                      </ul>
                    </div>
                </div>


             </div>
          </div>
           <div class="footerBox">
            <span class="download" @click="downLoadHurt">下载</span>
          </div>
        </div>
      </div>
          <!-- 发送人伤查勘单 -->
    <div class="claim-wrap-tong claim-wrap hide">
        <div class="claim-content">
          <div class="top-wrap">
              <h4>发送人伤查勘单</h4>
              <span @click="closeClaimDiolag" class="xmark">×</span>
          </div>
          <div class="che-one-wrap">
               <!-- 基本信息 -->
              <div class="rs-che-one">
                <div class="aimheader">基本信息</div>
                <ul class="rsContent clear">
                   <li class="basic-li">
                       <span class="addinsitituteSpan">被保险人：</span>
                       <input type="text" class="creatInput" v-model="insuredName" placeholder="请输入被保险人姓名" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">报案编号：</span>
                       <input type="text" class="creatInput"  v-model="reportNumber" placeholder="请输入报案编号" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">出险时间：</span>
                       <input type="text" class="creatInput" v-model="outTime"  placeholder="请输入出险时间" >
                    <!--   <el-date-picker
                                 v-model="outTime"
                                 type="date"
                                 size="mini"
                                 format="yyyy 年 MM 月 dd 日"
                                 value-format="yyyy-MM-dd"
                                 placeholder="选择日期"
                                 >
                      </el-date-picker> -->
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan">出险地点：</span>
                       <input type="text" class="creatInput" v-model="outPlace" placeholder="请输入出险地点" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">受害人/联系人：</span>
                       <input type="text" class="creatInput" v-model="baseVictimName"  placeholder="请输入受害人/联系人姓名" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">联系电话：</span>
                       <input type="text" class="creatInput" v-model="victimPhone"  placeholder="请输入联系电话" >
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan">就诊医院：</span>
                       <input type="text" class="creatInput" v-model="clinicHospital"  placeholder="请输入就诊医院" >
                   </li>
                   <li class="basic-li">
                   <span class="addinsitituteSpan">医院等级：</span>
                      <select class="creatInput" v-model="hospitalLevelCode" >
                         <option v-for="item in hospitalLevel" :value="item.code">{{item.name}}</option>
                       </select>
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">负责医师：</span>
                       <input type="text" class="creatInput" v-model="responsibleDoctor" placeholder="请输入负责医师" >
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan">医师电话：</span>
                       <input type="text" class="creatInput" v-model="doctorPhone" placeholder="请输入医师电话" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">住院号：</span>
                       <input type="text" class="creatInput" v-model="admissionNumber"  placeholder="请输入住院号" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">就诊科室及床号：</span>
                       <input type="text" class="creatInput" v-model="bedNumber" placeholder="请输入就诊科室及床号" >
                   </li>
                </ul>
              </div>
              
               <!-- 伤/亡者基本情况 -->
              <div class="rs-che-one">
                <div class="aimheader">伤/亡者基本情况</div>
                <ul class="rsContent clear">
                   <li class="basic-li">
                       <span class="addinsitituteSpan">姓名：</span>
                       <input type="text" v-model="suffererName" class="creatInput creatInput-two" placeholder="请输入姓名" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan addinsitituteSpan-two">性别：</span>
                       <select class="creatInput creatInput-two"  v-model="genderCode" >
                          <option  value="女">女</option>
                          <option  value="男">男</option>
                       </select>
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan addinsitituteSpan-two">年龄：</span>
                       <input type="text" class="creatInput creatInput-two" v-model="suffererAge"  style="width:100px;" placeholder="请输入年龄" > 岁
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:93px;">户口性质：</span>
                       <select class="creatInput creatInput-two" v-model="registeredCode" >
                          <option  value="0">农业</option>
                          <option  value="非农业">非农业</option>
                       </select>
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">职务：</span>
                       <input type="text" class="creatInput" v-model="suffererDuty" placeholder="请输入受害人/联系人姓名" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan addinsitituteSpan-two">收入：</span>
                       <input type="text" class="creatInput" v-model="suffererIncome" placeholder="请输入联系电话" > 元
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:138px">收入领取方式：</span>
                       <select class="creatInput" v-model="incomeCode" >
                          <option  value="现金">现金</option>
                          <option  value="转账">转账</option>
                       </select>
                      
                   </li>
                   <li class="basic-li">
                   <span class="addinsitituteSpan">身份证：</span>
                      <input type="text" style='width:308px;' v-model="IDcard" class="creatInput" placeholder="请输入就诊医院" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">工作单位：</span>
                       <input type="text" v-model="suffererOrganization" style='width:290px;marginRight:4px;' class="creatInput" placeholder="请输入负责医师" >
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan">居住地点及年限：</span>
                       <input type="text"  class="creatInput" v-model="residentialLocation" style="width:290px;" placeholder="请输入医师电话" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:78px;">住房性质：</span>
                        <select class="creatInput" style="width:100px;" v-model="housingCode" >
                          <option  value="自有">自有</option>
                          <option  value="租用">租用</option>
                       </select>
                      
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:97px;">已住院天数：</span>
                       <input type="text" style='width:120px;' v-model="stayLength" class="creatInput" placeholder="请输入已住院天数" > 天
                   </li>

                   <li class="basic-li">
                       <span class="addinsitituteSpan" >已花费医疗费用：</span>
                       <input type="text" class="creatInput" v-model="hospitalizationCosts" placeholder="请输入医师电话" > 元
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:145px;">预计花费医疗总额：</span>
                       <input type="text" class="creatInput" v-model="totalAmount" placeholder="请输入住院号" > 元
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:100px;">是否已手术：</span>
                        <select class="creatInput" style="width:100px;" v-model="surgeryCode" >
                           <option  value="否">否</option>
                           <option  value="是">是</option>
                       </select>
                       
                   </li>
                    <li class="basic-li">
                       <span class="addinsitituteSpan" style="width:134px;">预估可达伤残等级：</span>
                       <input type="text" class="creatInput" placeholder="请输入医师电话" v-model="degreeDisability" > 级
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan"style="width:130px;">受伤时所在位置：</span>
                        <select class="creatInput" v-model="siteCode" >
                          <option  value="第三者车上人员">第三者车上人员</option>
                          <option  value="车上人员">车上人员</option>
                          <option  value="行人（非机动车辆人员）">行人（非机动车辆人员）</option>
                       </select>
                   </li>
                </ul>
              </div>


               <!--伤情描述 -->
              <div class="rs-che-one">
                <div class="aimheader">伤情描述</div>
                <div class="rsContent">
                    <el-checkbox-group v-model="checkList" class="checkListOne-wrap" @change="changeCheckbox">
                        <el-checkbox label="颅脑损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="容貌损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="颈部损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="颈椎损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="锁骨损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="胸骨损伤" class="checkListOne checkListOneTe"></el-checkbox>
                        <el-checkbox label="肋骨骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="脊柱骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="脊髓损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="骨盆骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="股骨头骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="上臂骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="下肢骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="手部骨折" class="checkListOne checkListOneTe"></el-checkbox>
                        <el-checkbox label="足部骨折" class="checkListOne"></el-checkbox>
                        <el-checkbox label="心脏损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="肺部损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="肝脏损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="脾脏损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="胰脏损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="肾脏损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="其它内脏损伤" class="checkListOne checkListOneTe"></el-checkbox>
                        <el-checkbox label="软组织损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="五官损伤" class="checkListOne"></el-checkbox>
                        <el-checkbox label="肌腱韧带损伤" class="checkListOne"></el-checkbox>
                    </el-checkbox-group>
                    <span style="marginLeft:30px;">具体伤情描述：</span>
                    <textarea class="feed_textarea" v-model="injuryDescribe"   placeholder="请输入伤情描述" >
                    </textarea>
                   
                </div>
              </div>
               
                <!-- 护理人员基本情况 -->
              <div class="rs-che-one">
                <div class="aimheader">
                护理人员基本情况
                <span class="addBut" @click="addNurseMessage">+</span>
                </div>
                <div v-for="(item,index) in nurseMessage">
                    <div class="fgx" v-if="index != 0"></div>
                    <ul class="rsContent clear">
                       <li class="basic-li">
                           <span class="addinsitituteSpan">护工姓名：</span>
                           <input type="text" :value="item.hsXm" @blur="nursingNameFocus($event,index)" class="creatInput" placeholder="请输入护工姓名" >
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">工作单位：</span>
                           <input type="text" :value="item.hsDw" @blur="workFocus($event,index)" class="creatInput" placeholder="请输入护工工作单位" >
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">职务：</span>
                           <input type="text" :value="item.hsZw"  @blur="dutyFocus($event,index)"  class="creatInput" placeholder="请输入护工职务" >
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">收入：</span>
                           <input type="text" :value="item.hsSr" @blur="incomeFocus($event,index)" style="width:120px;" class="creatInput" placeholder="请输入出险地点" > 元/天
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">联系电话：</span>
                           <input type="text" :value="item.hsDh" @blur="nursingPhoneFocus($event,index)" class="creatInput" placeholder="请输入出险地点" >
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">与伤者关系：</span>
                           <input type="text" :value="item.hsGx" @blur="relationshipFocus($event,index)" class="creatInput" placeholder="请输入受害人/联系人姓名" >
                       </li>
                    </ul>
                   
                </div>
              </div>

                <!-- 家庭成员情况 -->
              <div class="rs-che-one">
                <div class="aimheader">
                 家庭成员情况
                <span class="addBut" @click="addFamilyMessage">+</span>
                </div>
                <div v-for="(item,index) in familyMessage">
                    <div class="fgx" v-if="index != 0"></div>
                    <ul class="rsContent clear">
                       <li class="basic-li">
                           <span class="addinsitituteSpan">姓名：</span>
                           <input type="text" :value="item.jtXm" @blur="familyNameFocus($event,index)" class="creatInput" placeholder="请输入护工姓名" >
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan" style="width:100px;">年龄：</span>
                           <input type="text" :value="item.jtNl" @blur="familyAgeFocus($event,index)" class="creatInput" placeholder="请输入年龄" > 岁
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan" style="width:130px;">有无劳动能力：</span>
                            <select class="creatInput" style="width:100px;" :value="item.jtLd" @change="chooseLaborcapacity($event,index)">
                               <option  value="否">否</option>
                               <option  value="是">是</option>
                           </select>
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">有无收入来源：</span>
                            <select class="creatInput" style="width:100px;" :value="item.jtSr"  @change="chooseSourcerevenue($event,index)">
                               <option  value="无">无</option>
                               <option  value="有">有</option>
                           </select>
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">户口性质：</span>
                           <select class="creatInput" @change="chooseHousehold($event,index)" :value="item.jtHk">
                              <option  value="农业">农业</option>
                              <option  value="非农业">非农业</option>
                           </select>

                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan" style="width:106px;">与伤者关系：</span>
                           <select class="creatInput"  style="width:190px;" :value="item.jtGx" @change="chooseRelationship($event,index)" >
                              <option  value="配偶">配偶</option>
                              <option  value="子女">子女</option>
                              <option  value="父母">父母</option>
                              <option  value="兄弟姐妹">兄弟姐妹</option>
                              <option  value="其它有抚养/赡养关系的人">其它有抚养/赡养关系的人</option>
                           </select>
                       </li>
                       <li class="basic-li">
                           <span class="addinsitituteSpan">出生日期：</span>
                           <el-date-picker
                                 v-model="item.jtCs"
                                 type="date"
                                 size="mini"
                                 format="yyyy 年 MM 月 dd 日"
                                 value-format="yyyy-MM-dd"
                                 placeholder="选择日期"
                                 @change="(value)=>{
                                    chooseData(value,index);
                                  }"
                                 >
                            </el-date-picker>
                       </li>
                    </ul>
                   
                </div>
              </div>

               <!-- 伤者银行卡信息 -->
              <div class="rs-che-one">
                <div class="aimheader">伤者银行卡信息</div>
                <ul class="rsContent clear">
                   <li class="basic-li">
                       <span class="addinsitituteSpan">持卡人姓名：</span>
                       <input type="text" class="creatInput" v-model="cardholderName" placeholder="请输入被保险人姓名" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">开户行：</span>
                       <input type="text" class="creatInput" v-model="cardholderBank" placeholder="请输入报案编号" >
                   </li>
                   <li class="basic-li">
                       <span class="addinsitituteSpan">卡号：</span>
                       <input type="text" class="creatInput" v-model="cardNumber" placeholder="请输入出险时间" >
                   </li>
                  
                </ul>
                <p class="bz">备注：请务必提供伤者本人银行卡信息，便于支付赔款。</p>
              </div>
              <div class="signBut">
                 <el-checkbox v-model="signRadio">伤者无法签字</el-checkbox>
              </div>
              

    
              <el-button type="primary" class="but-claim" @click="claimButton">确定</el-button>
          </div>
         
        </div>
    </div>
        <!-- 标车姓名弹框 -->
    <div class="czm-wrap hide">
        <div class="czm-content">
          <div class="top-wrap">
              <h4>请完善理信息</h4>
              <span @click="closeCzmDiolag" class="xmark">×</span>
          </div>
          
          <div class="che-one">
                <el-input placeholder="请输入姓名" clearable @blur="czmInput" maxlength="12"></el-input>
          </div>
    
          <el-button type="primary" class="but-czm" @click="czmButton">确定</el-button>
        </div>
    </div>
        <!-- 三者车姓名弹框 -->
    <div class="szc-wrap hide">
        <div class="czm-content">
          <div class="top-wrap">
              <h4>请完善理信息</h4>
              <span @click="closeSzcDiolag" class="xmark">×</span>
          </div>
          
          <div class="che-one">
                <el-input placeholder="请输入手机号" @blur="szcInput"></el-input>
          </div>
    
          <el-button type="primary" class="but-czm" @click="szcButton">确定</el-button>
        </div>
    </div>

        <div class="detailContent">
          <div class="caseInfo" id="caseInfo">
              <div class="caseInfoBox">
                <span>查勘号：</span><i class="chakanno">{{caseDetailData.accidentInfo.surveyNo }}</i>
                <span>保险报案号：</span><i class="baoxianNo">{{caseDetailData.accidentInfo .insuranceReportNo}}</i>
                <span>事故时间：</span><i >{{caseDetailData.accidentInfo .accidentTime }}</i>
              </div>
              <div class="caseInfoBox">
                  <i  v-if="caseDetailData.accidentInfo.surveyStatus == '06'">案件状态：待查勘</i>
                  <i  v-if="caseDetailData.accidentInfo.surveyStatus == '07'">案件状态：查勘中</i>
                  <i v-if="caseDetailData.accidentInfo.surveyStatus == '08'">案件状态：已查勘</i>
                  <i v-if="caseDetailData.accidentInfo.surveyStatus == '11'">案件状态：已取消</i>
                <div class="caseInfoBoxAdress" >
                  <span class="caseInfoBoxTitle" >事故地点：</span>
                  <div class="caseInfoBoxInfo">
                    <i style="display:inline-block;">{{caseDetailData.accidentInfo .accidentAddr}}</i>
                    <img @mouseenter="enter" @mouseleave="leave" src="../images/adress.png"/>
                    <div id="detailMap" class="hide" style="height:250px;width:250px;"></div>
                  </div>

                </div>
                 <!-- xin -->
                
                   <span>所在医院：</span><i class="chakanno">{{caseDetailData.accidentInfo .surveyNo }}</i>
              </div>
              
          </div>

          <div class="AimCar">
            <div  class="aimheader clear"><span style="color:#fff;">备注信息</span><span style="color:#fff;padding-right:10px;cursor: pointer;" @click="saveBeizhu" class="right">保存</span></div>
            <div class="aimInfo">
              <textarea placeholder="请输入备注信息" class="beizhuInfo" v-model="beizhuInfo">
              </textarea>
            </div>
          </div>
          <div class="AimCar">
            <div class="aimheader">人伤信息</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr>
                <td>伤者姓名:</td>
                <td>{{caseDetailData.reportVehicleInfo.reporterName}}<span class="czxm" @click="czxm($event,caseDetailData.reportVehicleInfo.id)">编辑</span></td>
                <td>伤者电话: </td>
                <td>{{caseDetailData.reportVehicleInfo.reporterPhoneNo}}</td>
                <td>保险公司:</td>
                <td> {{caseDetailData.reportVehicleInfo.insuranceCompanyName}}</td>
                <td>城市： </td>
                <td>{{caseDetailData.reportVehicleInfo.insuranceCompanyCity}}</td>
                </tr>
              </table>
              <div class="aimCarImg" v-if="totalCountAim != 0">
                <ul id="scaleImg">
                  <li v-for="item in recordsImg">
                    <img :data-src="item.photoUri" :src="item.smallPhotoUri">
                    <br>
                    <span>{{item.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging">
                  <el-pagination  @current-change="handleCurrentChangeAim"
                                  :current-page="1"
                                  :page-size = "pageSizeAim"
                                  layout="prev,next"
                                  :total="totalCountAim">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="thirdCar AimCar" v-if="thirdActive" v-for="(item,index) in thirdCar">-->
          <div class="thirdCar AimCar " v-if="caseDetailData.surveyVideoRooms.length != 0">
            <div class="aimheader">人伤视频信息</div>
            <!--<div v-if="showFlash">-->
              <!--<h1>Alternative content</h1>-->
              <!--<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" /></a></p>-->
            <!--</div>-->
            <div class="aimInfo videoBox">
              <div id="videoList" class="clear" v-if="showOldActive">
                <div class="left" v-for="(item,index) in surveyVideoRooms" :id='"video"+index' style="width:280px;height:200px;margin:6px 10px;"  :swfobjId='"videourl"+index'></div>
              </div>
              <div class="videoList clear" v-else>

                <div class="left vid-wrapper" id="videoBox" v-for="(item,index) in surveyVideoRooms"   >
                  <video  controls="controls" :src="item.videoSource" type="video/mp4"  style="width:280px;height:200px;margin:6px 10px;">
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div class="AimCar reporPerson" v-if="caseDetailData.sceneSurveyorInfo != null">
            <div class="aimheader">查勘员信息</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0" >
                <tr><td>现场查勘员:</td><td @click="mapRouter()">{{caseDetailData.sceneSurveyorInfo.sceneSurveyorName}}<img src="../images/adress.png"/></td><td>现场查勘员电话:</td><td>{{caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo}}</td><td>预计到达时间:</td><td>{{caseDetailData.sceneSurveyorInfo.expectArriveTime}}</td>
                  <td>实际到达时间</td><td>{{caseDetailData.sceneSurveyorInfo.actualArriveTime}}</td></tr>
                <tr v-if="webSurveyorInfoActive"><td> 后台坐席: </td><td>{{caseDetailData.webSurveyorInfo.webSurveyorName}}</td><td>处理开始时间: </td><td>{{caseDetailData.webSurveyorInfo.startProcessTime}}</td><td>处理结束时间:</td><td>{{caseDetailData.webSurveyorInfo.endProcessTime}}</td><td></td><td></td></tr>
              </table>
              <div style="width:100%;height:300px;margin:0 auto" class="mapBox hide">
                <div style="width:100%;height:300px;margin:0 auto"  id="mapContent" > </div>
              </div>

            </div>
          </div>
          <div class="footerBox">
            <span class="download" @click="downLoadCase" v-if="caseDetailData.accidentInfo.surveyStatus == '08'">下载</span>
            <span class="cancel" @click="cancelCase" v-if="caseDetailData.accidentInfo.surveyStatus == '07' || caseDetailData.accidentInfo.surveyStatus == '06'">取消订单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from "../assets/js/bus.js"
import Viewer from 'viewerjs';
import axios from 'axios'
export default {
  data() {
      return{
        insuredName:"",//被保险人：
        reportNumber:"",//报案编号：
        outTime:"",//出险时间：
        outPlace:"",//出险地点：
        baseVictimName:"",//受害人/联系人：
        victimPhone:"",//联系电话：
        clinicHospital:"",//就诊医院：
        responsibleDoctor:"",//负责医师：
        doctorPhone:"",//医师电话：
        admissionNumber:"",//住院号：
        bedNumber:"",//就诊科室及床号：
        suffererName:"",//伤者姓名：
        genderCode:"",//伤者性别：
        suffererAge:"",//伤者年龄：
        registeredCode:"",//伤者户口性质：
        suffererDuty:"",//伤者职务：
        suffererIncome:"",//伤者收入：
        incomeCode:"",//伤者收入领取方式：
        IDcard:"",//伤者身份证：
        suffererOrganization:"",//伤者工作单位：
        residentialLocation:"",//伤者居住地点及年限：
        housingCode:"",//伤者住房性质：
        stayLength:"",//伤者已住院天数：
        hospitalizationCosts:"",//伤者已花费医疗费用：
        totalAmount:"",//伤者预计花费医疗总额：
        surgeryCode:"",//伤者是否已手术：
        degreeDisability:"",//伤者预估可达伤残等级：
        siteCode:"",//伤者受伤时所在位置：
        injuryDescribe:"",//伤情描述具体伤情描述：
        cardholderName:"",//伤者银行卡信息持卡人姓名：
        cardholderBank:"",//伤者银行卡信息开户行：
        cardNumber:"",//伤者银行卡信息卡号：
        signRadio:false,//伤者无法签字
        //dataValue:"",//出生日期
        hospitalLevelCode:0,//医院等级code
        hospitalLevel:[    //医院等级
        {name:1111,code:0},
        {name:22222,code:1},
        {name:3333,code:2},
        {name:4444,code:3}
        ],
        checkList: [],//伤情描述
        nurseMessage:[{
           hsXm:"",//姓名
           hsDw:"",//单位
           hsZw:"",//职务
           hsSr:"",//收入
           hsDh:"",//电话
           hsGx:"",//与伤者关系
        }],//护士循环数组
        familyMessage:[{
            jtXm:"",//姓名
            jtNl:"",//年龄
            jtLd:"",//劳动能力
            jtSr:"",//收入
            jtHk:"",//户口性质
            jtGx:"",//与伤者关系
            jtCs:"",//出生日期
        }],//家庭循环数组



        radio:'1',
        isbeizhuInfoIncidentGra:true,
        IncidentContent:"",//事故经过内容
        editorIncidentStatue:false,//编辑事故经过状态
        url:"",
        id:"",
        szcInputIndex:"",
        szcInputId:"",
        czmInputId:"",
        szcInputValue:"",
        czmInputValue:"",
        isTargetSign: true,
        isThirdSign: false,
        claimList:[],
        LossList:[],
        MaterialList:["被保险人身份证","银行卡"],
        signatureList:[],
        claimMoneyOne:{},
        ImgInfo: [],
        checkedCities:[""],
        checkedMaterial:["被保险人身份证","银行卡"],//小额快赔勾选默认资料
        lossConfirmation:["三者方已获得赔付，如后期产生理赔纠纷与保险公司无关"],//小额快赔勾选默认损失确认
        materialOptions:["被保险人身份证","银行卡"],//小额快赔勾选资料
        lossStatus:false,
        lossConfirmationOptions:["三者方已获得赔付，如后期产生理赔纠纷与保险公司无关","三者方未获得赔付，甲方授权贵公司将本次理赔款项划入三者方账户"],//小额快赔勾选默认损失确认
        cityOptions:["标的签字","三者签字"],
        checkedTypes:["电子查勘单"],
        selectState:true,
        selectStateOne:false,
        selectStateTwo:false,
        selectStateThree:false,
        // cityOptions:["电子查勘单","转赔授权书","快赔协议"],
        beizhuActive: false,
        showOldActive: false,
        currentPageNoAim: 1,//当前页码
        pageSizeAim: 4,//每页记录数
        totalCountAim: 0,//总条数
        recordsImg: [],//标的车图片
        caseDetailData: {},
        recordsThird: [],
        surveyNo: "",
        beizhuInfo: "",
        thirdCar: [],
        accidentVehicleInfos:[],
        siStatusText: '',
        webSurveyorInfoActive: false,
        thirdActive: false,
        longitude: "",
        latitude: "",
        ViewerAimActive: false,
        coordinates: [],
        mark: '',
        surveyId: '',
        thirdvehicleLicenseNo: "",
        surveyVideoRooms: [],
        showFlash: false,
      }
    },
  watch:{

  },
    created(){
       this.id = localStorage.getItem("caseDetailDataId")
       this.caseDetailData =  JSON.parse(localStorage.getItem("caseDetailData"));
        console.log(this.caseDetailData.reportVehicleInfo.insuranceCompanyCode)
       console.log(this.caseDetailData.reportVehicleInfo.insuranceCompanyCode == 110000003007)
       console.log(this.caseDetailData,"shuju")
       this.longitude = this.caseDetailData.accidentInfo.accidentAddrLongitude;
       this.latitude = this.caseDetailData.accidentInfo.accidentAddrLatitude;
       if(this.caseDetailData.sceneSurveyorInfo != null){
         this.coordinates = this.caseDetailData.sceneSurveyorInfo.coordinates;//经纬度轨迹数组
       }
       this.mark = this.caseDetailData.accidentInfo.appSource;
       this.surveyId = this.caseDetailData.id;
       this.surveyVideoRooms = this.caseDetailData.surveyVideoRooms;
       for(let i in this.surveyVideoRooms){
         var indexof = this.surveyVideoRooms[i].videoSource.indexOf("http:");
         console.log(indexof)
         if(indexof > -1){//新数据
           this.showOldActive = false;
         }else{//老数据
           this.showOldActive = true;
         }
      }

       if(this.caseDetailData.sceneSurveyorInfo != null){
           if(this.caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo === null){
             this.caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo = '暂无'
           }
           if(this.caseDetailData.sceneSurveyorInfo.expectArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.expectArriveTime = '暂无'
           }
           if(this.caseDetailData.sceneSurveyorInfo.expectArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.expectArriveTime = '暂无'
           }
          if(this.caseDetailData.sceneSurveyorInfo.actualArriveTime === null){
             this.caseDetailData.sceneSurveyorInfo.actualArriveTime = "暂无"
          }
       }
       if(this.caseDetailData.accidentVehicleInfos === null){
         this.thirdActive = false;
       }else{
         this.thirdActive = true;
       }
       if(this.caseDetailData.webSurveyorInfo === null){
         this.webSurveyorInfoActive = false;
       }else{
         this.webSurveyorInfoActive = true;
         if(this.caseDetailData.webSurveyorInfo.webSurveyorName === null){
           this.caseDetailData.webSurveyorInfo.webSurveyorName = "暂无"
         }
         if(this.caseDetailData.webSurveyorInfo.startProcessTime === null){
           this.caseDetailData.webSurveyorInfo.startProcessTime = '暂无'
         }
         if(this.caseDetailData.webSurveyorInfo.endProcessTime === null){
           this.caseDetailData.webSurveyorInfo.endProcessTime = '暂无'
         }
       }
       this.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
       if("reportVehicleInfo" in this.caseDetailData){
        this.getCasePhones(1,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
       }
        this.accidentVehicleInfos = this.caseDetailData.accidentVehicleInfos;
        this.getImgInfo();
       if(this.accidentVehicleInfos !== null){

         for(let i in this.accidentVehicleInfos){
           this.accidentVehicleInfos[i].thirdCarImg = [];
           this.getCasePhones(1,4,this.accidentVehicleInfos[i].vehicleLicenseNo,this.surveyNo,i)
         }
       }
      //获取备注信息
      this.getBeizhu()
      // this.getImgInfo();
    },
    mounted() {
      if(this.showOldActive){
        this.$nextTick(() => {
          this.getvedio()
        })
      };
      //获取事故经过
      this.getIncidentInfo();
    },
    props: {
//      caseOrder: string
    },
    methods: {
      //设置护理人员高度
      setNurseHeight(){
        var nurseHeight = $(".nurse-content").height();
        $(".nurse-top").css("paddingTop",nurseHeight/2+5);
        $(".nurse-top").css("paddingBottom",nurseHeight/2+5);
        var injuryHeight = $('.injury-content').height();
        $(".injury-top").css("paddingTop",injuryHeight/2+5);
        $(".injury-top").css("paddingBottom",injuryHeight/2+5);
        var familyHeight = $('.family-content').height();
        $(".family-top").css("paddingTop",familyHeight/2+5);
        $(".family-top").css("paddingBottom",familyHeight/2+5);
      },
      // xin
      chooseLevel(name,code){
          alert(code)
      },
      //伤情描述
      changeCheckbox(value){
         console.log(value);
         console.log(this.checkList,4444444)
      },
      //添加护士信息
      addNurseMessage(){
         var data = {
           hsXm:"",//姓名
           hsDw:"",//单位
           hsZw:"",//职务
           hsSr:"",//收入
           hsDh:"",//电话
           hsGx:"",//与伤者关系
         };
         this.nurseMessage.push(data);
      },
      //护工姓名
      nursingNameFocus(e,index){
        this.nurseMessage[index].hsXm = e.target.value;
         // alert(e.target.value)
         // alert(index)
      },
      //工作单位
      workFocus(e,index){
        this.nurseMessage[index].hsDw = e.target.value;
         // alert(e.target.value)
         // alert(index)
      },
      //职务
      dutyFocus(e,index){
        this.nurseMessage[index].hsZw = e.target.value;
        // alert(e.target.value)
        // alert(index)
      },
      //收入：
      incomeFocus(e,index){
         this.nurseMessage[index].hsSr = e.target.value;
        //  alert(e.target.value)
        // alert(index)
      },
      //联系电话
      nursingPhoneFocus(e,index){
        this.nurseMessage[index].hsDh = e.target.value;
        // alert(e.target.value)
        // alert(index)
      },
      //与伤者关系
      relationshipFocus(e,index){
        this.nurseMessage[index].hsGx = e.target.value;
           // alert(e.target.value)
           // alert(index)
      },
      //添加家庭成员
      addFamilyMessage(){
         var data = {
            jtXm:"",//姓名
            jtNl:"",//年龄
            jtLd:"",//劳动能力
            jtSr:"",//收入
            jtHk:"",//户口性质
            jtGx:"",//与伤者关系
            jtCs:"",//出生日期
         };
         this.familyMessage.push(data);
      },
      //姓名
      familyNameFocus(e,index){
        this.familyMessage[index].jtXm = e.target.value;
           // alert(e.target.value)
           // alert(index)
      },
      //年龄
      familyAgeFocus(e,index){
        this.familyMessage[index].jtNl = e.target.value;
           // alert(e.target.value)
           // alert(index)
      },
      //有无劳动能力：
      chooseLaborcapacity(e,index){
        this.familyMessage[index].jtLd = e.target.value;
          // alert(e.target.value);
          // alert(index)
      },
      //有无收入来源：
      chooseSourcerevenue(e,index){
        this.familyMessage[index].jtSr = e.target.value;
          // alert(e.target.value);
          // alert(index)
      },
      //户口性质：
      chooseHousehold(e,index){
        this.familyMessage[index].jtHk = e.target.value;
          // alert(e.target.value);
          // alert(index)
      },
      //与伤者关系：
      chooseRelationship(e,index){
        this.familyMessage[index].jtGx = e.target.value;
          // alert(e.target.value);
          // alert(index)
      },
      //日期选择
      chooseData(value,index){
        this.familyMessage[index].jtCs = value;   
      },


      // open4(resdes) {
      //     this.$message({
      //           showClose: true,
      //           message: resdes,
      //           type: 'error'
      //         });
      //   },
      //   open2(resdes){
      //      this.$message({
      //           showClose: true,
      //           message: resdes,
      //           type: 'success'
      //         });
      //   },
        //获取事故经过
        getIncidentInfo(){
            var orderNo = this.caseDetailData.accidentInfo.surveyNo;
            var vehicleLicenseNo = this.caseDetailData.reportVehicleInfo.vehicleLicenseNo;//标的车车牌
            axios.get(this.ajaxUrl+"/survey/order/v1/accident/desc/"+orderNo).then(response => {
               if(response.data.rescode == 200){
                 
                 if(response.data.data){
                    this.isbeizhuInfoIncidentGra = false;
                    this.IncidentContent = response.data.data;
                 }else{
                     //存在三者车
                     if(this.thirdActive){
                       var thirdVehicleLicenseNo = "";
                        for(var i = 0;i < this.accidentVehicleInfos.length;i++){
                               thirdVehicleLicenseNo += this.accidentVehicleInfos[i].vehicleLicenseNo + ",";
                        };
                         this.IncidentContent = '经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因与三者车（'+thirdVehicleLicenseNo+'）发生碰撞，经交警处理/双方协商，标的车无责、次责、同责、主责、全责、（责任划分），三者车无责、次责、同责、主责、全责、（责任划分）；双方无争议，标的车受损部位为正前部、左前部、左后部；三者车受损部位正后部、左后部、右后部；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，三者双证也已采集。';
                         // this.IncidentContent = '经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因 与三者车（'+thirdVehicleLicenseNo+'）发生碰撞，经交警处理/双方协商，标的车承担无责、次责、同责、主责、全责、（责任划分），三者车承担无责、次责、同责、主责、全责、（责任划分）；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，三者双证也已采集，事故双方无异议。';
                     }else{
                      this.IncidentContent = '经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因发生碰撞，经交警处理，标的车承担全责，标的车受损部位为正前部、左前部、左后部；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，事故无异议。';
                         // this.IncidentContent = ' 经现场查勘核实，标的车（'+vehicleLicenseNo+'）因 变道、转弯、追尾原因发生碰撞，经交警处理，标的车承担全责；现场查验事故真实性无异议，标的车双证及支付单证已现场采集，事故无异议。';
                     }
                 }
                  
                  console.log(response,"事故经过")
               }
            }, err => {
              
            })
            .catch((error) => {
            
            })
        },
        //保存事故经过
        saveIncident(e){
          if(this.IncidentContent.length == 0){
            this.open4("请填写事故经过");
            return 
          };
           var data = {
               orderNo : this.caseDetailData.accidentInfo.surveyNo,
               accidentDescription : this.IncidentContent
            };
            axios.post(this.ajaxUrl+"/survey/order/v1/accident/desc",data).then(response => {
                if(response.data.rescode == 200){
                    this.open2("保存成功！");
                    this.isbeizhuInfoIncidentGra = false;
                    this.editorIncidentStatue = false;
                }else{
                    this.open4("保存失败！");
                }
                  
           }, err => {

           })
           .catch((error) => {
                this.open4("保存失败！");
           })
      
           
        },
        //编辑事故经过
        editorIncident(e){
               this.editorIncidentStatue = true;
        },
      getData(){
          // axios.get(this.ajaxUrl+'/web-surveyor/v1/list')
          // .then(response => {
          //   if(response.data.rescode == 200){
          //     if(response.data.data.length != 0){
          //       localStorage.setItem("signSeatData",JSON.stringify(response.data.data))
              
          //     }else{
          //       this.open2("暂无数据")
          //     }
          //   }else{
          //     this.open4(response.data.resdes)
          //     if(response.data.rescode == 300){
          //       this.$router.push({path:'/'})
          //     }
          //   }
          // }, err => {
          //   console.log(err);
          // })
          // .catch((error) => {
          //   console.log(error)
          // })
      },
       //xingming
       czxm(e,id){
          this.czmInputId = id;
         $(".czm-wrap").removeClass("hide");
       },
       szcPhone(e,id,key){
          this.szcInputIndex = key;
          // alert(key)
          this.szcInputId = id;
         $(".szc-wrap").removeClass("hide");
       },
       szcInput(e){
         var phone = e.target.value;
         var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
        if(e.target.value.length == 0){
          this.szcInputValue = "";
          this.$message({
            showClose: true,
            message: '请填写手机号',
            type: 'error'
          });
        }else{
          if(!r.test(phone)){
               this.szcInputValue = "";
               this.$message({
                showClose: true,
                message: '请输入正确手机号',
                type: 'error'
              }); 
          }else{
            this.szcInputValue = e.target.value;
          }
          
        }
       },
       czmInput(e){

        if(e.target.value.length == 0){
          this.czmInputValue = "";
          this.$message({
            showClose: true,
            message: '请填写姓名',
            type: 'error'
          });
        }else{
          this.czmInputValue = e.target.value;
        }
       },
       goCaseDetail(id){
        axios.get(this.ajaxUrl+"/survey/order/history/v1/details/"+id)
          .then(response => {
            if(response.data.rescode == 200){
              // alert(333333)
              // var data = JSON.stringify(response.data.data)
              //localStorage.setItem("caseDetailData",data);
              //this.$set(caseDetailData,response.data.data) ;
              Vue.set( this.caseDetailData,response.data.data)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
       },
       szcButton(){
          // alert(this.szcInputValue)
          if(this.szcInputValue.length == 0){
              this.$message({
                showClose: true,
                message: '请填写手机号',
                type: 'error'
              });
          }else{
            var data = [{
                "surveyBaseInfoId":this.szcInputId,
                "phone": this.szcInputValue
            }]
            console.log(this.ajaxUrl,3333333333333)
            ///boot-pub-survey-manage//survey_base/v1/modify
           axios.post(this.ajaxUrl+"/survey_base/v1/modify",data).then(response => {
             if(response.status == 200){
              //this.goCaseDetail(this.id);
               $(".szc-wrap").addClass("hide");
               // alert(this.szcInputIndex)
               this.thirdCar[this.szcInputIndex].contactPhoneNo = this.szcInputValue
               // $(".orderSelectDialog").addClass("hide");
               this.open6();
               // window.location.reload();
             }
          }, err => {
            
          })
          .catch((error) => {
          
          })
             //alert("jiekou")
          }
       },
       czmButton(e){
          if(this.czmInputValue.length == 0){
              this.$message({
                showClose: true,
                message: '请填写姓名',
                type: 'error'
              });
          }else{
            var data = [{
                "surveyBaseInfoId":this.czmInputId,
                "personName": this.czmInputValue
            }]
            ///boot-pub-survey-manage//survey_base/v1/modify
           axios.post(this.ajaxUrl+"/survey_base/v1/modify",data).then(response => {
             if(response.status == 200){
               // Bus.$emit('addBar',this.id)
               // this.goCaseDetail(this.id);
               this.caseDetailData.reportVehicleInfo.reporterName = this.czmInputValue
               $(".czm-wrap").addClass("hide");
               this.open6();
             }
          }, err => {
            
          })
          .catch((error) => {
          
          })
             //alert("jiekou")
          }
       },
       typeSelection(){
            var str = "1";
            if(this.selectStateTwo){
               str = "2";
            }
            if(this.selectStateOne){
              str = "3"
            }
            return str
        },
       open6() {
        this.$message({
          showClose: true,
          message: '操作成功',
          type: 'success'
        });
      },
      openWin(url){
         var a = document.createElement("a");
         a.setAttribute("href",url);
         a.setAttribute("target","_blank");
         a.setAttribute("id","camnpr");
         document.body.appendChild(a);
         a.click();
         
      },
      //6.22
      goApplicationBook(){
        var id = this.caseDetailData.surveySingleId
        localStorage.setItem("wIdData",id);
         this.$router.push('/applicationBook')
      },
      setDetails(){

         var type = this.caseDetailData.surveySingleStatus

         if(type == null){
            this.$message({
              showClose: true,
              message: '单证还未发送',
              type: 'error'
            });
            return 
          }
          var id = this.caseDetailData.surveySingleId
            localStorage.setItem("wIdData",id);
            var url = window.location.href.substring(0,(window.location.href.indexOf("#")+2));
            console.log(url,88888888888888888);
            console.log(url+ "message");
            window.open(url+ "message")
      },
          //发送订单按钮
          underlyingThreeCar(e){
             this.getSurveyInfo();
          },
          //查看订单按钮
          lookHurtBill(){
             $(".claim-wrap-ckHurt").removeClass("hide");
             //动态设置高度
             this.setNurseHeight();
          },
          // xin
      getSurveyInfo(){
         this.insuredName = ""; //被保险人：
         this.reportNumber = ""; //报案编号：
         this.outTime = ""; //出险时间：
         this.outPlace = ""; //出险地点：
         this.baseVictimName = ""; //受害人/联系人：
         this.victimPhone = ""; //联系电话：
         this.clinicHospital = ""; //就诊医院：
         this.responsibleDoctor = ""; //负责医师：
         this.doctorPhone = ""; //医师电话：
         this.admissionNumber = ""; //住院号：
         this.bedNumber = ""; //就诊科室及床号：
         this.hospitalLevelCode = 1;//医院等级code
         this.suffererName = ""; //伤者姓名：
         this.genderCode = ""; //伤者性别：
         this.suffererAge = ""; //伤者年龄：
         this.registeredCode = ""; //伤者户口性质：
         this.suffererDuty = ""; //伤者职务：
         this.suffererIncome = ""; 
         this.incomeCode = ""; //伤者收入领取方式：
         this.IDcard = ""; //伤者身份证：
         this.suffererOrganization = ""; //伤者工作单位：
         this.residentialLocation = ""; //伤者居住地点及年限：
         this.housingCode = ""; //伤者住房性质：
         this.stayLength = ""; //伤者已住院天数：
         this.hospitalizationCosts = ""; //伤者已花费医疗费用：
         this.totalAmount = ""; //伤者预计花费医疗总额：
         this.surgeryCode = ""; //伤者是否已手术：
         this.degreeDisability = ""; //伤者预估可达伤残等级：
         this.siteCode = ""; //伤者受伤时所在位置：
         this.injuryDescribe = ""; //伤情描述具体伤情描述：
         this.cardholderName = ""; //伤者银行卡信息持卡人姓名：
         this.cardholderBank = ""; //伤者银行卡信息开户行：
         this.cardNumber = ""; //伤者银行卡信息卡号：
         this.signRadio = false; //伤者无法签字


         this.checkList = [];//伤情描述
         this.nurseMessage = [{
           hsXm:"",//姓名
           hsDw:"",//单位
           hsZw:"",//职务
           hsSr:"",//收入
           hsDh:"",//电话
           hsGx:"",//与伤者关系
          }];//护理人员基本情况
         this.familyMessage = [{
            jtXm:"",//姓名
            jtNl:"",//年龄
            jtLd:"",//劳动能力
            jtSr:"",//收入
            jtHk:"",//户口性质
            jtGx:"",//与伤者关系
            jtCs:"",//出生日期
          }];// 家庭成员情况 

        $('.claim-wrap').removeClass("hide");

      },
      //发送订单
        setElectronic(e){
          console.log(this.caseDetailData,"我是case数据");

           //确定标车和三者车勾选状态
           this.signatureData();
           if(!this.isTargetSign && !this.isThirdSign){
             this.$message.error("请进行勾选！")
             return
           }
         
         var type =  this.typeSelection();
         var data = {};
           data.type =  this.typeSelection();
           //cs
           //data.surveyNo = "9e9d5480311b4b3496b16c9664fd84e3"
           data.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
           //修改5.22
             data.isTargetSign = this.isTargetSign;
             data.isThirdSign = this.isThirdSign;
          if(this.selectStateOne){
            data.type =  this.typeSelection();
            //cs
            //data.surveyNo = "9e9d5480311b4b3496b16c9664fd84e3"
            data.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
            data.isTargetSign = this.isTargetSign;
            data.isThirdSign = this.isThirdSign;
            data.claimList = this.claimList;
          }


          //小额赔偿新增
          if(!this.selectStateThree && this.selectStateTwo && this.selectStateOne){
              data.type = '';
              data.evidenceType = this.modifierMaterialList();
              data.lossConf = this.radio;
              console.log(data,747474747747474);
              this.smallClaims(data);
              //小额赔偿接口
              return
          };
         console.log(data,747474747747474);
          axios.post(this.ajaxUrl+"/survey_single/v1/send",data)
          .then(response => {
             // console.log(response,11111111111111)
             if(response.status == 200){
               $(".underlying-wrap").addClass("hide");

               //修改5.22
                 this.checkedCities = [""];
                 this.signatureList = [""];
               //this.open6();
               this.$alert('发送完成！', '温馨提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    
                  }
              });
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
                obj.claimAmount = this.claimMoneyOne[i] ? this.claimMoneyOne[i]:"";
                claimList.push(obj)
               
             }
             console.log(claimList,"我是参数数据")
             return claimList;
        },
      //签字数据
       signatureData(){
             // alert(this.signatureList.length)
            if(this.signatureList.length == 3){
              this.isTargetSign = true;
              this.isThirdSign = true;
              
            }else{
                if(this.signatureList[1] == "标的签字"){
                   this.isTargetSign = true;
                   this.isThirdSign = false;
                   
                }
              if(this.signatureList[1] == "三者签字"){
                   this.isThirdSign = true;
                   this.isTargetSign = false;
                   
              }
              if(!this.signatureList[1]){
                  this.isThirdSign = false;
                  this.isTargetSign = false;
              }
            }
           
                
        // alert(this.isTargetSign);
        // alert(this.isThirdSign);
       },
        //处理数据
      modifyData(arr){
        for(var i = 0; i < arr .length; i++){
            arr[i] =  arr[i].substr(0,arr[i].length-1)
        }
        return arr
      },
      //小额理赔
      claimXeButton(){
        var MaterialLength = this.MaterialList.length;
        console.log(this.MaterialList)
        // var LossLength = this.LossList.length;
        if(MaterialLength == 0){
           this.$message.error("请将信息填写完成！");
           return
        };
         var arr = $(".part");
         var claimInformationOne = "";
         var noList = [];
         var num = 0;
         var str = "";
         var partsSelectedList = [];//部位选中表
         var monber = 0;
         for(var i = 0;i < arr.length;i++){
              num ++ ;
              if($(arr[i]).hasClass("checkoutGreen")){
                 str = $(arr[i]).children("span").html() + "-";
              }else{
                 str = "";
              };
              claimInformationOne += str;
                //5.22新加
                if(num%8 == 0){
                   if(claimInformationOne != ""){
                       partsSelectedList.push(1);
                       noList.push(claimInformationOne);
                       str = "";
                       claimInformationOne = "";
                   }else{
                       noList.push(claimInformationOne);
                       str = "";
                       claimInformationOne = "";
                       partsSelectedList.push(0);
                   }

                };
      
          };
          //理赔部位表
         var list =  this.modifyData(noList);
         console.log(list,"我是原始部位");
          for(var i = 0; i < partsSelectedList.length; i++){
                  if(partsSelectedList[i] == 1 && this.claimMoneyOne[i]){
                    //alert(11111111)
                      //理赔信息
                      var claimList = this.disposalData(list);
                      console.log(list,"我是部位")
                      this.claimList = claimList;
                      console.log(claimList,"5654654654")
                      // this.signatureData();
                      // console.log(claimList,11111111111)
                      $(".claim-wrap-xe").addClass("hide");
                     
                     return
                  }
            };
            this.$message.error("请将信息填写完成！");

      },
      //理赔确定按钮
      claimButton(){
         var data = {
            insuredName:this.insuredName,//被保险人：
            reportNumber:this.reportNumber,//报案编号：
            outTime:this.outTime,//出险时间：
            outPlace:this.outPlace,//出险地点：
            baseVictimName:this.baseVictimName,//受害人/联系人：
            victimPhone:this.victimPhone,//联系电话：
            clinicHospital:this.clinicHospital,//就诊医院：
            responsibleDoctor:this.responsibleDoctor,//负责医师：
            doctorPhone:this.doctorPhone,//医师电话：
            admissionNumber:this.admissionNumber,//住院号：
            bedNumber:this.bedNumber,//就诊科室及床号：
            hospitalLevelCode:this.hospitalLevelCode,//医院等级code
            suffererName:this.suffererName,//伤者姓名：
            genderCode:this.genderCode,//伤者性别：
            suffererAge:this.suffererAge,//伤者年龄：
            registeredCode:this.registeredCode,//伤者户口性质：
            suffererDuty:this.suffererDuty,//伤者职务：
            suffererIncome:this.suffererIncome,
            incomeCode:this.incomeCode,//伤者收入领取方式：
            IDcard:this.IDcard,//伤者身份证：
            suffererOrganization:this.suffererOrganization,//伤者工作单位：
            residentialLocation:this.residentialLocation,//伤者居住地点及年限：
            housingCode:this.housingCode,//伤者住房性质：
            stayLength:this.stayLength,//伤者已住院天数：
            hospitalizationCosts:this.hospitalizationCosts,//伤者已花费医疗费用：
            totalAmount:this.totalAmount,//伤者预计花费医疗总额：
            surgeryCode:this.surgeryCode,//伤者是否已手术：
            degreeDisability:this.degreeDisability,//伤者预估可达伤残等级：
            siteCode:this.siteCode,//伤者受伤时所在位置：
            injuryDescribe:this.injuryDescribe,//伤情描述具体伤情描述：
            cardholderName:this.cardholderName,//伤者银行卡信息持卡人姓名：
            cardholderBank:this.cardholderBank,//伤者银行卡信息开户行：
            cardNumber:this.cardNumber,//伤者银行卡信息卡号：
            signRadio:this.signRadio//伤者无法签字

         };
         data.checkList = this.checkList;//伤情描述
         data.nurseMessage = this.nurseMessage;//护理人员基本情况
         data.familyMessage = this.familyMessage;// 家庭成员情况
          
          this.open7(data);
      },
      open7(data) {
        this.$confirm("确认发送？", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.subEnsureRequest(data)
        }).catch(() => {
  
        });
      },
      //发送请求
      subEnsureRequest(data){
          console.log(data,33333333333)
          $(".claim-wrap").addClass("hide");
      }, 

      getImgInfo(){
            var list = [];
            // console.log(this.caseDetailData.reportVehicleInfo.id,"我是id")
            list.push({originalVehicleLicenseNo:this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,id:this.caseDetailData.reportVehicleInfo.id})
           if(this.thirdActive){
             var obj = this.accidentVehicleInfos

            for(var i in obj){
              //alert(11111)
               list.push({originalVehicleLicenseNo:obj[i].vehicleLicenseNo,id:obj[i].id})
            }
           };
           // list.push({originalVehicleLicenseNo:2222222222222,id:33333333333333})
           this.ImgInfo = list;
          console.log(list,8888)

        },
        // handleCheckedLossChange(value){
        //     this.LossList = value;
        // },
        handleCheckedMaterialChange(value){
            // console.log(this.MaterialList)
            this.MaterialList = value;
        },
        handleCheckedCitiesChange(value) {
          this.signatureList = value;
          //alert(value)
         },
        //理赔金额
        one_part(e,key){
           this.claimMoneyOne[key] = e.target.value;
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
        closeSzcDiolag(){
            $(".szc-wrap").addClass("hide");
        },
        closeCzmDiolag(){
           $(".czm-wrap").addClass("hide");
        },
        closeXeClaimDiolag(){
            $(".claim-wrap-xe").addClass("hide");

            $(".triggerXeCheckout").trigger("click");
        },
        closeHurtDiolag(){
            $(".claim-wrap-ckHurt").addClass("hide");
        },
        closeClaimDiolag(){
           $(".claim-wrap").addClass("hide");
        },
        handleCheckedChange(value) {
           alert(value)
        },
        saveBeizhu(){
          this.beizhuInfo = this.beizhuInfo.replace(/(^\s*)|(\s*$)/g, "");
          if(this.beizhuInfo == ''){
            this.open4("请输入备注")
          }else{
            var data = {
              'surveyNo':this.surveyNo,
              "noteContent":this.beizhuInfo

            }
            axios.post(this.ajaxUrl+"/survey/order/v1/save/note",data)
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
          }
        },
        savethirdCar(vehicleLicenseNumber){
          for(var i=0;i<this.thirdCar.length;i++){
            if(this.thirdCar[i].vehicleLicenseNo == vehicleLicenseNumber){
              var vehicleOwnerPhone = $(".thirdphone").eq(i).val();
            }
          }
          vehicleOwnerPhone = vehicleOwnerPhone.replace(/\s/g,"");
          var reg = new RegExp("^[0-9]*$");
          if(!reg.test(vehicleOwnerPhone)){
            this.open4("请输入正确手机号")
          }else if(vehicleOwnerPhone.length<11 && vehicleOwnerPhone.length>0) {
            this.open4("请输入正确手机号")
          }else{
            if(vehicleOwnerPhone == '') {
              for (var i = 0; i < this.thirdCar.length; i++) {
                if (this.thirdCar[i].vehicleLicenseNo == vehicleLicenseNumber) {
                  $(".thirdphone").eq(i).val('暂无');
                }
              }
            }
            var data = {
              'surveyNo':this.surveyNo,
              "vehicleLicenseNumber":vehicleLicenseNumber,
              "vehicleOwnerPhone": vehicleOwnerPhone
            }
            axios.post(this.ajaxUrl+"/survey/vehicle/v1/owner",data)
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
          }
        },
        getBeizhu(){
          $(".beizhuDiolag").removeClass("hide");
          var data = {
            'surveyNo':this.surveyNo,
          }
          axios.post(this.ajaxUrl+"/survey/order/v1/query/note",data)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data != '' || response.data.data != null){
                  this.beizhuInfo = response.data.data.noteContent;
                  this.beizhuActive = true;
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
        getvedio(){
          if(this.surveyVideoRooms.length!=0){
           this.$nextTick(() => {
              for(let i in this.surveyVideoRooms){
                var swfobj = new SWFObject('https://union.bokecc.com/flash/player.swf', "videourl"+ i, '100%', '200', '8');
                swfobj.addVariable("userid", "F08A8B432F24065A");	//	partnerID,用户id
                swfobj.addVariable("videoid", this.surveyVideoRooms[i].videoRoomId);	//	spark_videoid,视频所拥有的 api id
                swfobj.addVariable("mode", "api");	//	mode, 注意：必须填写，否则无法播放
                swfobj.addVariable("autostart", "false");	//	开始自动播放，true/false
                swfobj.addVariable("jscontrol", "true");	//	开启js控制播放器，true/false
                swfobj.addParam('allowFullscreen', 'true');
                swfobj.addParam('allowScriptAccess', 'always');
                swfobj.addParam('wmode', 'transparent');
                swfobj.write("video" + i);
              }
            })
          }

        },
        open4(resdes) {
          this.$message.error(resdes);
        },
        open2(resdes) {
          this.$message.success(resdes);
        },
        getCarNo(vehicleLicenseNo){
         this.thirdvehicleLicenseNo =  vehicleLicenseNo
        },
        handleCurrentChangethird(currentPage){
          for(let i in this.accidentVehicleInfos){
            if(this.thirdvehicleLicenseNo == this.accidentVehicleInfos[i].vehicleLicenseNo){

              this.getCasePhones(currentPage,4,this.thirdvehicleLicenseNo,this.surveyNo,i)
            }
          }
        },
        handleCurrentChangeAim(currentPage) {//跳转
          //当前页改变调用接口 currentPage   pageSizeAim
          this.currentPageNoAim = currentPage;
          this.getCasePhones(this.currentPageNoAim,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
        },
        getCasePhones(currentPageNo,pageSize,vehicleLicenseNo,surveyNo,source){
          var paramData = {
            "pageNo": currentPageNo,
            "pageSize": pageSize,
            "vehicleLicenseNo": vehicleLicenseNo,
            "surveyNo": surveyNo
          }
          axios.post(this.ajaxUrl+"/survey/order/history/v1/photo/list",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                  if(source == ""){
                    this.recordsImg = response.data.data.records;

                    this.totalCountAim = response.data.data.total;
                    this.$nextTick(() => {
                      new Viewer(document.getElementById('scaleImg'), {
                        url: 'data-src',
                        navbar:false,
                        toolbar:true,
                        loop: true
                      })
                    })
                  }else{
                    var thirdLength = this.accidentVehicleInfos.length;
                    for(let i in this.accidentVehicleInfos){
                      if(i == source){
                        this.accidentVehicleInfos[i].thirdCarImg = [];
                        for(let j in response.data.data.records){
                          this.accidentVehicleInfos[i].thirdCarImg.push(response.data.data.records[j])
                        }
                        this.accidentVehicleInfos[i].total = response.data.data.total;
                        this.accidentVehicleInfos[i].pageNum = response.data.data.pageNum;
                      }
                    }
                    this.$nextTick(() => {
                      this.thirdCar = ''
                      this.thirdCar = this.accidentVehicleInfos;
                      // this.getImgInfo();
                      for (let i in this.thirdCar) {
                        this.$nextTick(() => {
                          new Viewer(document.getElementsByClassName('suibian')[i], {
                            url: 'data-src',
                            navbar: false,
                            toolbar: true,
                            loop: true
                          })
                        })
                      }
                    })
                  }

              }else{

              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        closCaseDetail(){
          $(".caseDetail").addClass("hide");
          this.$store.commit('setPeopleHurtActive', false);
        },
        enter(){
          $("#detailMap").removeClass("hide")
          var map = new BMap.Map("detailMap");
          map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
          map.enableScrollWheelZoom(true);

          // 用经纬度设置地图中心点
            if(this.longitude != "" && this.latitude!= ""){
              map.clearOverlays();
              var new_point = new BMap.Point(this.longitude,this.latitude);
              var marker = new BMap.Marker(new_point);  // 创建标注
              map.addOverlay(marker);              // 将标注添加到地图中
              map.panTo(new_point);
            }
        },
        leave(){
          $("#detailMap").addClass("hide")
        },
        mapRouter(){
          var data = this.coordinates;
          var num = 0;
          for(let i in data){
            if(data[i].longitude === null){
              num++
            }
          }
          if(num == 0){
            $(".mapBox").toggleClass("hide");
            if($('.mapBox').attr('class').indexOf('none') < 0){
              var map = new BMap.Map("mapContent");
              var length = data.length;
              map.enableScrollWheelZoom(true);
              var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
              for(var i =0;i<length;i++){
                driving.search(new BMap.Point(data[0].longitude,data[0].latitude),new BMap.Point(data[length-1].longitude,data[length-1].latitude));
              }
              driving.setSearchCompleteCallback(function() {
                //得到路线上的所有point
                data = driving.getResults().getPlan(0).getRoute(0).getPath();
                //画面移动到起点和终点的中间
                var centerPoint;
                centerPoint = new BMap.Point((data[0].longitude + data[data.length - 1].longitude) / 2, (data[0].latitude + data[data.length - 1].latitude) / 2);
                map.panTo(centerPoint);
                //连接所有点
                map.addOverlay(new BMap.Polyline(data, {strokeColor: "#f00", strokeWeight: 5, strokeOpacity: 1}));
              })
            }
          }else{
            this.open4("暂无查勘员信息")
          }
        },
        downLoadCase(){
          var  surveyId = parseInt(this.surveyId)
          window.open(this.ajaxUrl+"/survey/order/history/v1/details/download/"+surveyId)
        },
        //人伤下载
        downLoadHurt(){
          var  surveyId = parseInt(this.surveyId)
          window.open(this.ajaxUrl+"/survey/order/history/v1/details/download/"+surveyId)
        },
        cancelCase(){
          var paramData = {
            "action": "cancel",
            "surveyno": this.surveyNo,
            "mark": this.mark
          }
          axios.post(this.ajaxUrl+"/pub/survey/v1/action",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.open2(response.data.resdes);
                this.$store.commit('setPeopleHurtActive', false);//关闭详情组件组件
                this.$store.commit('getcaseListActive', true)//调用列表接口
              }else{
                if(response.data.rescode == "300"){
                  this.$router.push({path:"/"})
                }
                this.open4(response.data.resdes);
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
        },
      components: {
      },
    }
</script>
