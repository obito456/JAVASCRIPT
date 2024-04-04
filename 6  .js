let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("h1").textContent=`hello  ${username}`;
}
