/*编写尽可能简洁的javascript代码，找到第一个数组array1中出现，而在第二个数组array2中没有出现的数字。*/
var arr1 = [12,90,45,9,5];
var arr2 = [3,80,9,5];
var arr3 = [];
for(var i =0;i < arr1.length;i++){
  var value = arr1[i];
  if(arr2.indexOf(value) < 0){
    arr3.push(value);
  }
}
console.log(arr3);

/*有一个字符串abcd-ef-ghi，请用javascript将它处理成ghi&ef&abcd*/
var str1="abcd-ef-ghi";
var temp=str1.split("-");
var str2=temp.reverse().join("&");
//console.log(str2);

/*JavaScript中如何检测一个变量是一个string类型*/
function isString(str){
  if((typeof(str) == "string")||str.constructor == String){
    return true;
  }
  return false;
}
var str = new String();
//console.log(isString(str));

/*字符串反转*/
function revStr(str){
  var temStr = "";
  var len = str.length;
  for(var i=len-1;i>=0;i--){
      temStr = temStr + str.charAt(i);
  }
  return temStr;
}
//console.log(revStr("hello world"));

/*给你一个字符串String=“adadfdfseffqdjhuserfefsefseetsdg”，要求找出里边的字符串qdjhu*/
var str = "adadfdfseffqdjhuserfefsefseetsdg";
var search = 'qdjhu';
var start = str.indexOf(search);
var result = str.substring(start,start+search.length);
//console.log(result);
