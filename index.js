const timezone = "Europe/Amsterdam";

var now = new Date();

var countDownDate = new Date();
var syfyriTemp;
var iftariTemp;
var nowTemp;

//Iftari
var iftari1 = new Date(2024, 3, 11, 17, 59, 0);
var iftari2 = new Date(2024, 3, 12, 18, 0, 0);
var iftari3 = new Date(2024, 3, 13, 18, 2, 0);
var iftari4 = new Date(2024, 3, 14, 19, 3, 0);
var iftari5 = new Date(2024, 3, 15, 19, 4, 0);
var iftari6 = new Date(2024, 3, 16, 19, 5, 0);
var iftari7 = new Date(2024, 3, 17, 19, 6, 0);
var iftari8 = new Date(2024, 3, 18, 19, 7, 0);
var iftari9 = new Date(2024, 3, 19, 19, 8, 0);
var iftari10 = new Date(2024, 3, 20, 19, 9, 0);
var iftari11 = new Date(2024, 3, 21, 19, 10, 0);
var iftari12 = new Date(2024, 3, 22, 19, 12, 0);
var iftari13 = new Date(2024, 3, 23, 19, 13, 0);
var iftari14 = new Date(2024, 3, 24, 19, 14, 0);
var iftari15 = new Date(2024, 3, 25, 19, 15, 0);
var iftari16 = new Date(2024, 3, 26, 19, 16, 0);
var iftari17 = new Date(2024, 3, 27, 19, 17, 0);
var iftari18 = new Date(2024, 3, 28, 19, 18, 0);
var iftari19 = new Date(2024, 3, 29, 19, 20, 0);
var iftari20 = new Date(2024, 3, 30, 19, 21, 0);
var iftari21 = new Date(2024, 3, 31, 19, 22, 0);
var iftari22 = new Date(2024, 4, 1, 19, 23, 0);
var iftari23 = new Date(2024, 4, 2, 19, 24, 0);
var iftari24 = new Date(2024, 4, 3, 19, 25, 0);
var iftari25 = new Date(2024, 4, 4, 19, 26, 0);
var iftari26 = new Date(2024, 4, 5, 19, 27, 0);
var iftari27 = new Date(2024, 4, 6, 19, 28, 0);
var iftari28 = new Date(2024, 4, 7, 19, 29, 0);
var iftari29 = new Date(2024, 4, 8, 19, 31, 0);
var iftari30 = new Date(2024, 4, 9, 19, 44, 0);

//syfyri
// Janari - 0
// Shkurti -1
// Marsi - 2
var syfyri1 = new Date(2024, 3, 11, 4, 20, 0);
var syfyri2 = new Date(2024, 3, 12, 4, 18, 0);
var syfyri3 = new Date(2024, 3, 13, 4, 17, 0);
var syfyri4 = new Date(2024, 3, 14, 4, 15, 0);
var syfyri5 = new Date(2024, 3, 15, 4, 46, 0);
var syfyri6 = new Date(2024, 3, 16, 4, 44, 0);
var syfyri7 = new Date(2024, 3, 17, 4, 41, 0);
var syfyri8 = new Date(2024, 3, 18, 4, 39, 0);
var syfyri9 = new Date(2024, 3, 19, 4, 37, 0);
var syfyri10 = new Date(2024, 3, 20, 4, 35, 0);
var syfyri11 = new Date(2024, 3, 21, 4, 34, 0);
var syfyri12 = new Date(2024, 3, 22, 4, 32, 0);
var syfyri13 = new Date(2024, 3, 23, 4, 31, 0);
var syfyri14 = new Date(2024, 3, 24, 4, 29, 0);
var syfyri15 = new Date(2024, 3, 25, 4, 27, 0);
var syfyri16 = new Date(2024, 3, 26, 4, 25, 0);
var syfyri17 = new Date(2024, 3, 27, 4, 22, 0);
var syfyri18 = new Date(2024, 3, 28, 4, 20, 0);
var syfyri19 = new Date(2024, 3, 29, 4, 18, 0);
var syfyri20 = new Date(2024, 3, 30, 4, 16, 0);
var syfyri21 = new Date(2024, 3, 31, 4, 14, 0);
var syfyri22 = new Date(2024, 4, 1, 4, 12, 0);
var syfyri23 = new Date(2024, 4, 2, 4, 10, 0);
var syfyri24 = new Date(2024, 4, 3, 4, 8, 0);
var syfyri25 = new Date(2024, 4, 4, 4, 6, 0);
var syfyri26 = new Date(2024, 4, 5, 4, 5, 0);
var syfyri27 = new Date(2024, 4, 6, 4, 3, 0);
var syfyri28 = new Date(2024, 4, 7, 4, 1, 0);
var syfyri29 = new Date(2024, 4, 8, 3, 59, 0);
var syfyri30 = new Date(2024, 4, 9, 3, 35, 0);

// Update the count down every 1 second
var x = setInterval(function () {
  now = new Date();

  for (var i = 1; i <= 29; i++) {
    // console.log(now);
    syfyriTemp = this["syfyri" + i].getTime();
    iftariTemp = this["iftari" + i].getTime();
    nowTemp = now.getTime();

    if (now < syfyriTemp) {
      // console.log(nowTemp, syfyriTemp);
      // console.log("Syfyri1:", syfyri1);
      countDownDate = syfyriTemp;
      document.getElementById("syfyrApoIftar").innerHTML = "Syfyri: ";
      if (this["syfyri" + i].getMinutes() <= 9) {
        document.getElementById("ora").innerHTML = this["syfyri" + i].getHours() + ":0" + this["syfyri" + i].getMinutes();
      } else {
        document.getElementById("ora").innerHTML = this["syfyri" + i].getHours() + ":" + this["syfyri" + i].getMinutes();
      }
      var mbetja = 30 - i;
      document.getElementById("ditetEMbetura").innerHTML = mbetja;
      break;
    } else if (now < iftariTemp) {
      countDownDate = iftariTemp;
      document.getElementById("syfyrApoIftar").innerHTML = "Iftari: ";
      if (this["iftari" + i].getMinutes() <= 9) {
        document.getElementById("ora").innerHTML = this["iftari" + i].getHours() + ":0" + this["iftari" + i].getMinutes();
      } else {
        document.getElementById("ora").innerHTML = this["iftari" + i].getHours() + ":" + this["iftari" + i].getMinutes();
      }
      var mbetja = 29 - i;
      document.getElementById("ditetEMbetura").innerHTML = "Sot + " + mbetja;
      break;
    } else {
      document.getElementById("ora").innerHTML = "Zoti kabull!";
    }
  }

  var oroq = countDownDate - now.getTime();
  //console.log("ifari - now = " + oroq );

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((oroq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((oroq % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((oroq % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  // if (oroq < 0) {
  //   // clearInterval(x); // kjo po e ndal "loopin"
  //   document.getElementById("countDown").innerHTML = "IFTARI";
  //   document.getElementById("ditetEMbetura").innerHTML = mbetja;
  // }
  //console.log(mbetja+1);
  //console.log("distanca: " + distance);
}, 1000);
