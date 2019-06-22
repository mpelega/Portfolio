$(document).ready(function(){
$('.calc select').change(function(){
    $edition = $('select#card_edition').val();
    // console.log( $edition)
    $paper = $('select#card_paper').val();
    // console.log( $paper)
    $color = $('select#card_color').val();
    // console.log( $color)
    
    $paper_cof = $('select#card_paper option:selected').attr('data-cof');
    $print = $('select#card_color option:selected').attr('data-print');

    // формулу придумал сам,поэтому числа не похожие на реальность
    $division = 30;   
    // Финальный тираж
    $final_edition = $edition / $division;
    $price = $final_edition *parseInt($paper_cof) + parseInt($print);

    $('span#final_price').text($price);

})
})


$('#card_color').change(function(){

$color_format = $('select#card_color option:selected').attr('data-color');

if ($color_format == 1){
    $('.card-images img').hide();
    $('#card_1_0').show('slow');
}
if ($color_format == 2){
    $('.card-images img').hide();
    $('#card_1_1').show('slow');
}
if ($color_format == 3){
    $('.card-images img').hide();
    $('#card_4_0').show('slow');
}
if ($color_format == 4){
    $('.card-images img').hide();
    $('#card_4_1').show('slow');
}
if ($color_format == 5){
    $('.card-images img').hide();
    $('#card_4_4').show('slow'); 
}

})