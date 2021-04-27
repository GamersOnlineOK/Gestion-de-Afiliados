 ("calculadora");
// CALCULO LA DEUDA TOTAL ENTRE LOS AFILIADOS QUE POSEEN DEDUDA
function causas(){
var total=0;
var balance=0;
    for (const afl of afiliados) {
        if (afl.balance<0) {
             (afl);
                control=parseInt(afl.balance);
                 (control);
                 (afl.nombre);
                balance-=control;
                total=balance*-1;
                 (total);
        } 
    }
    estadisticasDeudas(total);
}
// IMPRIMO TOTAL DE DEUDAS
function estadisticasDeudas(total){

    if (total<0) {
        $("#deudas").empty();
    $("#deudas").append(`
    
    <h5 class="red">${total}</h5>
    
    
    `);
    }else {
        $("#deudas").empty();
        $("#deudas").append(`
        <h5 class="green">Cero</h5>
        `)
    }
    
}
// CALCULO LAS CANTIDAD DE CAUSAS POR CADA TIPO
function totalCausas(){
    var admin=0;
    var sans=0;
    var penal=0;
    var familia=0;
    for (const afl of afiliados) {        
         (afl.causas);
        if (afl.causas=="sanciones") {
            admin++;
        }else if (afl.causas=="Administrativo") {
            sans++;
        }
        else if  (afl.causas=="Penal") {
            penal++;
        }
        else if (afl.causas=="Familia") {
            familia++;
        }
    }
    conAdmin(admin,sans,penal,familia);
}
// CALCULO EL PORCENTAJE QUE REPRESENTA CADA TIPO DE CAUSA Y LO MUESTRO
function conAdmin(admin,sans,penal,familia){

    const total=admin+sans+penal+familia;
    
    const resAdmin=Math.round(admin*100/total);
    const resSans=Math.round(sans*100/total);
    const resPenal=Math.round(penal*100/total);
    const resFamilia=Math.round(familia*100/total);
    
    
    $("#causaAdmin").empty();
    $("#causaAdmin").append(`
    
    <div class="m-2 "><h5>Sanciones: ${admin}</h5>
        <div class="progress" style="height: 25px;">
            <div class="progress-bar bg-success p-2" role="progressbar" style="width: ${resAdmin}%" aria-valuenow="${resAdmin}" aria-valuemin="0" aria-valuemax="100">${resAdmin}%</div>
        </div>
    </div>
    <div class="m-2">
        <h5 class="text-dark" >Administrativa: ${sans} </h5>
        <div class="progress" style="height: 25px;">
            <div class="progress-bar bg-info" role="progressbar" style="width: ${resSans}%" aria-valuenow="${resSans}" aria-valuemin="0" aria-valuemax="100">${resSans}%</div>
        </div>
    </div>
    <div class="m-2">
        <h5>Penal: ${penal}</h5>
        <div class="progress" style="height: 25px;">
            <div class="progress-bar bg-warning" role="progressbar" style="width: ${resPenal}%" aria-valuenow="${resPenal}" aria-valuemin="0" aria-valuemax="100">${resPenal}%</div>
        </div>
    </div>
    <div class="m-2">
        <h5>Familia: ${familia}</h5>
        <div class="progress" style="height: 25px;">
            <div class="progress-bar bg-danger" role="progressbar" style="width: ${resFamilia}%" aria-valuenow="${resFamilia}" aria-valuemin="0" aria-valuemax="100">${resFamilia}%</div>
        </div>
    </div>
`);
}

