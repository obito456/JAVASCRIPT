let x={
    flag:1,
    toString:function(){
        return this.flag++;
    }
}
if(x==1 && x==2 && x==3){
    console.log("Good Job");
}
else{
    console.log("Bad Job");
}
