const grayscale = document.querySelector('#grayscale');
const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const sepia = document.querySelector('#sepia');
const saturate = document.querySelector('#saturate');
const img = document.querySelector('#image');
const reset = document.querySelector('#reset');
const imgUrl = document.querySelector('#img-url');

const defalsObj = {

    grayscale:0,
    contrast:100,
    brightness:100,
    sepia:0,
    saturate:100

}


grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);

reset.addEventListener('click', resetFilters);

imgUrl.addEventListener('change', changeImageUrl);


function changeImageUrl(){
    const newImageUrl = imgUrl.value;
    img.setAttribute('src' , newImageUrl)
}

function resetFilters(){
    grayscale.value = defalsObj.grayscale
    contrast.value = defalsObj.contrast
    brightness.value = defalsObj.brightness
    sepia.value = defalsObj.sepia
    saturate.value = defalsObj.saturate

    img.style.filter = 
    // кавычки из ЕСМА 2015 , которые позволяют писать удобно и с переносом строики
    `
    grayscale(${defalsObj.grayscale}%)
    contrast(${defalsObj.contrast}%)
    brightness(${defalsObj.brightness}%)
    sepia(${defalsObj.sepia}%)
    saturate(${defalsObj.saturate}%)

    `
    reset.disabled = true;
}

function updateFilterValue(){

reset.disabled = false;

img.style.filter = 

`
grayscale(${grayscale.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
saturate(${saturate.value}%)

`
}