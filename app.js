console.log("hello");
const names = document.getElementById("userName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;

names.addEventListener("blur", () => {
  // NAME VALIDATION
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let nameVal = names.value;
  if (regex.test(nameVal)) {
    names.classList.remove("is-invalid");
    validName = true;
  } else {
    names.classList.add("is-invalid");
  }
});

email.addEventListener("blur", () => {
  // EMAIL VALIDATION
  let emailVal = email.value;
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  if (regex.test(emailVal)) {
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
  }
});

phone.addEventListener("blur", () => {
  // PHONE NO. VALIDATION
  let phoneVal = phone.value;
  let regex = /^([0-9]){2,10}$/;
  if (regex.test(phoneVal)) {
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    phone.classList.add("is-invalid");
  }
});

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

if(validPhone && validName && validEmail) {
 let success = document.getElementById('success');
 success.classList.add('show');
 console.log('Form submitted');
} else {
    console.log('Form input invalid');
}
})