const nthh = require("../nthh/export");

const length = nthh.length;

class Check {
	checkDT(data, type) {
		//let dataType = type.data;
		let returnType = type;
		let obj = [];

		for(let i = 0; i < data.length; i++)
			obj.push(this.searchCT(data[i], returnType));

		return obj;
	}

	searchCT(data, type) {
		// Data is a char
		if(type === "normal") {
			// Is true or false
			for(let i = 0; i < length; i++) {
				let name = nthh[i].KHHH();
				if(name === data)
					return true;				
			}

			return false;
		}

		if(type === "object") {
			for(let i = 0; i < length; i++) {
				let name = nthh[i].KHHH();
				if(name === data)
					return nthh[i];
			}

			return undefined;
		}
	}
}

module.exports = new Check();