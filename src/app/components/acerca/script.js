 
document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").innerHTML);
    console.log("hola perro");
    console.log(document.getElementById("texto").innerHTML);
});
 
function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}