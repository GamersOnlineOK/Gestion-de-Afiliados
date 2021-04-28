// TRAE PROVINCIAS PROVINCIAS
// API NACION
    // VARIABLES
    const URL="https://gamersonlineok.github.io/Gestor-de-Afiliados/data/tipoCausa.json";
    const url= "https://apis.datos.gob.ar/georef/api/provincias";
    // TRAE PROVINCIAS DEDE API GEOREF
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (response) {
            let res= response.provincias;
             (response.provincias[0].id);
            for (const prov of res) {
                 (prov.nombre);
                $("#provincias").append(`
    
                <option id="localidad" value="${prov.nombre}">${prov.nombre}</option>
    
                `);
                
    
            }
        }
    });
    // TRAE LOCALIDADES A PARTIR DE LA SELECCION DE PROVINCIAS
    $("#localidades").focus(function (e) { 
        e.preventDefault();
        var provincias = document.getElementById('provincias').value;
        const url2= "https://apis.datos.gob.ar/georef/api/departamentos?provincia=";
        const urlloc=url2+provincias+"&max=130";
         (provincias);
         (urlloc);
        $.ajax({
            type: "GET",
            url: urlloc,
            
            dataType: "json",
            success: function (response) {
                let res= response.departamentos;
                //  (res);
                $("#localidades").empty(``);
                for (const prov of res) {
                    //  (prov.nombre);
                    $("#localidades").append(`
    
                    <option value="${prov.nombre}">${prov.nombre}</option>
    
                    `);
                    
    
                }
            }
        });
        
    });

    // TRAER TIPOS DE CAUSA
        $.ajax({
        type: "GET",
        url: URL,
        dataType: "json",
        success: function (response) {
             (response);
            for (const causa of response) {
                 (causa.nombre);
                 (causa.descr.descripcion);
                $("#OpCausa").append(`
                <option id="${causa.id}" value="${causa.nombre}">${causa.nombre}</option>
                `);
            }
        }
    });
