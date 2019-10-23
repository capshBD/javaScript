    var map=my$("map");
    
    var arr=[],r,g,b,box;
    
    for(var i=0;i<10;i++){
        r = getRandom(0, 255);
        g = getRandom(0, 255);
        b = getRandom(0, 255);
        box=new Box({
            backgroundColor:'rgb(' + r + ', ' + g + ', ' + b + ')'
        });
        box.render(map);
        arr.push(box);
    }
    
    setInterval(locationRandom, 500);//定时更换位置
   // locationRandom();
    function locationRandom(){
        arr.forEach(function(item){
            item.random();
        })
    }