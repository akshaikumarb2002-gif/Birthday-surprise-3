const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click",()=>{

document.getElementById("welcome-screen").style.opacity="0";

setTimeout(()=>{

document.getElementById("welcome-screen").style.display="none";

document.getElementById("birthday-screen").style.display="block";

},800);

});

function reveal(card){

let img = card.querySelector("img");
let text = card.querySelector("span");
let tap = card.querySelector("p");

img.style.display="block";
text.style.display="block";
tap.style.display="none";

}
