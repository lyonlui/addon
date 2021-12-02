// ==UserScript==
// @name         东南大学讲座预约插件
// @namespace    https://github.com/lyonlui
// @version      1.00
// @description  东南大学讲座自动预约插件
// @author       Robbie
// @match        http://*/*
// @icon         data:image/jpg;base64,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
// @updateURL    https://raw.githubusercontent.com/lyonlui/addon/main/addon.js
// @require      https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js
// @grant        GM_xmlhttpRequest
// @connect      aiapi.jd.com
// @run-at document-end
// ==/UserScript==


var appkey = "0266dfce27679f88a48cfcabb7176de3";
var SecretKey = "b195a629ea28723ea130164e92f950d2";
var myInterval;                                 //预约间隔执行器
var countInterval;                              //倒计时 间隔执行器
var localStorage = window.localStorage;         //本地存储

var jzyyUrl = "http://ehall.seu.edu.cn/gsapp/sys/jzxxtjapp/hdyy/yySave.do";         //讲座预约url
var jzxx = "http://ehall.seu.edu.cn/gsapp/sys/jzxxtjapp/modules/hdyy/hdxxxs.do";    //获取所有讲座信息url
var vrCode = "http://ehall.seu.edu.cn/gsapp/sys/jzxxtjapp/hdyy/vcode.do?_=";


/*
Reserve 函数：
预约讲座的函数，设置为每0.8s执行一次
参数说明：
    * WID 需要预约的讲座id
    * */
function Reserve(WID,vcode) {

    clearInterval(countInterval);           //开始预约请求，停止倒计时 间隔执行器
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log(xmlhttp.responseText);

            var responseJson = JSON.parse(xmlhttp.responseText);

            if(responseJson.success){                                   //预约成功
                console.log(responseJson.msg);
                //clearInterval(myInterval);
                if(!alert("预约成功")){
                    window.location.reload();
                }

            }

            if(responseJson.msg.indexOf("当前活动预约人数已满") != -1){     //预约失败,人数已满
                console.log(responseJson.msg);
                //clearInterval(myInterval);
                if(!alert(responseJson.msg)){
                    window.location.reload();
                }
                return;
            }

            if(responseJson.msg.indexOf("已经预约过该活动") != -1){        //已经预约过该活动
                console.log(responseJson.msg);
                return;
                //clearInterval(myInterval);
            }
            if(responseJson.msg.indexOf("验证码错误") != -1){        //已经预约过该活动
                getVerificationCode(WID);
                return;
            }
            if(responseJson.msg.indexOf("过多") != -1){       //人太多，重试
                getVerificationCode(WID);
                return;
            }
           if(responseJson.msg.indexOf("尚未开放预约") != -1){       //尚未开放预约
                getVerificationCode(WID);
                return;
            }
        }

    }

    //组装预约请求信息
    var jsonObj = {"HD_WID":WID,"vcode":vcode};
    var jsonObjStr = JSON.stringify(jsonObj);

    //设置请求头
    xmlhttp.open("POST",jzyyUrl,true);
    xmlhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlhttp.send("paramJson="+encodeURIComponent(jsonObjStr));

}

function getVerificationCode(WID){
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log(xmlhttp.responseText);

            var responseJson = JSON.parse(xmlhttp.responseText);
            if(responseJson.datas.indexOf("image/jpeg")!=-1){

               getDecodeVrCode(responseJson.datas.split(",")[1], WID)
            }

        }

    }

    var currentDate = new Date();
    var currentUnixTime = currentDate.getTime();
    var url = vrCode+currentUnixTime;
    //设置请求头
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlhttp.send("");

}


var jdApiUrl = "https://aiapi.jd.com/jianjiao/yzm?pri_id=ne&number=4&appkey="+appkey+"&timestamp="

function getDecodeVrCode(datas, WID){
    var currentDate = new Date();
    var timestamp=currentDate.getTime();;
    var sign=md5(SecretKey+timestamp);

    var postUrl = jdApiUrl+timestamp+"&sign="+sign;
    
    GM_xmlhttpRequest({
        method: "POST",
        url: postUrl,
        data: datas,
        headers: {
            "Accept": "application/json, text/javascript, */*; q=0.01"
        },
        onload: function(response) {

            if (response.readyState==4 && response.status==200){
                console.log(response.responseText);

                var responseJson = JSON.parse(response.responseText);

                console.log(responseJson.result.msg);

                if(responseJson.result.msg.indexOf("查询成功") != -1){
                    Reserve(WID,responseJson.result.v_code)
                }else if(responseJson.result.msg.indexOf("验证错误") != -1){
                    getVerificationCode(WID);
                }

            }
        }
      });
}



/*
timeOut 函数：
讲座预约时间截止，开始预约间隔执行器
参数说明：
    * WID 需要预约的讲座id
    * */
function timeOut(WID){

    console.log("开始抢讲座");
    //myInterval = setInterval(getVerificationCode,1000);
    getVerificationCode(WID);
    //设置弹窗显示信息
    document.getElementById("timeDiv").style.display = "none";
    var mindSpan = document.getElementById("mindSpan");
    mindSpan.textContent = '抢讲座中... 请勿刷新和关闭窗口';

}


/*
countTime 函数：
倒计时显示函数
参数说明：
    * str 需预约讲座开始预约时间
    * */
function countTime(str) {

    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间

    var endDate = new Date(str);
    var end = endDate.getTime();

    //时间差
    var leftTime = end-now;
    //定义变量 d,h,m,s保存倒计时的时间
    var d,h,m,s;
    if (leftTime>=0) {
        d = Math.floor(leftTime/1000/60/60/24);
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);
    }else{
        console.log("当前时间比预约晚，结束倒计时");
        return;
    }

    //将0-9的数字前面加上0，例1变为01
    d = checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    function checkTime(i){
        if (i<10) {
            i = "0"+i;
        }
        return i;
    }

    //将倒计时赋值到div中
    console.log( d+"天");
    document.getElementById("_d").textContent = d+"天";
    document.getElementById("_h").textContent = h+"时";
    document.getElementById("_m").textContent = m+"分";
    document.getElementById("_s").textContent = s+"秒";

    //递归每秒调用countTime方法，显示动态时间效果
    countInterval = setTimeout(countTime,1000,str);

}


/*
displayAppointment 函数：
    显示弹窗
    * */
function displayAppointment(){

    var list = localStorage.getItem("appointment");         //本地存储获取可预约讲座信息

    console.log("list =" + list);

    if(list == null){

        console.log("当前无可预约讲座");
        pupopTip('200px','120px','当前无可预约讲座！<br>',null);
    }else{

        var listJsonObj = JSON.parse(list);
        console.log('显示可预约的讲座');
        pupopTip('1000px','480px','请勿过早预约，提前10分钟即可！<br>请仔细确认讲座的地点! 避免无法参加',listJsonObj);
    }


}


/*参数说明：
    * pupW 弹出层宽度 单位可以是px rem, 百分百
    * pupH 弹出层高度
    * pupText 弹出层提示语 可以加html标签
    * btnText 按钮文字 （可缺省，不加按钮）
    * listJsonObj 可预约讲座信息
    * */
function pupopTip(pupW,pupH,pupText,listJsonObj) {

    var popup = document.createElement("div");
    popup.className = 'pupopBox';
    popup.style = 'display:none;position: fixed;top:0;left: 0;width: 100%;height: 100%;background-color:rgba(0,0,0,0.6);z-index:99999; ';
    popup.innerHTML = '<div  class="pupopContent" style="position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);display:flex;flex-direction:column;justify-content:center;align-items:center;width:'+pupW+';height: '+pupH+';background-color: #fff;border-radius: 10px;padding: 20px">' +
        '<div class="pupClose" id="close_btn" style="width: 18px;height: 18px;background: url(http://ehall.seu.edu.cn/gsapp/sys/gglglyy/public/js/qs/close.png);position: absolute;right: -6px;top: -6px;border-radius: 11px;background-color: #f6f7f8;cursor: pointer;"></div>' +
        '<div class="pupText" id="pup_text" style="font-size: 14px;">'+pupText+' </div>' +
        '</div>';

    document.body.append(popup);

    var pup_btn = null;
    if(listJsonObj != null){
        $('.pupopContent').append($('<a style="display:; background-color:rgba(0,0,0,0.9);border-radius: 5px;margin-top:10px;padding:5px 20px;color: #fff; text-decoration: none;font-size: 14px; " id="pup_btn" href="javascript:;">去瞧瞧</a>'));
        pup_btn = document.getElementById("pup_btn");

    }

    $('.pupopBox').fadeIn();

    var close_btn = document.getElementById("close_btn");
    close_btn.onclick=function(){
        console.log('关闭弹窗');

        if(countInterval != null){
            console.log("取消预约,关闭倒计时");
            clearInterval(countInterval);
        }
        $('.pupopBox').fadeOut(500,function () {$(this).remove()})
    };

    if(pup_btn != null){
        pup_btn.onclick=function(){

            console.log('显示可预约的讲座');

            var form = document.createElement("form");
            form.setAttribute("id","appointmentForm");

            document.getElementById("pup_btn").style.display = "none";
            document.getElementById("pup_text").style.display = "none";

            var br = document.createElement("br");

            var tips = document.createElement("span");
            tips.setAttribute("style","font-size: 14px; color: #E6564A!important;");
            tips.setAttribute("id","tips");
            tips.textContent = "当前插件只能预约一个，不要多选！";

            $('.pupopContent').append(tips);
            $('.pupopContent').append(br.cloneNode());

            for (var i=0;i<listJsonObj.totalSize;i++)
            {
                var YYKSSJ = new Date(listJsonObj.datas[i].YYKSSJ.replace(/-/g, '/'));//预约开始时间
                var yykssjUnixTime = YYKSSJ.getTime();
                var ZJR = listJsonObj.datas[i].ZJR; //主讲人
                var JZDD = listJsonObj.datas[i].JZDD;//讲座地点
                var JZMC = listJsonObj.datas[i].JZMC;//讲座名称
                var HDZRS = listJsonObj.datas[i].HDZRS//讲座总人数
                var YYRS = listJsonObj.datas[i].YYRS;//预约人数
                var WID = listJsonObj.datas[i].WID;//讲座预约id
                var JZSJ = listJsonObj.datas[i].JZSJ//讲座时间

                console.log("预约开始时间 = " + listJsonObj.datas[i].YYKSSJ);//需要显示
                console.log("预约开始时间 unixtime= " + yykssjUnixTime);
                console.log("主讲人 = " + ZJR);//需要显示
                console.log("讲座地点 = " + JZDD);//需要显示
                console.log("讲座名称 = " + JZMC);//需要显示
                console.log("讲座总人数 = " + HDZRS);
                console.log("预约人数 = " + YYRS);
                console.log("讲座预约id = " + WID);
                console.log("讲座时间 = " + JZSJ);//需要显示

                var FN = document.createElement("input");
                FN.setAttribute("type", "checkbox");
                FN.setAttribute("value", WID);
                FN.setAttribute("name", "needAppointment");
                form.appendChild(FN);

                var span = document.createElement("span");
                span.setAttribute("style","font-size: 14px;");
                span.textContent = "讲座地点: " + JZDD + "; " + "讲座名称: " + JZMC + "; " + "预约开始时间: " + listJsonObj.datas[i].YYKSSJ + "; " + "讲座时间: " + JZSJ;
                form.appendChild(span);

                form.appendChild(br.cloneNode());
            }


            $('.pupopContent').append(form);
            $('.pupopContent').append($('<a style="display:; background-color:rgba(0,0,0,0.9);border-radius: 5px;margin-top:10px;padding:5px 20px;color: #fff; text-decoration: none;font-size: 14px; " id="auto_btn" href="javascript:;">自动预约</a>'));

            var auto_btn = document.getElementById("auto_btn");
            auto_btn.onclick= function(){
                autoAppointment(listJsonObj);
            };

        };
    }


}


/*
函数autoAppointment：
    * 自动预约
参数说明：
    * listJsonObj 可预约讲座信息
    * */
function autoAppointment(listJsonObj){

    console.log("点击了预约按钮");
    var needAppointment = document.getElementsByName("needAppointment");
    var check_val = [];
    for (var k in needAppointment) {
        //判断复选框是否被选中
        if (needAppointment[k].checked)
            //获取被选中的复选框的值
            check_val.push(needAppointment[k].value);
    }

    if(check_val.length == 0){
        alert("请勾选要预约的讲座");
        return;
    }

    document.getElementById("appointmentForm").style.display = "none";
    document.getElementById("auto_btn").style.display = "none";
    document.getElementById("tips").style.display = "none";

    for (var i=0;i<listJsonObj.totalSize;i++)
    {
        var WID = listJsonObj.datas[i].WID;//讲座预约id
        if(!check_val.includes(WID))
            continue;
        var YYKSSJ = new Date(listJsonObj.datas[i].YYKSSJ.replace(/-/g, '/'));//预约开始时间
        var yykssjUnixTime = YYKSSJ.getTime();
        var JZDD = listJsonObj.datas[i].JZDD;//讲座地点
        var JZMC = listJsonObj.datas[i].JZMC;//讲座名称

        var currentDate = new Date();
        var currentUnixTime = currentDate.getTime();

        var yes = confirm("你要预约《"+JZMC+"》"+"\n\r" + "地点在: "+ JZDD);

        if(yes){
            console.log("开始自动预约");
            console.log('需要预约的 ' + WID);
            setTimeout(timeOut,yykssjUnixTime-currentUnixTime, WID);      //设置预约开始时间提前10s开始抢讲座
            //setTimeout(timeOut,3000, WID);

            var mindDiv = document.createElement("div");
            mindDiv.setAttribute("id","mindDiv");

            var mindSpan = document.createElement("span");
            mindSpan.setAttribute("id","mindSpan");
            mindSpan.setAttribute("style","font-size: 14px; color: #E6564A!important;");
            mindSpan.textContent = "你要预约的《"+JZMC+"》"+'倒计时中... 请勿刷新和关闭窗口';

            mindDiv.appendChild(mindSpan);

            var timeDiv = document.createElement("div");
            timeDiv.setAttribute("id","timeDiv");

            var _d = document.createElement("span");
            _d.setAttribute("id","_d");
            _d.textContent = '00';

            var _h = document.createElement("span");
            _h.setAttribute("id","_h");
            _h.textContent = '00';

            var _m = document.createElement("span");
            _m.setAttribute("id","_m");
            _m.textContent = '00';

            var _s = document.createElement("span");
            _s.setAttribute("id","_s");
            _s.textContent = '00';

            timeDiv.appendChild(_d);
            timeDiv.appendChild(_h);
            timeDiv.appendChild(_m);
            timeDiv.appendChild(_s);

            $('.pupopContent').append(mindDiv);
            $('.pupopContent').append(timeDiv);


            countTime(listJsonObj.datas[i].YYKSSJ);         //开始执行倒计时 间隔期

            $('.pupopContent').append($('<a style="display:; background-color:rgba(0,0,0,0.9);border-radius: 5px;margin-top:10px;padding:5px 20px;color: #fff; text-decoration: none;font-size: 14px; " id="auto_disable" href="javascript:;">取消预约</a>'));
            var auto_disable = document.getElementById("auto_disable");

            auto_disable.onclick= function(){
                console.log("取消预约");

                clearInterval(countInterval);
                $('.pupopBox').fadeOut(500,function () {$(this).remove()})
            };

        }else{
            console.log("不预约了");
        }

    }
}

//油猴主函数
(function() {
    'use strict';
    // 代码从这开始执行...

    var domain = document.domain;


    if(domain != "ehall.seu.edu.cn"){
        console.log("不是东南综合大厅域名");
        return;
    }

    var url = self.location.href;
    if(url.indexOf("gsapp/sys/jzxxtjapp") == -1){
        console.log("不是预约界面");
        return;
    }

    console.log(url);

    localStorage.removeItem("appointment"); //清理本地存储记录

    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function()//获取所有讲座信息
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

            var responseJson = JSON.parse(xmlhttp.responseText);
            console.log(responseJson.datas.hdxxxs.totalSize);

            var totalSize = 0;
            var listJsonObj;
            var datas = new Array();

            for (var i=0;i<responseJson.datas.hdxxxs.totalSize;i++)
            {
                console.log(responseJson.datas.hdxxxs.rows[i]);
                var currentDate = new Date();
                var currentUnixTime = currentDate.getTime();
                var yyjssj = new Date(responseJson.datas.hdxxxs.rows[i].YYJSSJ.replace(/-/g, '/'));
                var yyjssjUnixTime = yyjssj.getTime();

                if(responseJson.datas.hdxxxs.rows[i].YYRS == responseJson.datas.hdxxxs.rows[i].HDZRS){//排除预约人数已满
                    console.log("预约人数已满");
                    continue;
                }

                if((yyjssjUnixTime-currentUnixTime)<0){//排除已过预约时间
                    console.log("预约时间已过");
                    continue;
                }

                if(responseJson.datas.hdxxxs.rows[i].YY_WID != null){//排除已经预约过的
                    console.log("已经预约");
                    continue;
                }

                var list = localStorage.getItem("appointment");

                //存储有效讲座信息
                if(list == null){
                    datas.push(responseJson.datas.hdxxxs.rows[i]);
                    totalSize = 1;
                    list = {
                        totalSize:totalSize,
                        datas:datas,
                    };
                    listJsonObj = JSON.stringify(list);
                    localStorage.setItem("appointment",listJsonObj);
                }else{
                    listJsonObj = JSON.parse(list);
                    datas = listJsonObj.datas;
                    totalSize = listJsonObj.totalSize;
                    datas.push(responseJson.datas.hdxxxs.rows[i]);
                    totalSize +=1;
                    datas = listJsonObj.datas;
                    list = {
                        totalSize:totalSize,
                        datas:datas,
                    };
                    listJsonObj = JSON.stringify(list);
                    localStorage.setItem("appointment",listJsonObj);
                }

            }

            displayAppointment();//显示弹窗


        }
    }
    xmlhttp.open("POST",jzxx,true);
    xmlhttp.send("pageNumber=1&pageSize=24");

})();
