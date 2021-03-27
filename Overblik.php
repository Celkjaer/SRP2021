<!DOCTYPE html>
<html>
<head>
<title>Aktielearn</title>
<link rel="stylesheet" href="Overblik1.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="aktier.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script src="https://www.chartjs.org/samples/latest/utils.js"></script>
  <script type="text/javascript" src="graph.js"></script>
  <script type="text/javascript">
    function brugeropt() {
    alert(document.getElementById("vegtnvo").value);
      var kr = document.getElementById("kr").value;
      var afkast = stocks_mean();
      var vegtnvo = document.getElementById("vegtnvo").value;
      var resultat = stocks_mean(stocks_return(nvo_data));
      
      
      
      
       alert(resultat);
    }
    function computeropt() {
    alert(document.getElementById("vegtnvo").value);
      var kr = document.getElementById("kr").value;
      var afkast = stocks_mean();
      var vegtnvo = document.getElementById("vegtnvo").value;
      
      
      
      
      
    }
</script>
</head>

<body>

  <div class="header">
    <h1>Aktielearn</h1>
  </div>

  <div class="topnav">
  <a href="startside.php">Startside</a>
  <a href="portef.php">Min portefølje</a>
  <a href="Overblik.php">Aktie overblik</a>
  </div>

  <br> 
<div>
  <h3>
  Herunder ser du 3 forskellige aktier, som du kan lave en portefølje ud af.
    Du kan selv vælge i mellem enten at lave din egen portefølje, hvor du selv bestemmer vægtene for aktierne, eller du kan lade computeren bestemme den mest optimale portefølje.
 </h3>
  <br> 
  <label for="kr">Invester</label>
  <input type="text" id="kr" name="kr" value="1000">
  <label for="kr">kr</label>
  <button id=optiport onclick="computeropt()" >Bestem den mest optimale portefølje til mig </button>
  <button id=optiport onclick="brugeropt()">Lav investering ud fra mine valgte vægte </button>
  <br> <br> <br>
  
  </div>
  
  
  <div class="row">
  <div class="column"> <h2>Novo Nordisk</h2> 
     <div id="stock_nvo" style="float:right"></div> 
     <label for="vegtnvo">Aktiens vægt</label>
     <input type="range" id="vegtnvo" name="vegtnvo" min="0" max="100" value="33">
     <button onclick="printstock" id=kobnvo>Vælg vægten for aktien </button>
    <br> <br>
     <label for="vegtdem">Herunder kan du se hvordan aktien "Novo Nordisk" har udviklet sig.</label>
    <div style="width: 75%"> <canvas id="canvas1"></canvas></div>
    </div>
    
  <br> </br>
  <div class="column"> <h2>Nordea</h2> 
    <div id="stock_nda" style="float:right"></div> 
     <label for="vegtnda">Aktiens vægt</label>
     <input type="range" id="vegtnda" name="vegtnda" min="0" max="100" value="33">
     <button onclick="printstock" id=kobnda>Vælg vægten for aktien </button>
    <br> <br>
     <label for="vegtdem">Herunder kan du se hvordan aktien "Nordea" har udviklet sig.</label>
     <div style="width: 75%"> <canvas id="canvas2"></canvas></div>
  </div>
  
  <br> </br>
  <div class="column"> <h2>Demant</h2>
	<div id="stock_dem" style="float:right"></div> 
     <label for="vegtdem">Aktiens vægt</label>
     <input type="range" id="vegtdem" name="vegtdem" min="0" max="100" value="33">
     <button onclick="printstock" id=kobdem>Vælg vægten for aktien </button>
    <br> <br>
     <label for="vegtdem">Herunder kan du se hvordan aktien "Demant" har udviklet sig.</label>
     <div style="width: 75%"> <canvas id="canvas3"></canvas></div>
</div>


  </div>


<script src="aktier.js"></script>

</body>
</html>
