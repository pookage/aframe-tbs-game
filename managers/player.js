class Player {

	constructor(name, color){
		this.name  = name;
		this.color = color;
		this.units = this.createUnits();
		this.pool  = this.createPool();

		this.addUnitsToPool(this.units, this.pool);
	}//constructor

	createUnits(){
		const unitCount = 5;
		const units     = new Array(unitCount);
		for(let x = 0; x < unitCount; x++){
			let unit = document.createElement("a-unit");
			unit.setAttribute("color", this.color)
			units[x] = unit;
		}
		return units;
	}//createUnits

	createPool(units){
		const element = document.createElement("a-player");
		element.setAttribute("name", this.name);
		return element;
	}//createPool

	addUnitsToPool(units, pool){
		for(let unit of units){
			pool.appendChild(unit);
		}
	}//addUnitsToPool

	getElement(){
		return this.pool;
	}//getElement
	getName(){
		return this.name
	}//getName

}//player