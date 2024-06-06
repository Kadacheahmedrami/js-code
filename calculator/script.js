

let display = document.getElementById("display");
var pattern =/^[0-9+\-*/().\s]+$/;  
document.querySelectorAll('.butt').forEach(element=> {
    element.addEventListener("click",function(){    

        if(element.innerText == "=")
        {
            if (pattern.test(display.innerText))
            {
                display.innerText = eval(display.innerText);
            }
            else{
                display.innerText = "error"
            }
           
         
        }else
        {

            if(element.innerText != "C" && element.innerText != "AC" )
            {
                display.innerText=  display.innerText + element.innerText
                
            }
            else{
                if( element.innerText == "C")
                {
                    display.innerText = display.innerText.slice(0, -1);
                }
                else{
                    display.innerText= "";
                }
            }

           
        }
   
        
    })

})