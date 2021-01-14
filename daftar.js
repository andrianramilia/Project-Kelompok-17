let formdaftar = document.getElementById("formdaftar")
formdaftar.addEventListener("click", function(event){
    event.preventDefault()
});

let button = document.querySelector('button[data-toggle="modal"]');
let modalSuccess =  document.querySelector('.success');
let modalInvalid =  document.querySelector('.invalid');


button.addEventListener('click', function() {
    let email= document.forms["daftar"]["email"].value;
    let username = document.forms ["daftar"]["username"].value;
    let password = document.forms["daftar"]["password"].value;
    let konfirmasi = document.forms["daftar"]["konfirmasi"].value;

    if (email !== "" && username !== "" && password !== "" && konfirmasi!== "" && password == konfirmasi && konfirmasi==password) {
        modalSuccess.classList.add('show');
        modalInvalid.classList.remove('show');
   
    } else {
        modalInvalid.classList.add('show');
    }
});


modalSuccess.addEventListener('click', function() {
    this.classList.remove('show');
    window.location.href = "Masuk.html";
});

modalInvalid.addEventListener('click', function() {
    this.classList.remove('show');

});