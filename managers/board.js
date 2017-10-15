class Board {
	
	constructor(size="small"){

		this.element   = document.createElement("a-board");
		this.size      = size;
		this.players   = [];

		this.element.setAttribute("size", size);


	}//constructor


	addPlayer(player){
		const playerEl  = player.getElement();
		const side      = this.players.length == 0 ? "near" : "far";
		const boardDims = this.element.components.board.getDimensions(this.size)
		const xOffset   = 0//(boardDims/2) - 0.5;
		const yOffset   = side == "near" ? -1 : boardDims;

		playerEl.setAttribute("position", `0 ${yOffset} 0`);

		this.element.appendChild(playerEl);
		this.players.push(player);
	}//addPlayer

	getElement(){
		return this.element;
	}//getElement

}