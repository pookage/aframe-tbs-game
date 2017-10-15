class Game {

	constructor(){

		this.board         = new Board("small");
		this.player_1      = new Player("nene", "red");
		this.player_2      = new Player("pookage", "blue");
		this.players       = [this.player_1, this.player_2];
		this.currentPlayer = 0;
		this.selectedUnit  = null;

		this.UI       = new UI(this);

	}//constructor

	initialise(){

		const scene         = AFRAME.scenes[0];
		const currentPlayer = this.getCurrentPlayer()
		
		this.board.addPlayer(this.player_1);
		this.board.addPlayer(this.player_2);

		this.UI.setCurrentPlayer(currentPlayer.getName());

		scene.appendChild(this.board.getElement());
		document.body.appendChild(this.UI.getElement());
	}//initialise

	swapPlayer(){
		this.currentPlayer  = !!this.currentPlayer ? 0 : 1;
		const currentPlayer = this.getCurrentPlayer();
		const playerName    = currentPlayer.getName();

		this.UI.setCurrentPlayer(playerName);
	}//swapPlayer
	getCurrentPlayer(){
		return this.players[this.currentPlayer];
	}//getCurrentPlayer
	setSelectedUnit(unit){
		this.selectedUnit = unit;
	}//setSelectedUnit

}//GAME