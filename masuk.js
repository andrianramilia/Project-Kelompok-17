let formmasuk = document.getElementById("formmasuk")
formmasuk.addEventListener("click", function(event){
    event.preventDefault()
});

let button = document.querySelector('button[data-toggle="modal"]');
let modalSuccess =  document.querySelector('.success');
let modalInvalid =  document.querySelector('.invalid');


button.addEventListener('click', function() {
    let username = document.forms["login"]["username"].value;
    let password = document.forms["login"]["password"].value;

    if (username == "Andrian" && password == "123123") {
        modalSuccess.classList.add('show');
        modalInvalid.classList.remove('show');
   
    } else {
        modalInvalid.classList.add('show');
    }
});

modalSuccess.addEventListener('click', function() {
    this.classList.remove('show');

});

modalInvalid.addEventListener('click', function() {
    this.classList.remove('show');

});