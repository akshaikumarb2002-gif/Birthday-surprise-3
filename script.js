// ALL PAGES
const pages = document.querySelectorAll(".page");

let currentPage = 0;

// BUTTONS
const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");

// SPECIAL NOTE
const birthdayMessage = `Happy Birthday Vaishuuu ❤️

Be happy as always like now.

Edhuvum yosikadha...

Ellam nalla nadakkum.

Apram...

All is well ✨

Once again,

Happy Birthday Dabba ❤️`;

let typingStarted = false;
let finalStarted = false;

// SHOW PAGE
function showPage(index){

pages.forEach(page=>{
page.classList.remove("active");
});

pages[index].classList.add("active");

if(index === 6){
startTypewriter();
}

if(index === 7){
startFinalAnimation();
}

}

// OPEN STORY
if(openBtn){

openBtn.addEventListener("click",()=>{

currentPage = 1;

showPage(currentPage);

});

}

// NEXT BUTTONS
document.querySelectorAll(".next-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

if(currentPage < pages.length - 1){

currentPage++;

showPage(currentPage);

}

});

});

// TYPEWRITER EFFECT
function startTypewriter(){

if(typingStarted) return;

typingStarted = true;

const target = document.getElementById("typewriter");

target.innerHTML = "";

let i = 0;

function type(){

if(i < birthdayMessage.length){

target.innerHTML += birthdayMessage.charAt(i);

i++;

setTimeout(type,45);

}

}

type();

}

// FINAL ANIMATION
function startFinalAnimation(){

if(finalStarted) return;

finalStarted = true;

const cat = document.getElementById("cat");
const chick = document.getElementById("chick");
const finalMessage = document.getElementById("finalMessage");

let catPos = -250;
let chickPos = -250;

const catWalk = setInterval(()=>{

catPos += 5;

cat.style.left = catPos + "px";

if(catPos >= window.innerWidth / 2 - 140){

clearInterval(catWalk);

}

},20);

const chickWalk = setInterval(()=>{

chickPos += 5;

chick.style.right = chickPos + "px";

if(chickPos >= window.innerWidth / 2 - 140){

clearInterval(chickWalk);

}

},20);

setTimeout(()=>{

finalMessage.style.opacity = "1";

},3500);

}

// REPLAY
if(replayBtn){

replayBtn.addEventListener("click",()=>{

typingStarted = false;
finalStarted = false;

const target = document.getElementById("typewriter");

if(target){
target.innerHTML = "";
}

document.getElementById("finalMessage").style.opacity = "0";

document.getElementById("cat").style.left = "-250px";

document.getElementById("chick").style.right = "-250px";

currentPage = 0;

showPage(currentPage);

});

}

// KEYBOARD SUPPORT
document.addEventListener("keydown",(e)=>{

if(e.key === "ArrowRight"){

if(currentPage < pages.length - 1){

currentPage++;

showPage(currentPage);

}

}

});

// INITIAL PAGE
showPage(0);