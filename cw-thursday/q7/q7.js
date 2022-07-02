// adding style to body by using yquery
$("body").css({
    "display":"flex",
    "flex-direction":"column",
    "align-items":"center",
    "padding":"20px 0"
})

let count=0 
$("form").on("submit",validation)

function validation(e){
    e.preventDefault()
    $("input").each(function(){
        if(!$(this).val()){
            count++
            $(this).css("border","1px solid red")

        }
    })
    
        if(count!==0){
        $("#result").text(`you must fill ${count} empty boxes`)
            return false
        
    }
        else{
            $("input").css("border","1px solid black")
            $("#result").text(`submit is done succesfully`)
            
            return true
            
        }


}

