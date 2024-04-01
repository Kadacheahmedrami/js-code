function prime(a)
{
if( !isNaN(a))
{
    let st;
    let i=2;
    let prime=true;

    if(a===0 || a===1 ){
        st = a+ " is not a pramary number"
    }
    else
    {
    while(i <= a/2 && prime){




    if(a%i == 0){
        prime=false
    }
    else{
        i++;
    }



    }

    if(prime)
    {
        st = a +" is primary number"
    }
    else {
        st = a+ " is not a pramary number"
    }

    }
return st
}
else
{
    return ''
}
}





function test()
{
let x = document.getElementById("enter").value;

x=parseInt(x);

st=prime(x);

let header = document.getElementById("contentContainer");


header.textContent = st;



}
document.getElementById("enter").addEventListener("input", test);
