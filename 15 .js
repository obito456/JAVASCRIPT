const mybutton=document.getElementById("mybutton");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const min=1;
const max=6;
let randnum1;
let randnum2;
let randnum3;

mybutton.onclick=function(){
    randnum1=Math.floor(Math.random()*max)+min;
    randnum2=Math.floor(Math.random()*max)+min;
    randnum3=Math.floor(Math.random()*max)+min;
    label1.textContent=randnum1;
    label2.textContent=randnum2;
    label3.textContent=randnum3;
}

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=devuice-width, initial-scale=1.0" />
    <title>My web</title>
    <link rel="stylesheet" href="xyz.css" />
  </head>
  <body>
    <button id="mybutton" class="buttons">roll</button><br>
    <label id="label1" class="mylabels"></label><br>
    <label id="label2" class="mylabels"></label><br>
    <label id="label3" class="mylabels"></label><br>
    <script src="index.js"></script>
  </body>
</html>*/

/*body{
    text-align: center;
    font-family:verdana;
}

#mybutton{
    padding: 5px 25px;
    font-size: 3em;
    border-radius: 5px; 

}
.mylabels{
    font-size: 3em;
}*/
