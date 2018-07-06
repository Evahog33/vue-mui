import Vue from 'vue'
// 在build 时  清除 alert
if (process.env.NODE_ENV !== 'development'){
	window.alert = function(){}
}
export default {
    install (Vue, options) {
        Vue.mixin({
            methods:{

            }
        })
        Vue.prototype.$ = {
            identity:'admin', // 用户身份
			fmtDate:fmtDate,
			// 判断环境
			isAndroid: isAndroid(),
			isIos: isIos(),
			isApp:isAndroid()||isIos(),
			isWechat: isWechat(),
			compileStr:compileStr, // 加密
			uncompileStr:uncompileStr, // 解密
			toast:toast, // toast
			// muiGoback:muiCommon.back
        }
    }
}


/**
 * 格式化时间
 * hoog
 * @param {*} inputTime 时间戳
 */
function fmtDate ( inputTime ){
	var date = new Date(inputTime);  
	var y = date.getFullYear();    
	var m = date.getMonth() + 1;    
	m = m < 10 ? ('0' + m) : m;    
	var d = date.getDate();    
	d = d < 10 ? ('0' + d) : d;    
	var h = date.getHours();  
	h = h < 10 ? ('0' + h) : h;  
	var minute = date.getMinutes();  
	var second = date.getSeconds();  
	minute = minute < 10 ? ('0' + minute) : minute;    
	second = second < 10 ? ('0' + second) : second;   
	return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second; 
}

/**
 * 对字符串进行加密
 * hoog
 * @param {*} code 要加密的字符串
 */
function compileStr(code){ //对字符串进行加密         
	var c=String.fromCharCode(code.charCodeAt(0)+code.length);  
   for(var i=1;i<code.length;i++)  {        
		c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));  
   }     
   return escape(c);   
}

/**
 * 对加密的字符串进行解密
 * 需配合 comileStr 使用
 * hoog
 * @param {*} code 要解密的字符串
 */
function uncompileStr(code){        
	code=unescape(code);        
	var c=String.fromCharCode(code.charCodeAt(0)-code.length);        
	for(var i=1;i<code.length;i++)  {        
		c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));        
	}        
	return c;   
}  

//判断是否是ios环境
function isIos() {
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		return true
	} else {
		return false
	}
}
//判断是否是微信环境
function isWechat() {
	if (/micromessenger/i.test(navigator.userAgent)) {
		return true
	} else {
		return false
	}
}
//判断是否是安卓环境
function isAndroid() {
	if (/Android/i.test(navigator.userAgent)) {
		return true
	} else {
		return false
	}
}

//toast
let show = false

function toast(msg) {
  if (show == true) {
    return
  }
  show == true
  var el = document.createElement('div')
  var toast = document.body.appendChild(el)
  toast.innerHTML = msg
  toast.style.position = "fixed"
  toast.style.color = "#fff"
  toast.style.lineHeight = "1em"
  toast.style.display = "flex"
  toast.style.top = "50%"
  toast.style.left = "50%"
  toast.style.transform = "translate(-50% , -50%)"
  toast.style['background-color'] = "rgba(0, 0, 0, 0.4)"
  toast.style['border-radius'] = "4px"
  toast.style.padding = "1em"
  toast.style.zIndex = '30000000'
  setTimeout(function () {
    toast.style.display = "none"
    show = false
    document.body.removeChild(toast)
  }, 2000)
}
