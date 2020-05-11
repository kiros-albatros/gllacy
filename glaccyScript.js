
/*МОДАЛЬНЫЕ ОКНА*/
var enter = document.getElementById("enter");
var enterBlock = document.querySelector(".modal-enter")
enter.addEventListener("click", function (event) {
    event.preventDefault();
    enterBlock.classList.toggle("modal-show");
})

var search = document.getElementById("search");
var searchBlock = document.querySelector(".modal-search")
search.addEventListener("click", function (event) {
    event.preventDefault();
    searchBlock.classList.toggle("modal-show");
})

var basket = document.getElementById("basket");
var basketBlock = document.querySelector(".modal-basket")
basket.addEventListener("click", function (event) {
    event.preventDefault();
    basketBlock.classList.toggle("modal-show");
})

var popup = document.getElementById("popup");
var popupBlock = document.querySelector(".modal-feedback");
var body = document.getElementsByTagName("body");
popup.addEventListener("click", function (event) {
    event.preventDefault();
    popupBlock.classList.toggle("modal-show");
    body[0].classList.toggle("overlay");
})

/*СЛАЙДЕР*/

var radioButtons = document.getElementsByName("slide-control");
var slider1Label = document.getElementById("slider1label");
var slider2Label = document.getElementById("slider2label");
var slider3Label = document.getElementById("slider3label");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
slide1.style.display = "block";


slider1Label.addEventListener("click", function () {
    body[0].style.backgroundImage = "url('fon1.png')";
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";
    body[0].style.backgroundColor = "#849d8f";
})

slider2Label.addEventListener("click", function () {
    body[0].style.backgroundImage = "url('fon2.png')";
    slide2.style.display = "block";
    slide1.style.display = "none";
    slide3.style.display = "none";
    body[0].style.backgroundColor = "#8996a6";
})

slider3Label.addEventListener("click", function () {
    body[0].style.backgroundImage = "url('fon3.png')";
    slide3.style.display = "block";
    slide2.style.display = "none";
    slide1.style.display = "none";
    body[0].style.backgroundColor = "#9e8c85";
})

