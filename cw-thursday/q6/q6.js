$(document).ready(function () {
$("table tr:even").css(
    "background-color","rgb(51, 230, 255)"
)
$("table tr:odd").css(
    "background-color","rgb(124,252,0)"
)
$("table tr").hover(function(){
    $(this).css("background-color","rgb(200,0,50)")},
    function(){
        $.each($("table tr"),function(index,item){
            if(index%2===0){
                $(this).css("background-color","rgb(51, 230, 255)")
            }
            else{
                $(this).css("background-color","rgb(124,252,0)") 
            }
        })
})
})


    

