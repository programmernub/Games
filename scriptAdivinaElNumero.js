const play = document.querySelector("#play");
const howToPlay = document.querySelector("#htp");
const firstScreen = document.querySelector("#first-screen");
const mainScreen = document.querySelector("#main-screen");
const guessBtn = document.querySelector("#guess");
const number = Math.floor(Math.random() * (100 - 1)) + 1;
const htpModal = document.querySelector("#how-to-play");
const closehtpModal = document.querySelector("#xIcon");
let numOportunities = 10;//arreglar que me de las 10 oportunidades, de momento tiene 9 oportunidades
numOportunities = oportunities(numOportunities);

howToPlay.addEventListener('click', ()=>{
	htpModal.classList.remove("hidden");
	firstScreen.classList.add("hidden");
});
closehtpModal.addEventListener('click',()=>{
	htpModal.classList.add("hidden");
	firstScreen.classList.remove("hidden");
});
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
	//const expresion = number === playerNumber;
	//change for an if
	if (number === playerNumber) {
		alert("NICE, u got it");
	}else{
		numOportunities = oportunities(numOportunities);
		if (number > playerNumber) {
			alert("The number is greater");
		}else{
			alert("The number is less");
		}
	}
	/*switch(expresion){
		case true:
		alert("Increible, u did it");
		break;
		case false:
		numOportunities = oportunities(numOportunities);
		if (number > playerNumber) {
			alert("The number is greater");
		}else{
			alert("The number is less");
		}
		break;
		default:
		alert("something is going wrong");
		break;
	}*/
}

function oportunities(value){
	const popUpOportunities = document.querySelector("#oportunities");
	popUpOportunities.innerText = `oportunities: ${value}`;
	return --value;
}
//Do a new function to rest or print the result
