/*use console log print 0,1,2,3,4,5 in a given time interval eg.1000ms*/

//1 to many timers!
/*
for(let i=0;i<6;i++){
  setTimeout(function(){console.log(i)},1000*i);
}


for(var i = 0; i < 6; i ++){
  (function(j){
    setTimeout(function(){
      console.log(j);
    },1000 * j);
  })(i)
}



var i = 0;
let time = setInterval(output,1000);
function output(){
  i<6?console.log(i++):clearInterval(time);
}
*/
var i1 = 0;
let time1 = setInterval(output(6),1000);
function output(num){
  return ()=>{
    i1<num?console.log(i1++):clearInterval(time1);
  }
}