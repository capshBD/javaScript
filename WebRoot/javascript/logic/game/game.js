;(function(window,undefined){
              function Game() {
                this.food = new Food();
                this.snake = new Snake();
              }
              
              Game.prototype.start=function(map){
                // 1 显示蛇和食物
                this.food.render(map);
                this.food.random();
                this.snake.render(map);
                  // 2 让蛇动起来
                _runSnake.call(this, map);
                // 3 按键盘改变蛇的运动方向
                _bindKey.call(this);
               }    
  
  // 2 让蛇动起来  私有的函数
  function _runSnake(map) {
    // 改造调用方式_runSnake.call(this, map);
    // 此时此处的this指向游戏对象
    // this
    var timerId = setInterval(function () {
      // this
      this.snake.move();
  
      // 判断蛇是否吃到食物
      _eat.call(this);
  
  
      // 判断蛇是否出去边界  出去边界游戏结束
      var x = this.snake.body[0].x;  // 几个蛇节的宽度
      var y = this.snake.body[0].y;
      
      for(var i=1;i<this.snake.body.length;i++){
        if(x==this.snake.body[i].x&&y==this.snake.body[i].y){
           clearInterval(timerId); 
            alert('Game Over');
            return;
        }
      }
  
      if (x < 0 || y < 0) {
        // 越界  游戏结束
        clearInterval(timerId);
        alert('Game Over');
        return;
      }
  
      var maxX = map.offsetWidth / this.snake.width - 1;
      var maxY = map.offsetHeight / this.snake.height - 1;
  
      if (x > maxX || y > maxY) {
        // 越界  游戏结束
        clearInterval(timerId);
        alert('Game Over');
        // console.log('Game Over');
        return;
      }
  
      this.snake.render(map);
      
    }.bind(this), 100);
  }
  
                
  function _eat() {
    // 判断蛇头是否吃到食物
    // 蛇的x和y  距离0,0具有几个蛇节的宽度
    var snakeX = this.snake.body[0].x;
    var snakeY = this.snake.body[0].y;
  
    // food的x和y 经过改造 距离0,0具有几个食物的宽度   --- 食物的大小要和蛇节的大小一致
    var foodX = this.food.x;
    var foodY = this.food.y;
  
    if (snakeX === foodX && snakeY === foodY) {
      // 1 随机生成食物的位置
      this.food.random();
      // 2 让蛇身增加一节
      var last = this.snake.body[this.snake.body.length - 1];
      
      var o = {
        x: last.x,
        y: last.y,
        color: last.color
      }
      this.snake.body.push(o);
    }
  }
  
      // 3 按键盘改变蛇的运动方向
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
        window.Game = Game;
              
  })(window);