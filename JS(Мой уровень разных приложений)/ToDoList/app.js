"use strict";

const myNodeList = document.getElementsByTagName('li');
const close = document.getElementsByClassName("close");
const list = document.querySelector('ul');
const btn = document.querySelector('button');

btn.addEventListener('click',newElemnt);
list.addEventListener('click',cheaked);


function newElemnt(){
    let li = document.createElement('li');

    let inputValue = document.getElementById('myInput').value;
    let text = document.createTextNode(inputValue)
    li.appendChild(text)
    if(inputValue === ''){
        alert('Empty value!')
    } else{
        document.getElementById('myUl').appendChild(li);
    }
   
    resetContactForm();
    closeTask()
}

function closeTask(){
    for(let i = 0; i<myNodeList.length;i++ ){
        let span = document.createElement('span');
        let x = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(x);
        myNodeList[i].appendChild(span);
    };

    for(let i = 0; i<close.length;i++ ){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = 'none'
        }
       
    };
}
function resetContactForm(){
    document.getElementById('myInput').value = '';
}


function cheaked(element){
    if(element.target.tagName === 'LI'){
        element.target.classList.toggle('cheacked');
    }
}
closeTask()