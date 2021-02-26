const play = document.querySelector("#play");
const howToPlay = document.querySelector("#htp");
const firstScreen = document.querySelector("#first-screen");
const mainScreen = document.querySelector("#main-screen");
const guessBtn = document.querySelector("#guess");
const okayBtn = document.querySelector("#okay");
const number = Math.floor(Math.random() * (100 - 1)) + 1;
const htpModal = document.querySelector("#how-to-play");
const closehtpModal = document.querySelector("#xIcon");
const playAgainWinner = document.querySelector("#play-again-winner");
const noPlayAgainWinner = document.querySelector("#no-play-again-winner");
const playAgainloser = document.querySelector("#play-again-loser");
const noPlayAgainloser = document.querySelector("#no-play-again-loser");
const modalWinner = document.querySelector("#winner");
const modalLoser = document.querySelector("#loser");
const modalResult = document.querySelector("#modal-result");
let numOportunities = 10;
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
	mainScreen.classList.toggle("hidden");
});
guessBtn.addEventListener('click',()=>{
	let playerNumber = document.querySelector("#number-guess").value;
	playerNumber = parseInt(playerNumber);
	validateNumber(number, playerNumber);
});

function validateNumber(number,playerNumber){
	if (number === playerNumber) {
		renderModalResult(4);
	}else{
		numOportunities = oportunities(numOportunities);
		if (numOportunities > -1) {
			if (number > playerNumber) {
				renderModalResult(1);
			}else{
				renderModalResult(2);
				
			}
		}else{
			renderModalResult(3);
			
		}
		//Aunque el juego se "resetea", no creo que sea la mejor experiencia para el usuario. 
		//Preguntaré más tarde como evitar ir a la primera pantalla a darle jugar y que de una vez me tire la segunda pantalla
		//El juego funciona, ya es jugable...
		//Juguemos un rato, solo hay que quitar una cosita...
	}
}

function oportunities(value){
	renderOportunities(value);
	return --value;
}
function renderOportunities(value){
	const lifePoints = document.querySelector("#oportunities");
	lifePoints.innerText = `oportunities: ${value}`;
}
function renderModalResult(value){
	switch(value) {
		case 1:
    		modalResult.classList.remove("hidden");
			document.querySelector("#modal-result-tittle").innerText = "You're close";
			document.querySelector("#modal-result-description").innerText = "The number is higher";
			mainScreen.classList.add("hidden");
			okayBtn.addEventListener('click',()=>{
				mainScreen.classList.remove("hidden");
				modalResult.classList.add("hidden");
			});
   		break;
		case 2:
   			modalResult.classList.remove("hidden");
			document.querySelector("#modal-result-tittle").innerText = "You're close";
			document.querySelector("#modal-result-description").innerText = "The number is less";
			mainScreen.classList.add("hidden");
			okayBtn.addEventListener('click',()=>{
				mainScreen.classList.remove("hidden");
				modalResult.classList.add("hidden");
			});
    	break;
    	case 3:
   			modalLoser.classList.remove("hidden");
			mainScreen.classList.add("hidden");
			playAgainloser.addEventListener('click', ()=>{
				mainScreen.classList.remove("hidden");
				modalLoser.classList.add("hidden");
				location.reload();
			});
			noPlayAgainloser.addEventListener('click', ()=>{
				firstScreen.classList.remove("hidden");
				modalLoser.classList.add("hidden");
				location.reload();
			});
    	break;
  		default:
   			modalWinner.classList.remove("hidden");
			mainScreen.classList.add("hidden");
			playAgainWinner.addEventListener('click', ()=>{
				mainScreen.classList.remove("hidden");
				modalWinner.classList.add("hidden");
				location.reload();
			});
			noPlayAgainWinner.addEventListener('click', ()=>{
				firstScreen.classList.remove("hidden");
				modalWinner.classList.add("hidden");
				location.reload();
			});
	}
}