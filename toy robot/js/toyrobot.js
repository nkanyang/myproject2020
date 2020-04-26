var xLen = 5;
var yLen = 5;
var directions=["North","East","South","West"];
var pos={x:-1,y:-1,f:-1,isPlaced:false};

function isPlaced(){
  return pos.x < 0 || pos.y < 0 || pos.f< 0;
}
function isOnBoard(x,y){
  return (x >=0 && x < xLen) && (y >= 0 && y < yLen);
}
function isValidDirection(f){
  return f>0 && f<4;//must be 0,1,2,3
}

function place(x,y,forward){
  if(!isOnBoard(x,y)){
    console.log("Place out of board!");
    return;
  }
  if(!isValidDirection(forward)){
    console.log("Invalid direction!");
    return
  } 
  pos.x = x;
  pos.y = y;
  pos.f = forward;
  pos.isPlaced = true;
  report("Placed!");
}

function move(){
  if(!pos.isPlaced){
    console.log("Haven't Placed yet!");
    return;
  }
  let newX = pos.x;
  let newY = pos.y;
  switch(pos.f){
    case 0: newY++;break;
    case 1: newX++;break;
    case 2: newY--;break;
    case 3: newX--;break;
    default:
      console.log("Invalid Forward");
  }
  if(!isOnBoard(newX,newY)){
    console.log("Invalid Move!")
    return;
  }
  pos.x = newX;
  pos.y = newY;
  report("Move!");
}

function right(){
  if(!pos.isPlaced){
    console.log("Haven't Placed yet!");
    return;
  }
  pos.f++;
  pos.f %= 4;
  report("Trun right!");
}
function left(){
  if(!pos.isPlaced){
    console.log("Haven't Placed yet!");
    return;
  }
  pos.f--
  pos.f=(pos.f+4)%4;
  report("Turn left!");
}


function report(action){
  if(!pos.isPlaced){
    console.log("Haven't Placed yet!");
    return;
  }
  if(!action) action="Report:";
  console.log(action+"  current postion:("+pos.x+" , "+pos.y+" , "+directions[pos.f] + ")");
}

report();
place(0,0,2);
move();
left();
right();
move();
left();
move();
move();move();move();move();
left();move();move();move();move(); move();
right();move();
left();left();move();move();move(); move();
left();move();move();move(); move();