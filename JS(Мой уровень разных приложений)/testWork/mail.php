<?php

$recepient = "agragregra@ya.ru";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

function validate(e){
    let errors = [];
    let inputs = this.elements;
    console.log(this.elements)
    for(i=0; i < inputs.length;i++ ){
        let rulesList = inputs[i].dataset.rule;
        rulesList = rulesList.split(' ');
        for(j=0; j<rulesList.length;j++ ){
            if(!rules[rulesList[j]](input[i])){
                errors.push({
                    name: inputs[i].name,
                    error: rulesList[j]
                }
                )
            }
        }
    }
    if(errors.length > 0){
        e.preventDefault();
    }
}