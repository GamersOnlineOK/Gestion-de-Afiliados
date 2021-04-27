
// RECIBE AFILIADOS DESDE MAIN Y DEVULVE LA ESTRUCTURA
function imprimirListado(afiliado){

     ("ImprimirListado");
    
    let selector="#template-container";
    
    $(selector).prepend(estructuraAfiliados(afiliado));
    
    screenMode();   
}
function imprimirBusqueda(afiliado){

     ("ImprimirBusqueda");

    let selector="#template-container";
    
    $(selector).html(estructuraAfiliados(afiliado));
    screenMode()    
}

function estructuraAfiliados(afiliado){

    
    
        if(afiliado.balance>=0){
        
            let content=` 
            <tr class="table-success">
                <th scope="row">${afiliado.legajo}</th>
                <td>${afiliado.nombre}</td>
                <td>${afiliado.apellido}</td>
                <td>${afiliado.edad}</td>
                <td>${afiliado.causas}</td>
                <td>${afiliado.provincias}<br>${afiliado.localidad}</td>
                <td class="green  align-items-center">${afiliado.balance}</td>
                <td class=" align-items-center"><input class="form-control-sm  inputPagos container-fluid"  type="search" placeholder="$pago" aria-label="Search"></td>
                <td><button class="btn btn-success btn-pago mt-2 mb-2 container-fluid" id="${afiliado.id}" >PAGAR</button></td>
                <td>
                    <a class="btn-eliminar" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    </a>
                </td>
            </tr>
        `;

            return content;
            
        }
        else if(afiliado.balance<0){
            
           let content=`
           <tr class="table-danger">
                <th scope="row">${afiliado.legajo}</th>
                <td>${afiliado.nombre}</td>
                <td>${afiliado.apellido}</td>
                <td>${afiliado.edad}</td>
                <td>${afiliado.causas}</td>
                <td>${afiliado.provincias}<br>${afiliado.localidad}</td>
                <td class="red">${afiliado.balance}</td>
                <td><input class="form-control-sm  inputPagos container-fluid"  type="search" placeholder="$pago" aria-label="Search"></td>
                <td><button class="btn btn-success btn-pago mt-2 mb-2 container-fluid" id="${afiliado.id}" >PAGAR</button></td>
                <td><a class="btn-eliminar" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg></a></td>
                
            </tr>
            
       
       `;
       return content;
        }
}
// ENCUENTRA EL OBJETO CORRESPONDIENTE AL BOTON Y EL VALOR DEL INPUT.
// LO ENVIA A CARGAR PAGO
function seleccionarAfiliado(e){
                                prueba= this.id;
                                var parent=this.parentNode.parentNode.childNodes[15].childNodes[0];
                                console.log(parent);
                                var child=this.parentNode.childNodes[0];
                                var pago=this.parentNode.parentNode.childNodes[15].childNodes[0].value;                                
                                var selecionAfiliado=afiliados.find(function(e){
                                    return e.id==prueba;
                                });                                
                                var afil=selecionAfiliado;
                                cargarPago(afil,pago);
}
// ENCUENTRA EL OBJETO CORRESPONDIENTE PARA SER ELIMINADO
function seleccionEliminar(e){
    // btn= this.id;
     ("BotonEliminar");
    btn=this.parentNode.parentNode.childNodes[11].childNodes[0].id;
     (btn);
    var selecionAfiliado=afiliados.find(function(e){
        return e.id==btn;
    });
     (selecionAfiliado);
    var afil=selecionAfiliado;
    var i = afiliados.indexOf( afil );
    afiliados.splice( i, 1 );
    // afiliados.splice(afil);
    init();
}




