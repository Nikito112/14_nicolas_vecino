var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de tu instituto")
console.log(nombre);
console.log(instituto)
//alert(nombre);
document.write("<h1>" + nombre + "</h1>");
document.write("<table border=\"1\">");
document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>");
document.write("</table>");