// Historiske aktiedata fra 1/1-2020 - 1/12-2020
var nvo_data = [69.85, 67.13, 63.89, 69.43, 65.53, 64.82, 64.97, 65.43, 62.84, 59.73, 57.68, 60.36]

var nda_data = [49.32, 53.27, 47.77, 48.54, 50.63, 48.92, 45.74, 45.11, 43.69, 37.60, 52.21, 52.42]

var dem_data = [240.60, 235.00, 201.30, 199.50, 186.20, 195.40, 174.90, 189.30, 162.75, 150.60, 206.50, 219.00]


//Indlæsning af dataen på websitet
$(document).ready(function() {
  var t = 0;
  var h = 4000;

  setInterval(function() {
    $("#stock_nvo").html("<b>&#8383;</b> " + nvo_stock_data[t]);
    if (nvo_stock_data[t] > nvo_stock_data[t-1]) {
       $("#stock_nvo").css('background', '#6eaf0f');
    } else {
       $("#stock_nvo").css('background', '#ff0000');
    }
    $("#stock_nda").html("<b>&#8383;</b> " + nda_stock_data[t]);
    if (nda_stock_data[t] > nda_stock_data[t-1]) {
       $("#stock_nda").css('background', '#6eaf0f');
    } else {
       $("#stock_nda").css('background', '#ff0000');
    }
    $("#stock_dem").html("<b>&#8383;</b> " + dem_stock_data[t]);
    if (dem_stock_data[t] > dem_stock_data[t-1]) {
       $("#stock_dem").css('background', '#6eaf0f');
    } else {
       $("#stock_dem").css('background', '#ff0000');
    }
    t += 1
  }, h);
})


/*
Trykke på elementet for at købe aktien til prisen
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Funktioner til beregning:

function aktielearn_stockmean(x) { // beregner middelværdi

  var sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += x[i]
  }

  return ((sum)/x.length) // returnerer et enkelt tal
}

function aktielearn_stockvariance(x) { // beregner varians på hver enkelt

  var m = stocks_mean(x)
  var values = []
  var n = 0

  for (let i = 0; i < x.length; i++) {
    n = Math.pow((x[i] - m), 2)
    n = n/x.length;
    values.push(n)
  }

  return values // returnerer en liste
}

function aktielearn_stockreturns(x) { // ændrer aktiekurser til afkast
  var afkast = []
  var k = 0
  for (let i = 0; i < x.length - 1; i++) {
    k = ((x[i]-x[i+1])/x[i+1])
    afkast.push(k)
  }

  return afkast // returnerer en liste
}

/* function stocks_variance_collected (x) { // tager en liste
  var collected = 0
  for (let i = 0; i < x.length; i++) {
    collected += x[i]
  }

  return (collected/x.length) // returnerer et enkelt tal
}
*/

function aktielearn_stockscovar(x, y) { // tager to lister som parametre
  var num = 0

  for (let i = 0; i < x.length; i++) { // hvis i er mindre end længden på listen skal for løkken køres igennem i++ = i+1
    var afvigelseX = (x[i]-stocks_mean(x)) // afvigelsen for i'te måned ift middelværdien for x aktie
    var afvigelseY = (y[i]-stocks_mean(y))
    num += afvigelseX * afvigelseY// summering af de to afvigelser. variablen bliver større og større for hver måned
  }
  //return (num/(x.length-1)) // returnerer cov(x, y)
  return (num/(x.length))// dividerer med antallet af observationer og returnerer cov.
}



function do_variance(x) {
  var sum = 0 // variabel til at summe i.
  var m = stocks_mean(x)

  for (let i = 0; i < x.length; i++) {
    sum += Math.pow(x[i]-m, 2)
  }

  return sum/(x.length-1)
}


for (let n = 0; n < mm.length; n++) {
  if (n == mm.length-1) {
    //viser bare på websitet
    document.body.innerHTML += 'cov(' + sets[0] + ', ' + sets[mm.length-1] + '): ' + stocks_covar(mm[0], mm[mm.length-1]) + '<br>'
//    console.log(stocks_covar(mm[0], mm[mm.length-1]))
  } else {
    //viser bare på websitet
    document.body.innerHTML += 'cov(' + sets[n] + ', ' + sets[n+1] + '): ' + stocks_covar(mm[n], mm[n+1]) + '<br>'
  //  console.log(stocks_covar(mm[n], mm[n+1]))
  }
}



//console.log(stocks_return(nvo_data))
//console.log(stocks_mean(stocks_return(nvo_data)))
//console.log(stocks_variance_collected(stocks_return(dem_data)))
//document.body.innerHTML = stocks_variance_collected(stocks_return(dem_data))

