$(".ship").click(function() {
    $(".secretwords1").text("Welcome aboard cap'n! Double click this text to begin the voyage!");
    $(".ship").attr("src", "https://vignette.wikia.nocookie.net/scrooge-mcduck/images/b/b8/HookCrew.jpeg/revision/latest?cb=20180107111334");
});

$(".secretwords1").dblclick(function() {
    $(".ship").fadeOut();
    $(".looker").fadeIn();
    $(".secretwords1").text("Captain, click over here, I see something coming up on the horizon...");
});

$(".looker").click(function()  {
    $(".looker").delay(2000).fadeOut();
    $(".seamon").delay(1500).fadeIn();
    $(".secretwords1").delay(2000).fadeOut();
    setTimeout(function() {
    $("body").css("background-color", "red");
    },2000);
});

$(".seamon").dblclick(function() {
    $("body").css("background-color", "white");
    $(".secretwords1").text("We did it! The sea monster's treasure! Let's click to open it!"); 
    $(".secretwords1").delay(1100).fadeIn();
    $(".seamon").delay(1000).fadeOut();
    $(".chest").delay(1100).show();
});

$(".chest").click(function() {
    $(".chest").attr("src", "https://atlas-content-cdn.pixelsquid.com/stock-images/old-wooden-chest-n1Kmx4F-600.jpg");
    $(".secretwords1").delay(1000).fadeOut();
    $("h1").delay(1000).fadeOut();
    $(".chest").delay(1000).fadeOut();
    $(".treasure").delay(1500).fadeIn();
    $(".ending").delay(1500).fadeIn();
});
