// Native JS
const URL = 'http://polarfox-soft.com/test-task.php'

/****** Function to make request *******
USAGE: 
request('get', 'http://exmaple.com', (resp)=> {console.log(resp)} );
*/

let request = function () {
    let xhr = new XMLHttpRequest();
    return function (method, url, callback) {
        xhr.onload = function () {
            callback(JSON.parse(xhr.responseText));
        };
        xhr.open(method, url, true);
        xhr.send();
    };
}();
request('get', URL, (resp)=> {console.log(resp)} );


let menuBtn = document.getElementById("menu");
let section = document.querySelectorAll('.section');
let typeOnClick = document.getElementById("type");
let form = document.getElementById("form");




menuBtn.addEventListener('click', openMenu);

for (i = 0; i < section.length; i++) {
    section[i].addEventListener('click', openModal);
    section[i].addEventListener('click', TypeClickForm);
}



function openModal(){
    // console.log("1")

modal = document.getElementById('myModal');
btn = document.getElementById('closeModalBtn');
span = document.getElementsByClassName("close")[0];

modal.style.display = 'block';
span.addEventListener('click' , spanClick);
btn.addEventListener('click' , spanClick);

}

function spanClick(){
    modal.style.display = 'none';
    resetForm()
    
}

function resetForm(){
    let nameInput = document.getElementById("name");
    let nameInputLabel = document.getElementById("name-error");
    nameInputLabel.style.display = "none";
    nameInput.value = '';
    nameInput.classList.remove('error');
   
    let surnameInput = document.getElementById("surname");
    let surnameInputLabel = document.getElementById("surname-error");
    surnameInput.value = '';
    surnameInput.classList.remove('error');
    surnameInputLabel.style.display = "none";


    let phoneInput = document.getElementById("phone");
    let phoneInputLabel = document.getElementById("phone-error");
    phoneInput.value = '';
    phoneInput.classList.remove('error');
    phoneInputLabel.style.display = "none";

    let emailInput = document.getElementById("email");
    let emailInputLabel = document.getElementById("email-error");
    emailInput.value = '';
    emailInput.classList.remove('error');
    emailInputLabel.style.display = "none";
}

function openMenu(){
    let btnMenu = document.getElementById('myTopnav');
    if(btnMenu.className === 'topnav'){
        btnMenu.className += ' responsive';
    } else{
        btnMenu.className = "topnav";
    }
}

function TypeClickForm(e){
    // console.log(e.target)
    
    if(e.target.className ==='title' ){
        typeOnClick.innerHTML = 'Title'
    } else if (e.target.className ==='text'){
        typeOnClick.innerHTML = 'text p'
    } else if (e.target.className ==='button15'){
        typeOnClick.innerHTML = 'button'
    } else{
        typeOnClick.innerHTML =  typeof e.target;
    };
}





// JS(jQuery)

$("#phone").mask('+38(0**)-***-**-**)');

$("#form").validate({
    
    rules:{
        email:{
            required:true,
            email: true
        },
        surname:{
            required:true,
            
        },
        name:{
            required:true,
            debug: true

        },
        errorClass:'er'
        
    }
});


 $("#form").submit(function() {
     $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
     }).done(function() {
         $(this).find("input").val("");
         alert("Спасибо за отправку! Скоро мы с вами свяжемся.");
         $("#form").trigger("reset");
     });
     return false;
});