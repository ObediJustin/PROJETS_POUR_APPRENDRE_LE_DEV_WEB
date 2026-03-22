let error = document.querySelector('.error_message');
let button = document.querySelector('button');
let long_link = document.querySelector('.long_link');
let short = document.querySelector('.result'); 

function shorten_link() {
    if (long_link.value === '') {
        error.textContent = 'Veuillez entrer un lien';
        error.innerHTML="";
    } else {
        error.textContent = '';
        short.textContent = 'lien raccourci';
    }
}
