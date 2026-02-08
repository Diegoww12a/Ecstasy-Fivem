import './style.css'



const botao = document.getElementById("botao");
const side = document.getElementById("side");

botao.addEventListener("click", () => {
    side.classList.toggle("hidden")
    
})

const video = document.getElementById("video");

video.src = "/cheat.mp4";
video.autoplay = true;
video.muted = true;      // obrigatório pra autoplay
video.loop = true;
video.playsInline = true;
video.controls = false; // tira tudo


const play = document.getElementById("play")

play.src = "/video-loop.webm"
play.autoplay = true;
play.muted = true;
play.loop = true;
play.playsInline = true;
play.controls = false;



document.querySelectorAll(".faq-btn").forEach(bt => {
    bt.addEventListener("click", () => {
        const conteudo = bt.nextElementSibling;
        conteudo.classList.toggle("max-h-40")
        conteudo.classList.toggle("max-h-0");
        const icon = bt.querySelector("span");
        icon.classList.toggle("rotate-45")
    })
})