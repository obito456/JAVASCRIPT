const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const increasebtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");

let count =0;

increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
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
    <label id="countlabel">0</label><br />
    <div id="btncontainer">
      <button id="decreasebtn" class="buttons">decrease</button>
      <button id="resetbtn" class="buttons">reset</button>
      <button id="increasebtn" class="buttons">increase</button>
    </div>
    <script src="index.js"></script>
  </body>
</html>*/

/*#countlabel{
    display: block;
    text-align: center;
    font-size: 10em;
    font-family:Helvetica;
}
#btncontainer{
    text-align: center;
}
.buttons{
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color:rgb(72, 160, 13);
    border-radius: 5px; 
    cursor: pointer;
    transition: background-color 0.25s;
}
.buttons:hover{
    background-color:rgb(255, 170, 0)
}*/
