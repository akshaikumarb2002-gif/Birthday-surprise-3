// ===============================
// MEMORY DATA
// ===============================

const memories = [
{
title:"🐱 A little memory ✨",
image:"photo1.jpg",
caption:"Vaishnavi ❤️"
},
{
title:"🐥 Another special moment ✨",
image:"photo2.jpg",
caption:"Vaishuuu ❤️"
},
{
title:"🐱 This one makes me smile ❤️",
image:"photo3.jpg",
caption:"Dabba ❤️"
},
{
title:"🐥 A moment worth keeping 🌙",
image:"photo4.jpg",
caption:"Vaishnavi ✨"
},
{
title:"🐱 My Favourite Surprise ✨",
image:"photo5.jpg",
caption:"My Favourite Person ❤️"
}
];

// ===============================
// ELEMENTS
// ===============================

const coverPage = document.getElementById("coverPage");
const memoryPage = document.getElementById("memoryPage");
const notePage = document.getElementById("notePage");
const finalPage = document.getElementById("finalPage");

const memoryTitle = document.getElementById("memoryTitle");
const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");

const memoryClosed = document.getElementById("memoryClosed");
const memoryOpened = document.getElementById("memoryOpened");

const noteClosed = document.getElementById("noteClosed");
const noteOpened = document.getElementById("noteOpened");

const typewriter = document.getElementById("typewriter");

// ===============================
// STATE
// ===============================

let currentMemory = 0;
let typingStarted = false;

// ===============================
// START STORY
// ===============================

function startMemories(){

coverPage.classList.remove("active");
memoryPage.classList.add("active");

currentMemory = 0;

loadMemory();

}

// ===============================
// LOAD MEMORY
// ===============================

function loadMemory(){

memoryClosed.style.display = "block";
memoryOpened.style.display = "none";

memoryTitle.innerHTML =
memories[currentMemory].title;

memoryImage.src =
memories[currentMemory].image;

memoryCaption.innerHTML =
memories[currentMemory].caption;

}

// ===============================
// OPEN MEMORY
// ===============================

function openMemory(){

memoryClosed.style.display = "none";
memoryOpened.style.display = "block";

}

// ===============================
// NEXT MEMORY
// ===============================

function nextMemory(){

currentMemory++;

if(currentMemory < memories.length){

loadMemory();

}else{

memoryPage.classList.remove("active");
notePage.classList.add("active");

}

}

// ===============================
// OPEN NOTE
// ===============================

function openNote(){

noteClosed.style.display = "none";
noteOpened.style.display = "block";

startTypewriter();

}

// ===============================
// TYPEWRITER
// ===============================

function startTypewriter(){

if(typingStarted) return;

typingStarted = true;

const message = `Happy Birthday Vaishuuu ❤️

Be happy as always like now.

Edhuvum yosikadha...

Ellam nalla nadakkum.

Apram...

All is well ✨

Once again,

Happy Birthday Dabba ❤️`;

typewriter.innerHTML = "";

let i = 0;

function type(){

if(i < message.length){

typewriter.innerHTML += message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}

// ===============================
// FINAL PAGE
// ===============================

function showFinalPage(){

notePage.classList.remove("active");
finalPage.classList.add("active");

const heart =
document.getElementById("heart");

const finalText =
document.getElementById("finalText");

setTimeout(()=>{

heart.style.opacity = "1";

},5000);

setTimeout(()=>{

finalText.style.opacity = "1";

},6000);

}

// ===============================
// REPLAY STORY
// ===============================

function replayStory(){

typingStarted = false;

typewriter.innerHTML = "";

coverPage.classList.add("active");

memoryPage.classList.remove("active");
notePage.classList.remove("active");
finalPage.classList.remove("active");

memoryClosed.style.display = "block";
memoryOpened.style.display = "none";

noteClosed.style.display = "block";
noteOpened.style.display = "none";

currentMemory = 0;

loadMemory();

window.scrollTo(0,0);

}

// ===============================
// EXPOSE FUNCTIONS
// ===============================

window.startMemories = startMemories;
window.openMemory = openMemory;
window.nextMemory = nextMemory;
window.openNote = openNote;
window.showFinalPage = showFinalPage;
window.replayStory = replayStory;