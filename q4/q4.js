$(document).ready(function () {

    $(".multiple-elements").each(function(){
        $(this).css("background-color" , $(this).data("bgcol"));
    })

})