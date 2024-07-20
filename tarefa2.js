function alteraElementosP() {
    var ElementosP = document.getElementsByTagName("p");
    for (var i = 0; i < ElementosP.length; i++) {
        ElementosP[i].textContent = "Texto alterado";
    }
}

alteraElementosP()
