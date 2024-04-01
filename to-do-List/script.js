

let In = document.getElementById('input');
let Pl = document.getElementById('plus');
let main = document.getElementById('Container');



function add()
{
  let element = document.createElement('div');

  let Im = document.createElement('img');
  Im.src='pics/minus.svg';
  Im.classList.add("minus");
  let text = document.createElement('p');
  text.innerText= In.value
  
  element.appendChild(text);
  element.appendChild(Im);

  element.classList.add("content");
  main.appendChild(element);
  Im.addEventListener('click', function(e) {
    let target = e.target;
    target.parentElement.remove();
  });

}


Pl.addEventListener('click',function(){

  if(In.value !== '')
  {
    add()
    In.value='';
  }




})


