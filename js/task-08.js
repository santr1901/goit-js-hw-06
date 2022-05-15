const form = document.querySelector(".login-form");

form.addEventListener("submit", submitBtn);

function submitBtn(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Zapolnite vse pola");
  }

  const data = {
      email: email.value,
      password: password.value
  }

  console.log(`Login: ${data.email}, Password: ${data.password}`);
  event.currentTarget.reset();

}
