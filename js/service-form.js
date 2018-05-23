var slider = document.getElementsByClassName("service-form-wrapper")[0];
var btnNext = document.getElementsByClassName("service-form__nav__next")[0];
var btnBack = document.getElementsByClassName("service-form__nav__back")[0];

btnNext.onclick = function() {
	slider.style.transform = "translateX(-1280px)";
}
btnBack.onclick = function() {
	slider.style.transform = "translateX(0px)";
}