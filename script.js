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
image:"photo3.jpg",
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

function showPage(pageId){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active");
});

document.getElementById(pageId).classList.add("active");
}

function startMemories(){

showPage("memoryPage");

document.getElementById("memoryClosed").style.display="block";
document.getElementById("memoryOpened").style.display="none";
}

function openMemory(){

document.getElementById("memoryClosed").style.display="none";
document.getElementById("memoryOpened").style.display="block";

currentMemory=0;
loadMemory();
}

function loadMemory(){

document.getElementById("memoryImage").src =
memories[currentMemory].image;

document.getElementById("memoryCaption").innerText =
memories[currentMemory].caption;
}

function nextMemory(){

currentMemory++;

if(currentMemory < memories.length){

loadMemory();

}else{

showPage("notePage");

document.getElementById("noteClosed").style.display="block";
document.getElementById("noteOpened").style.display="none";
}
}

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

target.innerHTML="";

let i=0;

const typing = setInterval(()=>{

target.innerHTML += message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typing);
}

},35);
}

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

cat.style.left="-120px";
chick.style.right="-120px";

heart.style.opacity="0";
text.style.opacity="0";

setTimeout(()=>{

cat.style.left="38%";
chick.style.right="38%";

},100);

setTimeout(()=>{

heart.style.opacity="1";

},4000);

setTimeout(()=>{

text.style.opacity="1";

},5000);
}

function replayStory(){

currentMemory=0;

showPage("coverPage");
}