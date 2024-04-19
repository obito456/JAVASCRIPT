let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("h1").textContent=`hello  ${username}`;
}

// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Welcome Page</title>
//     <link rel="stylesheet" href="css.css">
// </head>
// <body>
//     <h1 id="myh1">Welcome</h1>

//     <label for="mytext">Username:</label>
//     <input type="text" id="mytext"><br><br>
    
//     <button id="mysubmit">Submit</button>

//     <img src="bkkb.jpg" alt="A city skyline" height="300" width="300">

//     <script src="js.js"></script>
// </body>
// </html>
*{
    font-size: 10px;
    font-family: Verdana;
    font-style: bold;
    color: black;
    
    
}
body{

    background-color: lightblue;
    
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position:90px;
    background-size: 100%;
}

