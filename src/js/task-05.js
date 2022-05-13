const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const writeName =(event)=>{
    
        output.textContent = event.currentTarget.value; 
}

const changeName =(event)=>{
    if (event.currentTarget.value === '') {
        output.textContent = "Anonymous"; 
    }
    
}

textInput.addEventListener("input", writeName);
textInput.addEventListener("change", changeName);

console.log(output.textContent)