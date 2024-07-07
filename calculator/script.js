

let display = document.getElementById("display");

var pattern =/^[0-9+\-*/().\s]+$/;  
document.querySelectorAll('.butt').forEach(element=> {
    element.addEventListener("click",function(){    
        
        if(element.innerText == "=")
        {
            if (pattern.test(display.value))
            {
                display.value = eval(display.value);
            
                
            }

            else{
                display.value = "error"
            }
           
         
        }else
        {

            if(element.innerText != "C" && element.innerText != "AC" )
            {
                display.value=  display.value + element.innerText
                
            }
            else{
                if( element.innerText == "C")
                {
                    display.value = display.value.slice(0, -1);
                }
                else{
                    display.value= "";
                }
            }

           
        }
   
        
    })

})

display.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (pattern.test(display.value))
        {
            display.value = eval(display.value);
        
            
        }

        else{
            display.value = "error"
        }
    }
});