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

	}//init
})