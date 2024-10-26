const email = document.getElementById('email');
const notifbtn = document.getElementById('btn');
const emailError = document.getElementById('errormsg');
const form = document.getElementById('form')


form.addEventListener('submit', (e)=> {
    let emailmessages = []
    if(email.value == '' || email.value == null){
        emailmessages.push('Looks like you have entered an invalid email')
    }
    if(emailmessages.length > 0){
        e.preventDefault()
        emailError.textContent = emailmessages
        email.style.border = '2px solid';
        email.style.borderColor = 'red';
        
    }
})