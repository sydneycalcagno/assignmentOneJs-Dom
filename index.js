document.getElementById("oneMore").style.display = "block";
document.getElementById("oneMore").style.display = "none";
document.getElementById("growSome").addEventListener("click", growOne);


document.getElementById("seed").style.display = "block";
document.getElementById("leaf").style.display = "none";
document.getElementById("flowerR").style.display = "none";
document.getElementById("hovering").style.display = "none";

function growOne(){
    document.getElementById("seed").style.display = "none";
    document.getElementById("leaf").style.display = "block";

    document.getElementById("growSome").style.display = "none";
    document.getElementById("oneMore").style.display = "block";
    document.getElementById("oneMore").addEventListener("click", growTwo);
}

function growTwo(){
    document.getElementById("hovering").style.display = "block";
    document.getElementById("leaf").style.display = "none";
    document.getElementById("flowerR").style.display = "block";

    document.getElementById("growSome").style.display = "none";
    document.getElementById("oneMore").style.display = "none";
}

document.getElementById("flowerR").addEventListener("mouseover", colors);

function colors(){
    document.body.style.backgroundColor = "lightblue";
}