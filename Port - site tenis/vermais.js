function verMais() {
    var showcaseElements = document.getElementsByClassName("showcasey");
    
    for (var i = 0; i < showcaseElements.length; i++) {
        showcaseElements[i].style.display = "block";
    }
    
    document.getElementById("vmais").style.display = "none";
}
