    var _map;

    function Box(option){
        this.width=option.width||20;
        this.height=option.height||20;
        this.backgroundColor=option.backgroundColor||'red';
        this.x=0;
        this.y=0;
        this.div_=null; 
    }
    
    Box.prototype.render = function (map) {
        _map=map;   
     // 动态创建div
      var div = document.createElement('div');
      this.div_ = div;
      map.appendChild(div);
          div.style.width=this.width+"px";
          div.style.height=this.height+"px";
          div.style.backgroundColor=this.backgroundColor;
          div.style.position="absolute";
     }
  
      Box.prototype.random=function(){
        this.x=getRandom(0,_map.offsetWidth/this.width)*this.width;
        this.y=getRandom(0,_map.offsetHeight/this.height)*this.height;
        this.div_.style.left=this.x+"px";
        this.div_.style.top=this.y+"px";
      }
  
