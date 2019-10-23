 ;(function(window,undefined){
   var snakeDiv=[];
     function Snake(option){
        option=option||{};
        this.width=option.width||20;
        this.height=option.height||20;
        this.direction=option.direction||"right";
        this.body = [
            {x: 8, y: 2, color: 'red'},
            {x: 7, y: 2, color: 'blue'},
            {x: 6, y: 2, color: 'blue'},
            {x: 5, y: 2, color: 'blue'},
            {x: 4, y: 2, color: 'blue'},
            {x: 3, y: 2, color: 'blue'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
     }
        
        Snake.prototype.render=function(map){
            for(var k in snakeDiv)
             map.removeChild(snakeDiv[k]);
            snakeDiv.splice(0,snakeDiv.length);
            
            var div;
        this.body.forEach(function(item){
                div=document.createElement("div");
                div.style.width=this.width+"px";
                div.style.height=this.height+"px";
                div.style.backgroundColor=item.color;
                div.style.left=item.x*this.width+"px";
                div.style.top=item.y*this.height+"px";
                div.style.position="absolute";
                map.appendChild(div);
                snakeDiv.push(div);
            }.bind(this)) 
        }
        
        Snake.prototype.move=function(){
            
            for(var i=this.body.length-1;i>0;i--){
                this.body[i].x=this.body[i-1].x;
                this.body[i].y=this.body[i-1].y;
            }
            switch(this.direction){
                case "right":
                    this.body[0].x+=1;
                    break;
                case "left":
                    this.body[0].x-=1;
                    break;
                case "up":
                    this.body[0].y-=1;
                    break;
                case "down":
                    this.body[0].y+=1;
                    break;
            }
        }
 window.Snake = Snake;
 })(window);      