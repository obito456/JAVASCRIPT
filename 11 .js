const pi=3.14159;
let radius;
let circumference;

// radius=window.prompt("enter the radius");
radius=Number(radius);



// console.log(circumference);
document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("mytext").value;
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById("h3").textContent=circumference+"cm";
}
  
//html
  /*<!DOCTYPE html>
<html lang="en">
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=devuice-width, initial-scale=1.0">
  <title>My web</title>
  <link rel="stylesheet" href="xyz.css">
</head>
<body>
  
  <h1 id="h1">Welcome</h1>
  <label>radius: </label>
  <input id="mytext"><br>
  <button id="mysubmit">submit</button>
  <h3 id="h3"></h3>

  <p id="p1"></p>
  <p id="p2"></p>
  <p id="p3"></p>
  <script src="index.js"></script>*/

</body>
</html>
