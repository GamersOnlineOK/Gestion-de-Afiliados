function fadein(){
    $("#notificaciones").slideDown(600).delay(600).slideUp(600);
    
}
$("a").click(function (e) { 
    e.preventDefault();
    $("#template-container").fadeOut(0).fadeIn(800);
    
});
$("#btn-form").on("click", function () {
   $("#avisoAfl").fadeIn(2000).delay(1000).fadeOut(2000); 
});


