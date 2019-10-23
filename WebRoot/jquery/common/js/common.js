// 写一个函数，处理innerText和textContent的兼容性问题

// 获取元素之间的内容
function getInnerText(element) {
  // 判断element是否支持innerText
  if (typeof element.innerText === 'string') {
    return element.innerText;
  } else {
    return element.textContent;
  }
}
// 设置元素之间的内容
function setInnerText(element, content) {
  // 判断element是否支持innerText
  if (typeof element.innerText === 'string') {
    element.innerText = content;
  } else {
    element.textContent = content;
  }
}

// 获取min-max之间的随机整数
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// 根据id获取元素
function my$(id) {
  return document.getElementById(id);
} 

function myTag$(tagname) {
  return document.getElementsByTagName(tagname);
} 


// 处理firstElementChild的兼容性问题
function getFirstElementChild(parent) {
  // 如果当前浏览器 支持firstElementChild
  if (parent.firstElementChild) {
    return parent.firstElementChild;
  }

  var node, nodes = parent.childNodes, i = 0;
  while (node = nodes[i++]) {
      if (node.nodeType === 1) {
          return node;
      }
  }
  return null;
}


// 注册事件 ，处理兼容性问题
function addEventListener(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, callback);
  } else {
    element['on' + eventName] = callback;
  }
}

// 移除事件， 处理兼容性问题
function removeEventListener(element, eventName, callback) {
  if (element.removeEventListener) {
    element.removeEventListener(eventName, callback, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + eventName, callback);
  } else {
    element['on' + eventName] = null;
  }
}

// 获取页面滚动出去的距离。处理兼容性
function getScroll() {
  return {
    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
    scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
  }
}

 // 获取鼠标在页面上的坐标  解决ie8的问题
 function getPage(e) {
  return {
    pageX: e.clientX + getScroll().scrollLeft,
    pageY: e.clientY + getScroll().scrollTop
  }
}


function browserType() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器 
	var isIE = userAgent.indexOf("compatible") > -1
			&& userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1
			&& !isIE; //判断是否IE的Edge浏览器 
	var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
	var isSafari = userAgent.indexOf("Safari") > -1
			&& userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器 
	var isChrome = userAgent.indexOf("Chrome") > -1
			&& userAgent.indexOf("Safari") > -1; //判断Chrome浏览器 

	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 7) {
			return "IE7";
		} else if (fIEVersion == 8) {
			return "IE8";
		} else if (fIEVersion == 9) {
			return "IE9";
		} else if (fIEVersion == 10) {
			return "IE10";
		} else if (fIEVersion == 11) {
			return "IE11";
		} else {
			return "0"
		}//IE版本过低 
	}//isIE end 

	if (isFF) {
		return "FF";
	}
	if (isOpera) {
		return "Opera";
	}
	if (isSafari) {
		return "Safari";
	}
	if (isChrome) {
		return "Chrome";
	}
	if (isEdge) {
		return "Edge";
	}
}

//判断是否是IE浏览器 
function isIE() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
      var isOpera = userAgent.indexOf("Opera") > -1;
	var isIE = userAgent.indexOf("compatible") > -1
			&& userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	if (isIE) {
		return true;
	} else {
		return false;
	}
}

//判断是否是IE浏览器，包括Edge浏览器 
function getIEVersion() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
     var isOpera = userAgent.indexOf("Opera") > -1;
	var isIE = userAgent.indexOf("compatible") > -1
			&& userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器 
	var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1
			&& !isIE; //判断是否IE的Edge浏览器 
	if (isIE) {
		var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
		reIE.test(userAgent);
		var fIEVersion = parseFloat(RegExp["$1"]);
		if (fIEVersion == 7) {
			return "IE7";
		} else if (fIEVersion == 8) {
			return "IE8";
		} else if (fIEVersion == 9) {
			return "IE9";
		} else if (fIEVersion == 10) {
			return "IE10";
		} else if (fIEVersion == 11) {
			return "IE11";
		} else {
			return "0"
		}//IE版本过低 
	} else if (isEdge) {
		return "Edge";
	} else {
		return "-1";//非IE 
	}
}
