;(function(window){
	var snakeContent=[];
	function Snake(option){
		option=option||{};
		this.width=option.width||20;
		this.height=option.height||20;
		this.direction=option.direction||'right';
		this.body=[
				{x:3,y:2,color:option.head||'red'},
				{x:2,y:2,color:option.body||'blue'},
				{x:1,y:2,color:option.body||'blue'}
		]
	}
	
	Snake.prototype.render=function(map){
		map.children().filter('.sk').remove();
		snakeContent.splice(0,snakeContent.length);
			
			$.each(this.body,function(index,item){
				snakeContent.push(
				$('<div class="sk"></div>').css({
					left:this.body[index].x*this.width+'px',
					top:this.body[index].y*this.height+'px',
					backgroundColor:this.body[index].color,
					width:this.width+'px',
					height:this.height+'px',
					position:'absolute'
			}).appendTo(map));
		  }.bind(this));
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
	window.Snake=Snake;
	
})(window)