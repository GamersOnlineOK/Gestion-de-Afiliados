class persona{

    
    
    setPersona(id,nombre,apellido,edad,legajo,balance,img,provincias,localidad,causas){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.legajo=legajo;
        this.balance=parseInt(balance);
        this.img=img;
        this.provincias=provincias;
        this.localidad=localidad;
        this.causas=causas
    }
    
    
}

var afiliados = [];
// TRAE LOS DATOS DE afiliados.json Y LOS CARGA AL ARRAY AFILIADOS[]
const urlAfl="../data/afiliados.json";
$.getJSON(urlAfl, 
    function (data,) {
        for (const dato of data) {
            console.log(dato);
        
        let id=dato.id;
        let nombre=dato.nombre;
        let apellido=dato.apellido;
        let edad=dato.edad;
        let legajo=dato.legajo;
        let balance=dato.balance;
        let img=dato.img;
        let provincias=dato.provincias;
        let localidad=dato.localidad;
        let causas=dato.causas;
        afiliado=new persona();
        afiliado.setPersona(id,nombre,apellido,edad,legajo,balance,img,provincias,localidad,causas);
        afiliados.push(afiliado);
        
    
    
    
    }
    }
);

// INICIO DEL CICLO DE VIDA DEL SISTEMA
$(document).ready(function () {
    init();
    fecha();
    
});
// FUNCION PARA MOSTRAR AFILIADOS Y SU ESTRUCTURA DE HTML EN EL DOM
function init(){
    let selector="#template-container";
    $(selector).html(`<div></div>`);
    
    for (const afiliado of afiliados) {
        imprimirListado(afiliado);
    }
   
    recorrerBotones();
    recorrerEliminar();
    totalCausas();
    causas();
    
}
   // CARGAR AFILIADOS
function cargarAfiliado(nombre,apellido,edad,legajo,provincias,localidad,causas) {
        id=afiliados.length+1;
        console.log(id)
        _id=id;
        img="https://robohash.org/"+nombre+"?set=set3";
        afiliado= new persona();
        // TODOS LOS AFILIADOS INICIAN CON UNA DEUDA DE 2499
        afiliado.setPersona(id,nombre,apellido,edad,legajo,-2499,img,provincias,localidad,causas);
        afiliados.push(afiliado);
        console.log(afiliados);
        
        $("#avisoAfl").empty();
        $("#avisoAfl").append(`
        <h6 class="green">Afiliado cargado exitosamente </h6>
        `);
        
        
            
         init();
         

    
}
    

    /* Metodo Imputacion de pagos */
function cargarPago(afil, debe){

    

    
    // var objeto=afiliados.find(elemento=>elemento.legajo==legajo);
    console.log(afil.balance);
    let selector="#template-container";
    $(selector).html(`<div></div>`);

    if(debe>0){

        console.log(afil.nombre);
        deb=parseInt(debe);
        res=afil.balance+deb;
        console.log(res);
        afil.balance=res;
        imprimirListado(afil);
    }
    init();
    
}
    /* Metodo Cierre de Mes */
function cierreMes(){

    const cierre=afiliados.map(persona=>persona.balance-=2499);
    let padre=document.getElementById("notificaciones");   
    padre.innerHTML = '';
    let contenedor=document.createElement("div");
    
    padre.appendChild(contenedor);
    contenedor.innerHTML=`<p class="green">Cierre de Mes realizado Correctamente</p>`;
    console.log(afiliados);
    fadein();
    init();


    
}
    /*Filtra Objetos con balance Negativo */
function filtrarDeudores(){
    console.log("deudores");
    const objeto=afiliados.filter(elemento=>elemento.balance<0);
    let padre=document.getElementById("template-container");
    padre.innerHTML = '';
    for (const afiliado of objeto) {
        console.log(afiliado.nombre);
        imprimirListado(afiliado);
    }
    
    recorrerBotones();
    recorrerEliminar();
    
}
// RECORRE BOTONES PARA SIGNAR CORRECTAMENTE LOS PAGOS
var inputPagos=document.getElementsByClassName("inputPagos");
function recorrerBotones(){
    var botones=document.getElementsByClassName("btn-pago");

    console.log(botones);
    for (boton of botones) {
        console.log(boton);
        boton.onclick = seleccionarAfiliado;
        
        
    }
    
}

//RECORRE LOS BOTONES PARA ELIMINAR CORRECTAMENTE AL AFILIADO
function recorrerEliminar(){
    var botones=document.getElementsByClassName("btn-eliminar");

    console.log(botones);
    for (boton of botones) {
        console.log(boton);
        boton.onclick = seleccionEliminar;
        
        
    }
    
}


// BUSCA AFILIADOS POR NUMERO DE LEGAJO
$("#btnBuscar").click(function (e) { 
    e.preventDefault();
    var legajo = document.getElementById("buscarLegajo").value;
    let afiliado=afiliados.find(elemento=>elemento.legajo==legajo);
    limpiarDom();
    imprimirListado(afiliado);
    recorrerEliminar();
    recorrerBotones();
    
    
    
});
// FUNCION PARA LIMPIAR ELL DOM
function limpiarDom(){
    let selector="#template-container";
    $(selector).html(`<div></div>`);
}
// MUESTRA FECHA ACTUAL
function fecha(){
    const fecha= new Date();
    const mes= fecha.getMonth()+1;
    const dia=fecha.getDate();
    const anio=fecha.getFullYear();
    console.log(mes);
    console.log(dia);
    console.log(anio);
    $("#date").append(`
                    <div>Fecha:${dia}/${mes}/${anio} </div>
    `);     
}


