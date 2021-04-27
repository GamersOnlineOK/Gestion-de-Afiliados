$("#d-mode").on("click", function (e) {
    e.preventDefault(e);
    localStorage.setItem("ScreenMode","0");
    

    screenMode();
    
});

$("#l-mode").on("click", function (e) {
    e.preventDefault(e);
    localStorage.setItem("ScreenMode","1");
    

    screenMode();
    
});

function screenMode(){
    var scMode = localStorage.getItem("ScreenMode");
     (scMode);
    if (scMode==0) {

    $("h1").animate({margin:'5rem',marginLeft:'15rem'},"slow",reload);

     $("#grid").css("background-color", "#000000");
     $("#grid-aside").addClass("bg-dark");
     $("#menu").removeClass("navbar-light");
     $("#menu").addClass("navbar-dark");
     $("#menu").addClass("bg-dark");
     $("#ban").css({"background-image":"url(../img/starwars-canon-banner.jpg)","background-repeat": "no-repeat","background-size" :"cover","background-position": "center center","height":"20vh","color":"white"});
    
    $(".card").css("background-color", "#2E4053");
    $(".card").css("color", "#FBFCFC");
    $(".red").css("color", "#9B59B6");
    $("#d-mode").css("display", "none");
    $("#l-mode").css("display", "contents");
        
    }
    else{
        $("h1").animate({margin:'5rem',marginLeft:'15rem'},"slow",reload);
    $("#grid").css("background-color", "#FFFFFF");
    $("#ban").css({"background-image":"url(../img/8400eb0a2dc91df8f7dcd4a43f54d59c.jpg)","background-repeat": "no-repeat","background-size" :"cover","background-position": "center center","height":"20vh","color":"white"});
    $("#grid-aside").removeClass("bg-dark");
    $("#grid-aside").addClass("bg-light");
    $("#menu").removeClass("navbar-dark");
    $("#menu").removeClass("bg-dark");
    $("#menu").addClass("navbar-light");
    $("#menu").addClass("bg-light");
    $(".card").css("background-color", "#F2F3F4");
    $(".card").css("color", "#000000");
    $(".red").css("color", "red");
    $("#l-mode").css("display", "none");
    $("#d-mode").css("display", "contents");
    }
}

function reload(){
    $("h1").animate({marginLeft:'0rem',fontSize:'2em'},"slow",load).delay(200);
}
function load(){
    $("h1").animate({margin:'0rem'},"slow",interload).delay(200);
}
function interload(){
    $("h1").animate({margin:'5rem',marginLeft:'15rem',fontSize:'0em'},"slow",reload).delay(200);
}