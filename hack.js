let c=21600;

setInterval(()=>{
    $("#hour").text(Math.floor(c/3600));
    $("#min").text(Math.floor((c%3600)/60));
    $("#sec").text(Math.floor(c%60));
    c-=1
},1000)

$("#device").text(platform.description);