const timezone = "Europe/Amsterdam";

var now = new Date();

var countDownDate = new Date();
var syfyriTemp;
var iftariTemp;
var nowTemp;

// Iftari (Sunset) times for Ramadan 2025
var iftari1 = new Date(2025, 2, 1, 17, 33, 0); // Mar 1, 2025
var iftari2 = new Date(2025, 2, 2, 17, 34, 0);
var iftari3 = new Date(2025, 2, 3, 17, 36, 0);
var iftari4 = new Date(2025, 2, 4, 17, 37, 0);
var iftari5 = new Date(2025, 2, 5, 17, 38, 0);
var iftari6 = new Date(2025, 2, 6, 17, 39, 0);
var iftari7 = new Date(2025, 2, 7, 17, 40, 0);
var iftari8 = new Date(2025, 2, 8, 17, 42, 0);
var iftari9 = new Date(2025, 2, 9, 17, 43, 0);
var iftari10 = new Date(2025, 2, 10, 17, 44, 0);
var iftari11 = new Date(2025, 2, 11, 17, 45, 0);
var iftari12 = new Date(2025, 2, 12, 17, 47, 0);
var iftari13 = new Date(2025, 2, 13, 17, 48, 0);
var iftari14 = new Date(2025, 2, 14, 17, 49, 0);
var iftari15 = new Date(2025, 2, 15, 17, 50, 0);
var iftari16 = new Date(2025, 2, 16, 17, 51, 0);
var iftari17 = new Date(2025, 2, 17, 17, 52, 0);
var iftari18 = new Date(2025, 2, 18, 17, 53, 0);
var iftari19 = new Date(2025, 2, 19, 17, 55, 0);
var iftari20 = new Date(2025, 2, 20, 17, 56, 0);
var iftari21 = new Date(2025, 2, 21, 17, 57, 0);
var iftari22 = new Date(2025, 2, 22, 17, 58, 0);
var iftari23 = new Date(2025, 2, 23, 17, 59, 0);
var iftari24 = new Date(2025, 2, 24, 18, 0, 0);
var iftari25 = new Date(2025, 2, 25, 18, 2, 0);
var iftari26 = new Date(2025, 2, 26, 18, 3, 0);
var iftari27 = new Date(2025, 2, 27, 18, 4, 0);
var iftari28 = new Date(2025, 2, 28, 18, 5, 0);
var iftari29 = new Date(2025, 2, 29, 18, 6, 0);
var iftari30 = new Date(2025, 2, 29, 18, 23, 0);

// Syfyri (Sunrise) times for Ramadan 2025
// Janari - 0
// Shkurti -1
// Marsi - 2
// Prilli - 3
var syfyri1 = new Date(2025, 2, 1, 4, 34, 0); // Mar 1, 2025
var syfyri2 = new Date(2025, 2, 2, 4, 33, 0);
var syfyri3 = new Date(2025, 2, 3, 4, 31, 0);
var syfyri4 = new Date(2025, 2, 4, 4, 29, 0);
var syfyri5 = new Date(2025, 2, 5, 4, 27, 0);
var syfyri6 = new Date(2025, 2, 6, 4, 25, 0);
var syfyri7 = new Date(2025, 2, 7, 4, 23, 0);
var syfyri8 = new Date(2025, 2, 8, 4, 21, 0);
var syfyri9 = new Date(2025, 2, 9, 4, 20, 0);
var syfyri10 = new Date(2025, 2, 10, 4, 18, 0);
var syfyri11 = new Date(2025, 2, 11, 4, 16, 0);
var syfyri12 = new Date(2025, 2, 12, 4, 15, 0);
var syfyri13 = new Date(2025, 2, 13, 4, 14, 0);
var syfyri14 = new Date(2025, 2, 14, 4, 13, 0);
var syfyri15 = new Date(2025, 2, 15, 4, 11, 0);
var syfyri16 = new Date(2025, 2, 16, 4, 9, 0);
var syfyri17 = new Date(2025, 2, 17, 4, 8, 0);
var syfyri18 = new Date(2025, 2, 18, 4, 6, 0);
var syfyri19 = new Date(2025, 2, 19, 4, 4, 0);
var syfyri20 = new Date(2025, 2, 20, 4, 2, 0);
var syfyri21 = new Date(2025, 2, 21, 4, 0, 0);
var syfyri22 = new Date(2025, 2, 22, 3, 57, 0);
var syfyri23 = new Date(2025, 2, 23, 3, 55, 0);
var syfyri24 = new Date(2025, 2, 24, 3, 53, 0);
var syfyri25 = new Date(2025, 2, 25, 3, 51, 0);
var syfyri26 = new Date(2025, 2, 26, 3, 49, 0);
var syfyri27 = new Date(2025, 2, 27, 3, 46, 0);
var syfyri28 = new Date(2025, 2, 28, 3, 44, 0);
var syfyri29 = new Date(2025, 2, 29, 3, 41, 0);
var syfyri30 = new Date(2026, 1, 17, 6, 0, 0); // Next years Ramazan estimate sunrise

// Update the count down every 1 second
var x = setInterval(function () {
  now = new Date();

  for (var i = 1; i <= 30; i++) {
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
  var days = Math.floor(oroq / (1000 * 60 * 60 * 24));
  var hours = Math.floor((oroq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((oroq % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((oroq % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if (days > 0) {
    document.getElementById("countDown").innerHTML = days + "d " + hours + "h " + minutes + "m ";
  } else {
    document.getElementById("countDown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  }

  // If the count down is finished, write some text
  // if (oroq < 0) {
  //   // clearInterval(x); // kjo po e ndal "loopin"
  //   document.getElementById("countDown").innerHTML = "IFTARI";
  //   document.getElementById("ditetEMbetura").innerHTML = mbetja;
  // }
  //console.log(mbetja+1);
  //console.log("distanca: " + distance);
}, 1000);
