let ceil = document.getElementsByClassName("game-item");
let reset = document.getElementById("reset-game");
let message = document.getElementById("message");

let playerGame = "X";
let count = 0; // Счетчик ходов

let winCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
  ]  // Все победы в массивах

let dataX = [], // В этот массив запушу ,что выбрал определенный игрок!
    dataO = [];  

// Реализация

for ( i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", currentStep);
} // Обработчик события на клик

function currentStep(){
    // console.log('click')
    let number = Number(this.getAttribute("data-ceil"))// Получаем атрибуты хтмл и приводим их к числу
    // console.log(number)
    if (!this.textContent) {
        this.innerText = playerGame;// Если текст в дивах пуст - присваиваем значение переменной
    // console.log(this.innerText)
        playerGame === "X"
      ? dataX.push(number) && this.classList.add("x"): dataO.push(number) && this.classList.add("o");
      // Если не х то у + сетим классы
    // console.log(dataX)
    // console.log(dataO)
        if (
            (dataO.length > 2 || dataX.length > 2) &&
            (checkWin(dataO, number) || checkWin(dataX, number))
            ){
                for (var i = 0; i < ceil.length; i++) {
                    ceil[i].removeEventListener("click", currentStep);
                  }
                return (message.innerText = "Победил игрок " + playerGame);
            }
    }// Если длина любого массива больше 2 и checkWin вернул тру с каким-то из аргументов,то удаляем обработчик циклом и выводим того кто был последним в переменной
    
    changePlayer();  
    count++;
    if (count === 10){   
        ceil.removeEventListener("click", currentStep);
    }// Cтоп счетчика полсле ничьи
    // console.log(count)
    count === 9
      ? (message.innerText = "Ничья")
      : (message.innerText = "Ходит игрок " + playerGame);
}// вывод ничьи тренарным оператором

function changePlayer() {
    playerGame === "X" ? (playerGame = "O") : (playerGame = "X");
  }// Если не х то у  в значении

reset.addEventListener("click", function() {
    for (i = 0; i < ceil.length; i++) {
      ceil[i].innerText = "";
      ceil[i].addEventListener("click", currentStep);
    }  

    dataX = [], // очищаем массив
    dataO = []; 
    
    playerGame = "X";// очищаем все
    count = 0;
    message.innerText = "Ходит игрок " + playerGame;

    for ( i = 0; i < ceil.length; i++) {    
        ceil[i].classList.remove("x", "o");
      }// удаляем классы

})

function checkWin(arr, number){
    for ( w = 0; w < winCombinations.length; w++){
        let someWinArr = winCombinations[w]
        let  counts = 0;
// бежим по масиву и проверем на совпадение с переданным аргуметом. Если их нет,то отработает -1,если есть пропустит(выведет значение)
        if (someWinArr.indexOf(number) !== -1){ 
            for (k = 0; k < someWinArr.length; k++){
                if (arr.indexOf(someWinArr[k]) !== -1) {
                    counts++;
                    if (counts === 3) {
                      return true;
                    }
                  }
            }
            counts = 0;
        }
    }
}
