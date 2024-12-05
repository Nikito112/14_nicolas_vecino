function cambiarColor() {

    var div = document.getElementById('color_div');

    var divColor = div.style.backgroundColor;

    if( divColor == "gray") {
        div.style.backgroundColor = "pink";
    }
    else if( divColor == "pink"){
        div.style.backgroundColor = "blue";
        div.style.color = "white";

    }
    else {
        div.style.backgroundColor = "gray";
        div.style.color = "black"
    }
}


color_div.onmouseleave = () => {
    color_div.innerHTML += "Adios!";
}


color_div.onmouseenter = () => {
    color_div.innerHTML += "Hola!";
}