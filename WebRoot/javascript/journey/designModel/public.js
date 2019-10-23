 Function.prototype.method=function(n,f){
			this.prototype[n]=f;
			return this;
 };
 
 function $(id){
 	return document.getElementById(id);
 }
 //接口类声明
    var Interface=function(name,methods){
        if(arguments.length!=2)
            throw new Error("接口类的构造函数应该传入2个参数,但是你传入了"+arguments.length+"个参数");
        this.name=name;
        this.methods=[];
        for(var i=0,len=methods.length;i<len;i++){
            if(typeof methods[i] !=='string')
            throw new Error("接口类的构造函数方法参数应该传入string数组");
            this.methods.push(methods[i]);
        }
    };
    
    Interface.ensureImplements=function(object){
        if(arguments.length<2)
        throw new Error("接口的ensureImplements函数应该至少传入2个参数,但是你传入了"+arguments.length+"个参数");   
        for(var i=1,len=arguments.length;i<len;i++){
            var interface=arguments[i];
            if(interface.constructor!==Interface)
            throw new Error("接口不匹配");
            if(object.constructor==Interface)
            throw new Error("无法传入接口实例对象或者传入的对象为空");
            
            for(var j=0,methodsLen=interface.methods.length;j<methodsLen;j++){
                var method=interface.methods[j];
                if(!object[method]||typeof object[method]!=='function')
                    throw new Error("对象没有实现"+interface.name+" "+method+"方法接口");
            }
        }
    }
    
   
  function addEventLiser(element, eventName, callback) {
      if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
      } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, callback);
      } else {
        alert("XX");
        element['on' + eventName] = callback;
      }
   }
   
   //Child.superclass.constructor.call(...);
   function extend(Child,Parent){
        function F(){}
        F.prototype=Parent.prototype;
        
        Child.prototype=new F();
        Child.prototype.constructor=Child;
        Child.superclass=Parent.prototype;
        if(Parent.prototype.constructor==Object.prototype.constructor)
        Parent.prototype.constructor=Parent;
    }
    
  function createXMLHttpObject(){
  		var XMLHttpFactories=[
  			function(){return new XMLHttpRequest()},
  			function(){return new ActiveXObject("Msxml2.XMLHTTP")},
  			function(){return new ActiveXObject("Msxml3.XMLHTTP")},
  			function(){return new ActiveXObject("Microsoft.XMLHTTP")}
  		];
  		
  		var XMLHttpObject=null;
  		
  		for(var i=0;i<XMLHttpFactories.length;i++){
  			try {
				XMLHttpObject=XMLHttpFactories[i]();
			} catch (e) {
				console.log(e.message);
				continue;
			}
  			return XMLHttpObject;
  		}
  		
  	}
  
 var asyncRequest=(function(){
 	function handleReadyState(o,callback){
 		var poll=setInterval(function(){
 			if(o&&o.readyState==4){
 				clearInterval(poll);
 				if(callback)
 					callback(o);
 			}
 			
 		},50);
 	}
 	
 	return function(method,uri,callback,postData){
 		var http=createXMLHttpObject();
 		http.open(method,uri,true);
 		handleReadyState(http,callback);
 		http.send(postData||null);
 		return http;
 	}
 
 })();
