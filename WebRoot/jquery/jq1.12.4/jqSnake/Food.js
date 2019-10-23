;(function (window, undefined) {
   var _map = null;
   function Food(option){
        option=option||{};
        this.width=option.width||20;
        this.height=option.height||20;
        this.backgroundColor=option.backgroundColor||'green';
        this.x=0;
        this.y=0;
        this._div=null;
    }
    
    Food.prototype.render = function (map) {
     // 动态创建div
      var div = document.createElement('div');
      map.appendChild(div);
          div.style.width=this.width+"px";
          div.style.height=this.height+"px";
          div.style.backgroundColor=this.backgroundColor;
          div.style.position="absolute";
          
	     // 记录当前食物对象对应的div元素
	     this._div = div;
	    // 记录地图
	     _map = map; 
     }
  
      Food.prototype.random=function(){
        this.x=getRandom(0,_map.offsetWidth/this.width);
        this.y=getRandom(0,_map.offsetHeight/this.height);
        this._div.style.left=this.x*this.width+"px";
        this._div.style.top=this.y*this.height+"px";
      }
   window.Food = Food; 
 })(window)
  
 