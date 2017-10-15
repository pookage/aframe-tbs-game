AFRAME.registerPrimitive("a-board", {
	defaultComponents: {
		shadow: {
			cast: false,
			receive: true
		},
		rotation: {
			x: -90,
			y: 0,
			z: 0
		}
	},
	mappings: {
		size: "board.size"
	}
});

AFRAME.registerComponent("board", {
	schema: {
		size: {
			default: "small"
		}
	},
	init: function(){

		const element    = this.el;
		const data       = this.data;
		const size       = data.size;
		const dimensions = this.getDimensions(size);
		const tiles      = this.generateTiles(dimensions);
		const position   = this.getOffsetPosition(dimensions);
		

		element.setAttribute("position", position);
		element.appendChild(tiles);
		
	},//init
	getDimensions: function(size){
		const lookup = size || this.data.size;
		switch(lookup){
			case "small":
				return 16;
			case "medium":
				return 32;
			case "large":
				return 64;
		}
	},//getDimensions
	generateTiles: function(dimensions){
		const fragment = document.createDocumentFragment();

		for(let x = 0; x<dimensions; x++){
			for(let y = 0; y<dimensions; y++){
				let tile      = document.createElement("a-tile");
				let index     = { x, y };
				let safeIndex = JSON.stringify(index);

				tile.setAttribute("tile_index", safeIndex);
				tile.setAttribute("position", `${x} ${y} 0`);

				fragment.appendChild(tile);
			}//y loop
		}//x loop

		return fragment;
	},//generateTiles
	getOffsetPosition: function(dimensions){
		return({
			x: -((dimensions/2) -0.5),
			y: 0,
			z: (dimensions/2) - 0.5
		});
	}//getOffsetPosition
});