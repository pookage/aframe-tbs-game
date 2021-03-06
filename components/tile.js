AFRAME.registerPrimitive("a-tile", {
	defaultComponents: {
		tile: {},
		material: {
			roughness: 1
		},
		geometry : {
			primitive: "plane",
			height: 1,
			width: 1
		}
	},
	mappings: {
		tile_index: "tile.tile_index"
	}
});
AFRAME.registerComponent("tile", {
	schema: {
		tile_index: {
			default: {
				x: 0,
				y: 0
			},
			parse: function(value){
				return JSON.parse(value)
			}
		}
	},//schema
	init: function(){

		const component = this;
		const element   = component.el;
		const data      = component.data;

		AFRAME.utils.bind(this.focus, this);
		AFRAME.utils.bind(this.blur, this);
		AFRAME.utils.bind(this.select, this);
		AFRAME.utils.bind(this.blurSelected, this);

		component.colors = {
			default: "#ccc",
			hover: "#eee",
			active: "#111",
			selected: "#666"
		};

		AFRAME.utils.entity.setComponentProperty(element, "material.color", component.colors.default);

		element.addEventListener("mouseenter", component.focus);
		element.addEventListener("mouseleave", component.blur);
		element.addEventListener("mousedown", component.active)
		element.addEventListener("mouseup", component.select);

	},//init
	play: function(){
		const parent = this.el.parentElement;
		const board  = parent.components.board;

		this.board = board;
	},//play
	focus: function(){
		const element   = this.el || this;
		const component = element.components.tile;

		AFRAME.utils.entity.setComponentProperty(element, "material.color", component.colors.hover);

		const GAME         = window.GAME;
		const selectedUnit = GAME.getSelectedUnit();

		if(!!selectedUnit){
			component.board.drawLine(element, selectedUnit);
		}

	},//focus
	blur: function(){
		const element   = this.el || this;
		const component = element.components.tile;

		AFRAME.utils.entity.setComponentProperty(element, "material.color", component.colors.default);
	},//blur
	active: function(){
		const element   = this.el || this;
		const component = element.components.tile;

		AFRAME.utils.entity.setComponentProperty(element, "material.color", component.colors.active);
	},//active
	select: function(){
		const element            = this.el || this;
		const component          = element.components.tile;
		
		component.blurSelected();

		element.classList.add("selected");
		element.removeEventListener("mouseleave", component.blur);
		element.removeEventListener("mouseenter", component.focus);

		AFRAME.utils.entity.setComponentProperty(element, "material.color", component.colors.selected);
		
	},//select
	blurSelected: function(){
		const selectedSquares = document.getElementsByClassName("selected")
		for(let square of selectedSquares){
			square.classList.remove("selected");
			square.components.tile.blur();
		}
	}//blurSelected
})