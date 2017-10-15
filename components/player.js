AFRAME.registerPrimitive("a-player", {
	defaultComponents: {
		player: {},
	},
	mappings: {
		name: "player.name"
	}
});
AFRAME.registerComponent("player", {
	schema: {
		name: {
			default: ""
		}
	},
	init: function(){
	},//init
	play: function(){
		this.organisePool();
	},//play
	organisePool: function(){
		const element   = this.el;
		const parent    = element.parentElement;
		const board     = parent.components.board;
		const children  = element.children;
		const count     = children.length;
		const boardSize = board.getDimensions()-1;
		const sideSize  = Math.floor(count/2);
		const margin    = (boardSize/2) / sideSize;

		for(let index = 0; index < count; index++){
			let currentUnit = children[index]
			let {x, y, z} = currentUnit.getAttribute("position");
			x = margin*index;
			currentUnit.setAttribute("position", {x, y, z});
		}
	}
})