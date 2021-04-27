
// RECOLECTO LOS DATOS Y LOS ENVIO A CARGAR AFILIADO PARA CONSTRUR EL OBJETO
function procesarDatos(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var legajo = document.getElementById('legajo').value;
    var provincias = document.getElementById('provincias').value;
    var localidad=document.getElementById('localidades').value;
    var causas=document.getElementById('OpCausa').value;
    
     (nombre);
     (apellido);
     (edad);
     (legajo);
     (provincias);
     (localidad);
     (causas);

    cargarAfiliado(nombre,apellido,edad,legajo,provincias,localidad,causas);
    
}$("#btn-Form").click(function (e) { 
    e.preventDefault();
    
});