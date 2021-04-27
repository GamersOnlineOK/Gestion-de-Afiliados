    /* Inicio Validaciones de Ingreaso de Datos */
    function validarNombre(){
        
        if(nombre.length>=3){
            validarApellido(nombre);
        }
        else{
            
            validarNombre();
            
        }
    }
    function validarApellido(){
        
        if(apellido.length>=3){
             (nombre,apellido);
            validarEdad(nombre,apellido);
        }
        else{
            
            validarApellido();
            
        }
    }
    function validarEdad(nombre,apellido){
        
        
        if((edad>=18)&&(edad<150)){
             (nombre,apellido,edad);
            validarLegajo(nombre,apellido,edad);
        }
        else{
            
            validarEdad(nombre,apellido);
            
        }
    }
    function validarLegajo(nombre,apellido,edad){
        
        
        if(legajo.length==6){
            // id=afiliados.length+1;
            //  (id)
            // _id=id;
             (nombre,apellido,edad,legajo);
            cargarAfiliado(nombre,apellido,edad,legajo);
            
            
        }
        else{
            
            validarLegajo(nombre,apellido,edad);
            
        }
    }
        /* Fin Validaciones de Ingreaso de Datos */