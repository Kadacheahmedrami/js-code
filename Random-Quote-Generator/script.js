


function genrate(){

    fetch('https://api.quotable.io/quotes/random'



)

.then( res  => {
    if(res.ok)
    {
        console.log("success");
        return res.json()
    }
    else{
        console.log("not secusssfull")
    }
})
.then(data => {


   document.getElementById('author').innerText=data[0].author,
   document.querySelector(".content").innerText=data[0].content
}

   

)
.catch(eroor => console.log( "error"))
    
    
}
genrate()


document.querySelector(".button").addEventListener("click", function(){
    genrate();
})
