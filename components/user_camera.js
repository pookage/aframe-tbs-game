AFRAME.registerPrimitive("a-user-camera", {
	defaultComponents: {
		user_camera: {},
		camera: {
			fov: 60
		},
		cursor: {
			rayOrigin: "mouse"
		},
		"wasd-controls": {
			acceleration: 150,
			easing: 5
		},
		"look-controls": {},
		position: {
			x: 0,
			y: 15,
			z: 20
		},
		rotation: {
			x: -30,
			y: 0,
			z: 0
		}
	}
});
AFRAME.registerComponent("user_camera", {
	schema: {
		rotate_speed: {
			default: 1
		}
	},
	init: function(){

		this.rotateDirection = 0;

		window.addEventListener("keydown", this.lookupKey.bind(this));
		window.addEventListener("keyup", this.stopRotation.bind(this));
	},
	tick: function(){
		if(!!this.rotateDirection){
			this.currentRotation = this.el.getAttribute("rotation");
			if(this.rotateDirection > 0){
				this.el.setAttribute("rotation", `${this.currentRotation.x} ${this.currentRotation.y += this.data.rotate_speed}`);
			} else if (this.rotateDirection < 0){
				this.el.setAttribute("rotation", `${this.currentRotation.x} ${this.currentRotation.y -= this.data.rotate_speed}`);
			}
		}
	},
	lookupKey: function(event){
		switch(event.key){
			case "e":
				this.rotate(-1);
				break;
			case "q":
				this.rotate(1);
				break
		}
	},
	stopRotation: function(event){
		this.rotate(0);
	},
	rotate: function(direction){
		this.rotateDirection = direction;
	}
})