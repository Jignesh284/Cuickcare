var regModal = document.getElementsByClassName("register")[0];
var logModal = document.getElementsByClassName("login")[0];
var regButton = document.getElementById("register");
var logButton = document.getElementById("login");
var regClose = document.getElementsByClassName("reg-close")[0];
var logClose = document.getElementsByClassName("log-close")[0];
var regButton2 = document.getElementsByClassName("register2")[0];
var logButton2 = document.getElementsByClassName("login2")[0];

 
 

regButton.onclick = function() {
	regModal.style.display = "block";	
};

regButton2.onclick = function()  {
	logModal.style.display = "none";
	regModal.style.display = "block";

};

regClose.onclick = function() {
	regModal.style.display = "none";
};

logButton.onclick = function () {
	logModal.style.display = "block";	
};

logButton2.onclick = function () {
	regModal.style.display = "none";
	logModal.style.display = "block";	
};

logClose.onclick = function() {
	logModal.style.display = "none";
};