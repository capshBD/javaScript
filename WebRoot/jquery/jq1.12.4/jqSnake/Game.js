;(function(window){
	function Game(){
			this.snake=new Snake();
			this.food=new Food();
	}
	Game.prototype.start=function(map){
		this.food.render(map.get(0));
		this.food.random();
		this._run(map);
		_bindKey.call(this);
	}
	
	Game.prototype._run=function(map){
		 var maxX = map.width() / this.snake.width - 1;
  		 var maxY = map.height() / this.snake.height - 1;
		 var timerId=setInterval(function(){
			this.snake.move();
			_eatFood.call(this);
			
			var x=this.snake.body[0].x;
			var y=this.snake.body[0].y;
			
			if(x<0||y<0||x>maxX||y>maxY){
				clearInterval(timerId);
				alert('game over');
				return;
			}
		
			this.snake.render(map)
		}.bind(this),100);
	}
	
function _eatFood(){
		if(this.snake.body[0].x==this.food.x&&this.snake.body[0].y==this.food.y){
			var last=this.snake.body[this.snake.body.length-1];
			this.snake.body.push({
				x:last.x,
				y:last.x,
				color:last.color
			});
			this.food.random();
		}
}
	
//3 按键盘改变蛇的运动方向
function _bindKey() {
    // this
    document.onkeydown = function (e) {
      // this -> document
      e = e || event;
       console.log(e.keyCode);
      // 37 left  38 up  39 right 40 down
      switch (e.keyCode) {
        case 37:
          // 当当前方向是right 不允许掉头
          if (this.snake.direction === 'right') return;
          this.snake.direction = 'left';
          break;
        case 38:
          if (this.snake.direction === 'down') return;
          this.snake.direction = 'up';
          break;
        case 39:
          if (this.snake.direction === 'left') return;
          this.snake.direction = 'right';
          break;
        case 40:
          if (this.snake.direction === 'up') return;
          this.snake.direction = 'down';
          break;
      }
    }.bind(this);
  }
	window.Game=Game;
})(window)

