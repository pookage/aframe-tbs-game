AFRAME.registerPrimitive("a-unit", {
	defaultComponents: {
		unit: {},
		geometry: {
			primitive: "box"
		},
		position: {
			x: 0,
			y: 0,
			z: 0.5
		}
	},
	mappings: {
		color: "material.color"
	}
});
AFRAME.registerComponent("unit", {
	schema: {},
	init: function(){
		const element = this.el;	

		element.addEventListener("click", this.selectUnit.bind(this));
	},//init
	play: function(){
		const element = this.el
		const parent  = element.parentElement;
		const player  = parent.components.player;

		this.owner = player;	
	},
	selectUnit: function(){

		const element       = this.el;
		const GAME          = window.GAME;
		const currentPlayer = GAME.getCurrentPlayer().getName();
		const selectedOwner = this.owner.data.name

		if(selectedOwner == currentPlayer){
			GAME.setSelectedUnit(element);
			this.clearSelected();
			element.classList.add("selected-unit");
			AFRAME.utils.entity.setComponentProperty(element, "material.wireframe", true)
		} else {
			console.log("not allowed to touch this");
		}
	},//selectUnit
	clearSelected: function(){
		const element       = this.el;
		const parent        = element.parentElement;
		const selectedUnits = parent.getElementsByClassName("selected-unit");

		for(let unit of selectedUnits){
			unit.classList.remove("selected-unit");
			AFRAME.utils.entity.setComponentProperty(unit, "material.wireframe", false)
		}
	}//clearSelected
})