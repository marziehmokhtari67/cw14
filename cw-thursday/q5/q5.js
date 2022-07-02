$("#parent").click(function(){
    $(this).children().text("Hello")
   
    })
$("#parent .child").each(function(){
    $(this).dblclick(()=>{
        $(this).text("Goodbye")
    })
})
   
        
    
