const sizeControl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

const changeSize =(event)=>{
    
    outputText.style.fontSize = `${event.currentTarget.value}px`
    
}

sizeControl.addEventListener('input', changeSize);
