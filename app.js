console.log('hello');
const names = document.getElementById('userName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')


names.addEventListener('blur', ()=> {
    console.log("name is blurred!");

    // NAME VALIDATION
    let regex = /^[a-zA-Z]([0-9A-Za-z]){0,10}$ /
    let str = names.value;
if(regex.test(str)) {
    console.log('it matched');
    names.classList.remove('is-invalid')
} else {
    console.log('Wrong input');
    names.classList.add('is-invalid')
}
})

email.addEventListener('blur', ()=> {
    console.log("email is blurred!");
    // EMAIL VALIDATION
})
phone.addEventListener('blur', ()=> {
    console.log("phone is blurred!");
    // PHONE NO. VALIDATION
})
 