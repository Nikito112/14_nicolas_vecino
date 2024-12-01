function cambiarColor() {

    var div = document.getElementById('color_div');

    var divColor = div.style.backgroundColor;

    if( divColor == "black") {
        div.style.backgroundColor = "pink";
    }
    else if( divColor == "pink"){
        div.style.backgroundColor = "blue"
    }
    else {
        div.style.backgroundColor = "black";
    }
}


color_div.onmouseleave = () => {
    color_div.innerHTML += "Adios!";
}


color_div.onmouseenter = () => {
    color_div.innerHTML += "Hola!";
}