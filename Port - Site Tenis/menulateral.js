// Função para abrir o menu

function openNav() {
    document.getElementById("barralat").style.left = "0";
    document.getElementsByClassName("openbtn")[0].style.display = "none";
    document.getElementsByClassName("closebtn")[0].style.display = "block";
}

// Função para fechar o menu

function closeNav() {
    document.getElementById("barralat").style.left = "-10vw";
    document.getElementsByClassName("openbtn")[0].style.display = "block";
    document.getElementsByClassName("closebtn")[0].style.display = "none";
}