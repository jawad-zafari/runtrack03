<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job02</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h1>Puzzle arc-en-ciel</h1>
    <button id="shuffle-btn">Mélanger</button>
    <br><br>
    <h3>Images désordonnées</h3>
    <div id="rangees" class="container">
       <img src="images/arc1.png" id="arc1">
       <img src="images/arc2.png" id="arc2">
       <img src="images/arc3.png" id="arc3">
       <img src="images/arc4.png" id="arc4">
       <img src="images/arc5.png" id="arc5">
       <img src="images/arc6.png" id="arc6">
    </div>
        <h3>Créez l'arc-en-ciel ici :</h3> 
        <div id="ordonnees" class="container">
        </div>  
            <h2 id="message"></h2>
    <script src="script.js"></script>
</body>
</html>