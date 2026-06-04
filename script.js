function showFinalPage(){

showPage("finalPage");

const cat = document.getElementById("cat");
const chick = document.getElementById("chick");
const heart = document.getElementById("heart");
const text = document.getElementById("finalText");

cat.style.left="-100px";
chick.style.right="-100px";

heart.style.opacity="0";
text.style.opacity="0";

setTimeout(()=>{

cat.style.left="40%";
chick.style.right="40%";

},100);

setTimeout(()=>{

heart.style.opacity="1";

},4000);

setTimeout(()=>{

text.style.opacity="1";

},5000);
}