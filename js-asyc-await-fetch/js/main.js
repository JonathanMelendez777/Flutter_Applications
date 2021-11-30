let registrosHTML = document.getElementById("registrosHTML");
let arrayRegistros = [];
//Comicación con el servidor
async function leeRegistros(){
    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();
    return registros;
}
async function muestraRegistros(){
    try{
        arrayRegistros = await leeRegistros();
    } 
    catch (error){
        console.log("Error generado: " + e);
    }
    console.log (arrayRegistros);
    arrayRegistros.forEach(function(item, index) {
        registrosHTML.innerHTML = registrosHTML.innerHTML + item.nombre + " " + item.apellido + "-->" + item.telefono + "<br>";    
    });  
}

muestraRegistros();