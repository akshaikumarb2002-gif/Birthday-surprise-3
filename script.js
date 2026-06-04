const memories = [
{
image:"photo1.jpg",
caption:"Vaishnavi ❤️"
},
{
image:"photo2.jpg",
caption:"Vaishuuu ❤️"
},
{
image:"photo1.jpg",
caption:"Dabba ❤️"
},
{
image:"photo4.jpg",
caption:"Vaishnavi ✨"
},
{
image:"photo5.jpg",
caption:"My Favourite Person ❤️"
}
];

let currentMemory = 0;

/* ========================= /
/ PAGE SWITCH /
/ ========================= */

function showPage(pageId){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");

window.scrollTo(0,0);

}

/* ========================= /
/ START MEMORIES /
/ ========================= */

function startMemories(){

showPage("memoryPage");

document.getElementById("memoryClosed").style.display="block";
document.getElementById("memoryOpened").style.display="none";

currentMemory = 0;

}

/* ========================= /
/ OPEN MEMORY /
/ ========================= */

function openMemory(){

document.getElementById("memoryClosed").style.display="none";
document.getElementById("memoryOpened").style.display="block";

loadMemory();

}

/* ========================= /
/ LOAD MEMORY /
/ ========================= */

function loadMemory(){

document.getElementById("memoryTitle").innerText =
"🎁 Memory " + (currentMemory + 1) + " ✨";

document.getElementById("memoryImage").src =
memories[currentMemory].image;

document.getElementById("memoryCaption").innerText =
memories[currentMemory].caption;

}

/* ========================= /
/ NEXT MEMORY /
/ ========================= */

function nextMemory(){

currentMemory++;

if(currentMemory < memories.length){

document.getElementById("memoryClosed").style.display="block";
document.getElementById("memoryOpened").style.display="none";

}else{

showPage("notePage");

document.getElementById("noteClosed").style.display="block";
document.getElementById("noteOpened").style.display="none";

}

}

/* ========================= /
/ OPEN NOTE /
/ ========================= */

function openNote(){

document.getElementById("noteClosed").style.display="none";
document.getElementById("noteOpened").style.display="block";

const message = `Happy Birthday Vaishuuu ❤️

Be happy as always like now.

Edhuvum yosikadha...

Ellam nalla nadakkum.

Apram...

All is well ✨

Once again,

Happy Birthday Dabba ❤️`;

const target =
document.getElementById("typewriter");

target.innerHTML = "";

let i = 0;

const typing = setInterval(()=>{

target.innerHTML += message.charAt(i);

i++;

if(i >= message.length){

clearInterval(typing);

}

},35);

}

/* ========================= /
/ FINAL PAGE /
/ ========================= */

function showFinalPage(){

showPage("finalPage");

const cat =
document.getElementById("cat");

const chick =
document.getElementById("chick");

const heart =
document.getElementById("heart");

const text =
document.getElementById("finalText");

/* RESET */

cat.style.left="-120px";
chick.style.right="-120px";

heart.style.opacity="0";
text.style.opacity="0";

/* WALK */

setTimeout(()=>{

cat.style.left="30%";
chick.style.right="30%";

},300);

/* HEART */

setTimeout(()=>{

heart.style.opacity="1";

},4200);

/* TEXT */

setTimeout(()=>{

text.style.opacity="1";

},5200);

}

/* ========================= /
/ REPLAY /
/ ========================= */

function replayStory(){

currentMemory = 0;

showPage("coverPage");

document.getElementById("memoryClosed").style.display="block";
document.getElementById("memoryOpened").style.display="none";

document.getElementById("noteClosed").style.display="block";
document.getElementById("noteOpened").style.display="none";

document.getElementById("typewriter").innerHTML="";

document.getElementById("memoryTitle").innerText =
"🎁 Memory Surprise ✨";

}

/* ========================= /
/ INITIAL LOAD /
/ ========================= */

window.onload = function(){

showPage("coverPage");

};