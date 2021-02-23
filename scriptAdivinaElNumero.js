const play = document.querySelector("#play");
const howToPlay = document.querySelector("#htp");
const firstScreen = document.querySelector("#first-screen");
const mainScreen = document.querySelector("#main-screen");
const guessBtn = document.querySelector("#guess");
const number = Math.floor(Math.random() * (100 - 1)) + 1;
oportunities();


play.addEventListener('click', ()=>{
	firstScreen.classList.add("hidden");
	mainScreen.classList.remove("hidden");
});
guessBtn.addEventListener('click',()=>{
	let playerNumber = document.querySelector("#number-guess").value;
	playerNumber = parseInt(playerNumber);
	validateNumber(number, playerNumber);
});

function validateNumber(number,playerNumber){
	let expresion = number === playerNumber;
	switch(expresion){
		case true:
		alert("Increible, u did it");
		break;
		case false:
		if (number > playerNumber) {
			alert("The number is greater");
		}else{
			alert("The number in less");
		}
		break;
		default:
		alert("something is going wrong");
		break;
	}
}

function oportunities(value){
	const popUpOportunities = document.querySelector("#oportunities");
	let oportunities = 10;
	popUpOportunities.innerText = `oportunities: ${oportunities}`
}
