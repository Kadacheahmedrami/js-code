


let BT = document.getElementById('btn')

let text = document.getElementById('content')

BT.addEventListener('click', function(){


if(text.style.display==='flex')
{ 
  text.style.display='none';
  BT.innerText='show'
}
else 
{ 
  
  BT.innerText='hide'
  text.style.display='flex';

}

})