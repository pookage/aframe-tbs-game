class Game {

	constructor(){

		this.board    = new Board("small");
		this.player_1 = new Player("nene", "red");
		this.player_2 = new Player("pookage", "blue");

	}//constructor

	initialise(){

		const scene   = AFRAME.scenes[0];
		
		this.board.addPlayer(this.player_1);
		this.board.addPlayer(this.player_2);


		scene.appendChild(this.board.getElement());

	}//initialise

}//GAME