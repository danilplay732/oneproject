var modal = document.getElementById("my_modal");
var fbtn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];


let str = document.querySelector(".str");  // Берём элемент строки
let btn = document.querySelector(".btn");  // Берём элемент кнопки


let num1 = Math.ceil(Math.random() * 10); // Получаем рандомное число один
let num2 = Math.ceil(Math.random() * 10); // Получаем рандомное число два
let res = num1 + num2; // Результат сложение этих чисел

// Выводим строчку ворожения
str.innerHTML = `${num1} + ${num2} = `;

// События нажатия на кнопку
btn.addEventListener("click", function () {
    // Получаем значение из input
    let inputNum = document.querySelector(".input-num").value;
    // Переводим в числовой тип данных
    inputNum = parseInt(inputNum);
    // Условие, если значение из input равно результат
    if (inputNum === res) {
        // То выводит в консоль "Вход разрешён"
        alert("Вход разрешён");

    } else {
        // Иначе выводит "Вход запрещен"
        alert("Вход запрещен");
    }

});
