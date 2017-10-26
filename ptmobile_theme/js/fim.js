/**
 * Flash Player Version Detection
 * Detect Client Browser type
 * Copyright 2005-2007 Adobe Systems Incorporated.  All rights reserved.
 */
function ControlVersion(){var e;var t;var n;try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");e=t.GetVariable("$version")}catch(n){}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");e="WIN 6,0,21,0";t.AllowScriptAccess="always";e=t.GetVariable("$version")}catch(n){}}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");e=t.GetVariable("$version")}catch(n){}}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");e="WIN 3,0,18,0"}catch(n){}}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");e="WIN 2,0,0,11"}catch(n){e=-1}}return e}function GetSwfVer(){var e=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var t=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var n=navigator.plugins["Shockwave Flash"+t].description;var r=n.split(" ");var i=r[2].split(".");var s=i[0];var o=i[1];var u=r[3];if(u==""){u=r[4]}if(u[0]=="d"){u=u.substring(1)}else if(u[0]=="r"){u=u.substring(1);if(u.indexOf("d")>0){u=u.substring(0,u.indexOf("d"))}}var e=s+"."+o+"."+u}}else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)e=4;else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)e=3;else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)e=2;else if(isIE&&isWin&&!isOpera){e=ControlVersion()}return e}function DetectFlashVer(e,t,n){versionStr=GetSwfVer();if(versionStr==-1){return false}else if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");tempString=tempArray[1];versionArray=tempString.split(",")}else{versionArray=versionStr.split(".")}var r=versionArray[0];var i=versionArray[1];var s=versionArray[2];if(r>parseFloat(e)){return true}else if(r==parseFloat(e)){if(i>parseFloat(t))return true;else if(i==parseFloat(t)){if(s>=parseFloat(n))return true}}return false}}function AC_AddExtension(e,t){if(e.indexOf("?")!=-1)return e.replace(/\?/,t+"?");else return e+t}function AC_Generateobj(e,t,n){var r="";if(isIE&&isWin&&!isOpera){r+="<object ";for(var i in e){r+=i+'="'+e[i]+'" '}r+=">";for(var i in t){r+='<param name="'+i+'" value="'+t[i]+'" /> '}r+="</object>"}else{r+="<embed ";for(var i in n){r+=i+'="'+n[i]+'" '}r+="> </embed>"}document.write(r)}function AC_FL_RunContent(){var e=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(e.objAttrs,e.params,e.embedAttrs)}function AC_SW_RunContent(){var e=AC_GetArgs(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(e.objAttrs,e.params,e.embedAttrs)}function AC_GetArgs(e,t,n,r,i){var s=new Object;s.embedAttrs=new Object;s.params=new Object;s.objAttrs=new Object;for(var o=0;o<e.length;o=o+2){var u=e[o].toLowerCase();switch(u){case"classid":break;case"pluginspage":s.embedAttrs[e[o]]=e[o+1];break;case"src":case"movie":e[o+1]=AC_AddExtension(e[o+1],t);s.embedAttrs["src"]=e[o+1];s.params[n]=e[o+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblclick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":s.objAttrs[e[o]]=e[o+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":s.embedAttrs[e[o]]=s.objAttrs[e[o]]=e[o+1];break;default:s.embedAttrs[e[o]]=s.params[e[o]]=e[o+1]}}s.objAttrs["classid"]=r;if(i)s.embedAttrs["type"]=i;return s}var isIE=navigator.appVersion.indexOf("MSIE")!=-1?true:false;var isWin=navigator.appVersion.toLowerCase().indexOf("win")!=-1?true:false;var isOpera=navigator.userAgent.indexOf("Opera")!=-1?true:false;

var User = User || { 'key': '', 'lang': 'en', 'authenticated': false };

/**
 * Fim variables.
 */
var fimDir = 'http://banner.wo8cai.com/services/fim/11/'
,	fimName = 'fim'
,	casinoSwf = 'http://banner.wo8cai.com/casinoclient.html'
,	casinoMode = null
,	pokerMode = null
,	casinoMiniMode = null
,	userKey = User.key
,	cashierUrl = 'cashier.html'
,	language = User.lang
,	fimMode = 'offline'
,	gameHash = window.location.hash.substr(1)
,	gameCode = gameHash.replace('code/', '');

/**
 * The only fixed-name function that the FIM calls from JavaScript.
 */
function fimReady() {
	var fim = getFim(fimName);
	gameHash = window.location.hash.substr(1);
	gameCode = gameHash.replace('code/', '');
	
	fim.setCallout('playforreal', 'launchClientLogin');
	fim.initClient("casino", casinoSwf + '?language=' + language);
	
	if (userKey != '') {
		fim.initUser(userKey); 
	}
}

/**
 * Fim callback.
 */
function openCashier() {
	window.open(cashierUrl, 'realoffline', 'width=640,height=480,toolbar=no','menubar=no,scrollbars=no,resizable=yes');
}

/**
 * Fim callback.
 */
function focusCashierWebPage() {
	window.focus();
}

/**
 * Fim callback.
 */
function getFim(swfId) {
	if (window[swfId]) {
		return window[swfId];
	}
	return document[swfId];
}

/**
 * Fim callback.
 */
function launchFimCasino(module, offline) {
	var fim = getFim(fimName)
	,	offline = typeof offline !== 'undefined' ? offline : false;
	
	if (userKey != "" && offline == false) {
		fim.launchClient("casino", module);
	} else {
		fim.launchClient("casino", module, 'offline');
	}
}

/**
 * Fim callback.
 */
function launchClientLogin(type, module) {
	getFim(fimName).close(type);
	jQuery('.' + module).click();
}

/**
 * Fim callback.
 */
function closeCasino() {
	getFim(fimName).close("casino");
}

/**
 * Helper function to convert query string to object.
 */
function queryToObject() {
    var retObj = {}
	,	pair = null
	,	sPageURL = window.location.search.substring(1)
	,	qArr = sPageURL.split('&');
 
    for (var i = 0; i < qArr.length; i++) {
        pair = qArr[i].split('=');
        retObj[pair[0]] = pair[1];
    };
 
    return retObj;
};

/**
 * Embed flash object to document.
 */
if (AC_FL_RunContent == 0) {
	alert('This page requires AC_RunActiveContent.js.');
}
else {
	AC_FL_RunContent(
		'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
		'width', '0',
		'height', '0',
		'src', fimName,
		'quality', 'high',
		'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
		'align', 'middle',
		'play', 'true',
		'loop', 'true',
		'scale', 'showall',
		'wmode', 'window',
		'devicefont', 'false',
		'id', fimName,
		'bgcolor', '#F5F5F5',
		'name', fimName,
		'menu', 'true',
		'allowFullScreen', 'false',
		'allowScriptAccess','always',
		'movie', fimDir + fimName,
		'base', fimDir,
		'salign', '',
		'class', 'fim'
	); //end AC code
}
	