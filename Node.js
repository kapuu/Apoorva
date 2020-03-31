//NODE.JS
Run command: node app

var time = 0;

var timer = setInterval(function()){
time +=2
Console.log(time +'seconds have passed');
if(time > 5){
  clearInterval(timer);
 }
 }, 2000);
 
 
 console.log(__dirname);
 console.log(__filename);
  
  //Normal function statement
  
  function sayHi(){
    console.log('Hi');
   }
   
   sayHi();
   
 function callFunction(fun){
 fun();
 }
 
callFunction(sayHi);
