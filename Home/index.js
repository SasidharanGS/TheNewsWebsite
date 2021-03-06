//dark mode toggle
//var counter = 0;
var counter = parseInt(localStorage.getItem("counter"));

if(counter % 2 == 0){
    light();
}
else{
    dark();
}

function darkLight(){
    counter++;
    if(counter % 2 == 0){
        light();
    }
    else{
        dark();
    }
    localStorage.setItem("counter", counter.toString());
}

function light(){
    var modeBtn = document.getElementById("mode");
    modeBtn.src  = "./images/dark.png";

    var lightNav = document.getElementById("nav");
    lightNav.style.backgroundColor = "tomato";

    var lightCard = document.getElementsByClassName("card");
    for(var i=0; i<lightCard.length; i++){
        lightCard[i].style.backgroundColor = "white";
        lightCard[i].style.border = "solid white 3px";
    }

    var lightFeed = document.getElementsByClassName("feed");
    for(var i=0; i<lightFeed.length; i++){
        lightFeed[i].style.backgroundColor = "antiquewhite";
        lightFeed[i].style.border = "solid antiquewhite 3px";
    }

    var text = document.getElementsByTagName("p");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "black";
    }

    var text = document.getElementsByTagName("h4");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "black";
    }

    var top = document.getElementById("top-btn");
    top.src = "./images/backtotop.png";

    document.body.style.background = "rgb(255, 156, 27)";
}

function dark(){
    var modeBtn = document.getElementById("mode");
    modeBtn.src  = "./images/light.png";

    var darkNav = document.getElementById("nav");
    darkNav.style.backgroundColor = "rgb(100, 100, 100)";

    var darkCard = document.getElementsByClassName("card");
    for(var i=0; i<darkCard.length; i++){
        darkCard[i].style.backgroundColor = "rgb(100, 100, 100)";
        darkCard[i].style.border = "solid rgb(100, 100, 100) 3px";
    }

    var darkFeed = document.getElementsByClassName("feed");
    for(var i=0; i<darkFeed.length; i++){
        darkFeed[i].style.backgroundColor = "rgb(100, 100, 100)";
        darkFeed[i].style.border = "solid rgb(100, 100, 100) 3px";
    }

    var text = document.getElementsByTagName("p");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "white";
    }

    var text = document.getElementsByTagName("h4");
    for(var i=0; i<text.length; i++){
        text[i].style.color = "white";
    }

    var top = document.getElementById("top-btn");
    top.src = "./images/dark top.png";

    document.body.style.background = "rgb(53, 53, 53)";
}

//Hover animation
function mouseIn(btn){
    btn.style.padding = "15px";
    btn.style.backgroundColor = "rgb(255, 156, 27)";
}

function mouseOut(btn){
    btn.style.padding = "10px";
    btn.style.backgroundColor = "white";
}


var toTop = document.getElementById("to-top");
toTop.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.style.display = "block";
    }
    else{
        toTop.style.display = "none";
    }
})