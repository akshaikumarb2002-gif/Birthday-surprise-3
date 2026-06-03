let currentPage = 0;

const pages = document.querySelectorAll(".page");

const birthdayMessage = `Happy Birthday Vaishuuu ❤️

Be happy as always like now.

Edhuvum yosikadha...

Ellam nalla nadakkum.

Apram...

All is well ✨

Once again,

Happy Birthday Dabba ❤️`;

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

function openStory(){

currentPage = 1;

showPage(currentPage);

}

function nextPage(){

if(currentPage < pages.length - 1){

currentPage++;

showPage(currentPage);

}

}

/* TYPEWRITER */

let typingStarted = false;

function startTypewriter(){

if(typingStarted) return;

typingStarted = true;

const target = document.getElementById("typewriter");

let i = 0;

function type(){

if(i < birthdayMessage.length){

target.innerHTML += birthdayMessage.charAt(i);

i++;

setTimeout(type,50);

}

}

type();

}

/* FINAL ANIMATION */

let finalStarted = false;

function startFinalAnimation(){

if(finalStarted) return;

finalStarted = true;

const cat = document.getElementById("cat");
const chick = document.getElementById("chick");
const message = document.getElementById("final-message");

let catPos = -200;
let chickPos = -200;

const catWalk = setInterval(()=>{

catPos += 5;

cat.style.left = catPos + "px";

if(catPos >= window.innerWidth / 2 - 130){

clearInterval(catWalk);

}

},20);

const chickWalk = setInterval(()=>{

chickPos += 5;

chick.style.right = chickPos + "px";

if(chickPos >= window.innerWidth / 2 - 120){

clearInterval(chickWalk);

}

},20);

setTimeout(()=>{

message.style.opacity = "1";

},3500);

}

/* ENTER KEY SUPPORT */

document.addEventListener("keydown",(e)=>{

if(e.key === "ArrowRight"){

nextPage();

}

});
