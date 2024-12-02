function cambiarColor() {

    var div = document.getElementById('color_div');

    var divColor = div.style.backgroundColor;

    if( divColor == "gray") {
        div.style.backgroundColor = "pink";
    }
    else if( divColor == "pink"){
        div.style.backgroundColor = "blue"
    }
    else {
        div.style.backgroundColor = "gray";
    }
}


color_div.onmouseleave = () => {
    color_div.innerHTML += "Adios!";
}


color_div.onmouseenter = () => {
    color_div.innerHTML += "Hola!";
}