const input = document.querySelector('#validation-input');


function check (event) {

   if (event.currentTarget.value.length === Number(input.dataset.length) ) {
    input.classList.add('valid')
   } else {
       input.classList.add('invalid');
   }
}

input.addEventListener('blur', check);


