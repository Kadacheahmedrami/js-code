let i=1
const tab0 = ["Albert Einstein", "Nelson Mandela", "Marie Curie", "Leonardo da Vinci", "Rosa Parks"];

const tab1 = [
 
    "Imagination is more important than knowledge.",
    "It always seems impossible until it's done.",
    "Nothing in life is to be feared, it is only to be understood.",
    "Simplicity is the ultimate sophistication.",
    "The only tired I was, was tired of giving in."
  ];
  

function next(){

    if(i < tab0.length-1)
    {
    const title = document.getElementById("author")
    const text =  document.getElementById("quote")

    title.innerText=tab0[i];
    i++;
    text.innerText=tab1[i];
    }
    else
    {
    i=0
    }
}
