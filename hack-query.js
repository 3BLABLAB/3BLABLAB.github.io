$(function(){
    $("tr:nth-child(even)").addClass("even");
    $("#button").click(function(){
        $("progress").removeClass("pro");
    });
    $(".button").click(function(){
        $("a").removeClass("hide");
    });
})