var prova = document.querySelector("#play-js");

prova.addEventListener("click", function () {
    document.querySelector(".play-progress").style.width = "100%";
    document.getElementById("play-js").classList.toggle('fa-circle-play');
    document.getElementById("play-js").classList.toggle('fa-circle-pause');
});