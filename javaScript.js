const backSound=new Audio("i can see you.mp3");


function music(){
    backSound.play();   
}


var btn=document.getElementById("btn");
const adrs="https://www.google.com/" ;
console.log(btn);

function btnclick() {
    var key=document.getElementById("key").value;
     

    if (key==7529) {
        btn.setAttribute(href,adrs);
        console.log("ghhnnnn");
    }
    else {
        alert("Wrong key!");

    }
}