const nameElement = document.querySelector("form--name");
const emailElement = document.querySelector("form--email");
const submitButton = document.querySelector("form--submit");

nameElement.addEventListener("change", (o) => {
  let regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  if (!regName.test(nameElement.value)) {
    nameElement.style.border = "2px solid red";
    nameElement.style.color = "red";
    submitButton.disabled = true;
    submitButton.classList.toggle("disabled-button");
  } else {
    nameElement.style.border = "1px solid black";
    nameElement.style.color = "black";
    submitButton.disabled = false;
    submitButton.classList.toggle("disabled-button");
  }
});
email.addEventListener("change", (o) => {
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regEmail.test(email.value)) {
    email.style.border = "2px solid red";
    email.style.color = "red";
    submitButton.disabled = true;
    submitButton.classList.toggle("disabled-button");
  } else {
    email.style.border = "1px solid black";
    email.style.color = "black";
    submitButton.disabled = false;
    submitButton.classList.toggle("disabled-button");
  }
});
