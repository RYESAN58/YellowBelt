function image(){  
    document.getElementById('main-pic').src = "images/pixel-ninjas-2.png"

}
function image2(){
    document.getElementById('main-pic').src = "images/stonepunk.png"
}

let y = 0;
function cart(){
    y++;
    document.getElementById('number').innerText = y;
    return y
}

function warning(){
    window.alert("This game is supported on Linux");
}