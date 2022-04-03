var now = new Date();
var day = now.getDate();
var countDownDate = new Date();

//console.log("now: " + day +" & cntDwn: "+ countDownDate.getDate());

// Set the date we're counting down to
//var countDownDate = new Date("April 4, 2022 20:57:00").getTime();
//console.log(countDownDate);

var iftari2  = new Date(2022, 4,  3, 20, 40, 00);
var iftari3  = new Date(2022, 4,  4, 19, 13, 00);
var iftari4  = new Date(2022, 4,  5, 19, 14, 00);
var iftari5  = new Date(2022, 4,  6, 19, 15, 00);
var iftari6  = new Date(2022, 4,  7, 19, 16, 00);
var iftari7  = new Date(2022, 4,  8, 19, 17, 00);
var iftari8  = new Date(2022, 4,  9, 19, 18, 00);
var iftari9  = new Date(2022, 4, 10, 19, 20, 00);
var iftari10 = new Date(2022, 4, 11, 19, 21, 00);
var iftari11 = new Date(2022, 4, 12, 19, 22, 00);
var iftari12 = new Date(2022, 4, 13, 19, 23, 00);
var iftari13 = new Date(2022, 4, 14, 19, 24, 00);
var iftari14 = new Date(2022, 4, 15, 19, 25, 00);
var iftari15 = new Date(2022, 4, 16, 19, 26, 00);
var iftari16 = new Date(2022, 4, 17, 19, 27, 00);
var iftari17 = new Date(2022, 4, 18, 19, 28, 00);
var iftari18 = new Date(2022, 4, 19, 19, 29, 00);
var iftari19 = new Date(2022, 4, 20, 19, 31, 00);
var iftari20 = new Date(2022, 4, 21, 19, 32, 00);
var iftari21 = new Date(2022, 4, 22, 19, 33, 00);
var iftari22 = new Date(2022, 4, 23, 19, 34, 00);
var iftari23 = new Date(2022, 4, 24, 19, 35, 00);
var iftari24 = new Date(2022, 4, 25, 19, 36, 00);
var iftari25 = new Date(2022, 4, 26, 19, 37, 00);
var iftari26 = new Date(2022, 4, 27, 19, 38, 00);
var iftari27 = new Date(2022, 4, 28, 19, 40, 00);
var iftari28 = new Date(2022, 4, 29, 19, 41, 00);
var iftari29 = new Date(2022, 4, 30, 19, 42, 00);
var iftari30 = new Date(2022, 5,  1, 19, 44, 00);

// console.log("now2: " + day +" & cntDwn: "+ now.getDay());
// console.log("data ne databaz: "+ iftari9.getDate());


for(var i=2; i<=30; i++){
  if(this["iftari"+i].getDate() == day){
    var countDownDate = this["iftari"+i] ;
    //console.log("For loop: "+this["iftari"+i]);
    document.getElementById("iftariSot").innerHTML = this["iftari"+i].getHours() + ":" + this["iftari"+i].getMinutes();
    console.log("nowLoop: " + day +" & cntDwn: "+ countDownDate.getDate());
    var mbetja = 30 - i;
    console.log(i);
    document.getElementById("ditetEMbetura").innerHTML = "Sot + " + mbetja;
    break;
  };
};
console.log(mbetja);

//console.log("test:" + iftarinewLocal.getHours());
// document.getElementById("iftariSot").innerHTML = iftari2.getHours() + ":" + iftari2.getUTCMinutes();




for(var i=2;i<=12;i++){
console.log(this["iftari"+i].getMinutes());
};

// Update the count down every 1 second
var x = setInterval(function() {


  // Get today's date and time
  
  now = new Date();
  //console.log(now.getSeconds()); //po punon per merak

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance > countDownDate) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "IFTARI";
    document.getElementById("ditetEMbetura").innerHTML = mbetja;
  }
  //console.log(mbetja+1);
  console.log("distanca: " + distance);
}, 1000);