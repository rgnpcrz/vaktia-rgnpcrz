const timezone = "Europe/Amsterdam";

var now = new Date();

var countDownDate = new Date();
var syfyriTemp;
var iftariTemp;
var nowTemp;

//Iftari
var iftari1 = new Date(2023, 2, 23, 17, 59, 00);
var iftari2 = new Date(2023, 2, 24, 18, 00, 00);
var iftari3 = new Date(2023, 2, 25, 18, 02, 00);
var iftari4 = new Date(2023, 2, 5, 19, 14, 00);
var iftari5 = new Date(2023, 2, 6, 19, 15, 00);
var iftari6 = new Date(2023, 3, 7, 19, 16, 00);
var iftari7 = new Date(2023, 3, 8, 19, 17, 00);
var iftari8 = new Date(2023, 3, 9, 19, 18, 00);
var iftari9 = new Date(2023, 3, 10, 19, 20, 00);
var iftari10 = new Date(2023, 3, 11, 19, 21, 00);
var iftari11 = new Date(2023, 3, 12, 19, 22, 00);
var iftari12 = new Date(2023, 3, 13, 19, 23, 00);
var iftari13 = new Date(2023, 3, 14, 19, 24, 00);
var iftari14 = new Date(2023, 3, 15, 19, 25, 00);
var iftari15 = new Date(2023, 3, 16, 19, 26, 00);
var iftari16 = new Date(2023, 3, 17, 19, 27, 00);
var iftari17 = new Date(2023, 3, 18, 19, 28, 00);
var iftari18 = new Date(2023, 3, 19, 19, 29, 00);
var iftari19 = new Date(2023, 3, 20, 19, 31, 00);
var iftari20 = new Date(2023, 3, 21, 19, 32, 00);
var iftari21 = new Date(2023, 3, 22, 19, 33, 00);
var iftari22 = new Date(2023, 3, 23, 19, 34, 00);
var iftari23 = new Date(2023, 3, 24, 19, 35, 00);
var iftari24 = new Date(2023, 3, 25, 19, 36, 00);
var iftari25 = new Date(2023, 3, 26, 19, 37, 00);
var iftari26 = new Date(2023, 3, 27, 19, 38, 00);
var iftari27 = new Date(2023, 3, 28, 19, 40, 00);
var iftari28 = new Date(2023, 3, 29, 19, 41, 00);
var iftari29 = new Date(2023, 3, 30, 19, 42, 00);
var iftari30 = new Date(2023, 4, 1, 19, 44, 00);

//syfyri
// Janari - 0
// Shkurti -1
// Marsi - 2
var syfyri1 = new Date(2023, 2, 23, 3, 55, 00);
var syfyri2 = new Date(2023, 2, 24, 3, 53, 00);
var syfyri3 = new Date(2023, 2, 25, 3, 51, 00);
var syfyri4 = new Date(2023, 2, 5, 4, 29, 00);
var syfyri5 = new Date(2023, 2, 6, 4, 27, 00);
var syfyri6 = new Date(2023, 2, 7, 4, 25, 00);
var syfyri7 = new Date(2023, 2, 8, 4, 22, 00);
var syfyri8 = new Date(2023, 2, 9, 4, 20, 00);
var syfyri9 = new Date(2023, 2, 10, 4, 18, 00);
var syfyri10 = new Date(2023, 3, 11, 4, 16, 00);
var syfyri11 = new Date(2023, 3, 12, 4, 14, 00);
var syfyri12 = new Date(2023, 3, 13, 4, 12, 00);
var syfyri13 = new Date(2023, 3, 14, 4, 10, 00);
var syfyri14 = new Date(2023, 3, 15, 4, 08, 00);
var syfyri15 = new Date(2023, 3, 16, 4, 06, 00);
var syfyri16 = new Date(2023, 3, 17, 4, 05, 00);
var syfyri17 = new Date(2023, 3, 18, 4, 03, 00);
var syfyri18 = new Date(2023, 3, 19, 4, 01, 00);
var syfyri19 = new Date(2023, 3, 20, 3, 59, 00);
var syfyri20 = new Date(2023, 3, 21, 3, 57, 00);
var syfyri21 = new Date(2023, 3, 22, 3, 55, 00);
var syfyri22 = new Date(2023, 3, 23, 3, 52, 00);
var syfyri23 = new Date(2023, 3, 24, 3, 50, 00);
var syfyri24 = new Date(2023, 3, 25, 3, 47, 00);
var syfyri25 = new Date(2023, 3, 26, 3, 45, 00);
var syfyri26 = new Date(2023, 3, 27, 3, 43, 00);
var syfyri27 = new Date(2023, 3, 28, 3, 41, 00);
var syfyri28 = new Date(2023, 3, 29, 3, 39, 00);
var syfyri29 = new Date(2023, 3, 30, 3, 37, 00);
var syfyri30 = new Date(2023, 4, 1, 3, 35, 00);

// Update the count down every 1 second
var x = setInterval(function () {
  now = new Date();
  console.log(now);

  for (var i = 1; i <= 30; i++) {
    //console.log(now.getTime());
    syfyriTemp = this["syfyri" + i].getTime();
    iftariTemp = this["iftari" + i].getTime();
    nowTemp = now.getTime();

    if (now < syfyriTemp) {
      console.log(nowTemp, syfyriTemp);
      console.log("Syfyri1:", syfyri1);
      countDownDate = syfyriTemp;
      document.getElementById("syfyrApoIftar").innerHTML = "Syfyri: ";
      if (this["syfyri" + i].getMinutes() <= 9) {
        document.getElementById("ora").innerHTML = this["syfyri" + i].getHours() + ":0" + this["syfyri" + i].getMinutes();
      } else {
        document.getElementById("ora").innerHTML = this["syfyri" + i].getHours() + ":" + this["syfyri" + i].getMinutes();
      }
      var mbetja = 31 - i;
      document.getElementById("ditetEMbetura").innerHTML = mbetja;
      break;
    } else if (now < iftariTemp) {
      console.log("Iftari: ", nowTemp, iftariTemp);

      countDownDate = iftariTemp;
      document.getElementById("syfyrApoIftar").innerHTML = "Iftari: ";
      if (this["iftari" + i].getMinutes() <= 9) {
        document.getElementById("ora").innerHTML = this["iftari" + i].getHours() + ":0" + this["iftari" + i].getMinutes();
      } else {
        document.getElementById("ora").innerHTML = this["iftari" + i].getHours() + ":" + this["iftari" + i].getMinutes();
      }
      var mbetja = 30 - i;
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
