class UI {
	constructor(game){

		this.game        = game;
		this.container   = this.setupUIContainer();
		this.currentUser = this.setupCurrentPlayerLabel();
		this.endTurn     = this.setupEndTurnButton();

		this.container.appendChild(this.currentUser);
		this.container.appendChild(this.endTurn);
	}//constructor

	setupUIContainer(){
		const element = document.createElement("div");
		element.classList.add("ui-container");
		return element;
	}//setupUIContainer
	setupCurrentPlayerLabel(){
		const element = document.createElement("h1");
		element.classList.add("current-player");
		return element;
	}//setupCurrentPlayerLabel
	setupEndTurnButton(){
		const element = document.createElement("button");
		element.innerHTML = "end turn"
		element.classList.add("end-turn");

		element.addEventListener("click", this.game.swapPlayer.bind(this.game))
		return element;
	}//setupEndTurnButton

	getElement(){
		return this.container;
	}//getElement

	setCurrentPlayer(name){
		this.currentUser.innerHTML = name;
	}//setCurrentPlayer
}