let registrosHTML = document.getElementById("registrosHTML");
let arrayRegistros = [];
//Comicación con el servidor
async function leeRegistros(){
    const respuesta = await fetch("http://jonathan-melendez777.signsle4u.xyz/ip-cliente.php");
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
    registrosHTML.innerHTML = registrosHTML.innerHTML + "IP: "+ arrayRegistros.ip + 
    "<br> " + "Pais: " + arrayRegistros.pais + "<br>";    
}
muestraRegistros();