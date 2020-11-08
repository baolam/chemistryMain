
class Char {
	Number(data) {
		let result = [];

		for(let i = 0; i < data.length; i++) {
			if(String(Number(data[i])) === "NaN")
				result.push(data[i]);
		}

		return result;
	}

	SpecialChar(data) {
		let result = [];

		for(let i = 0; i < data.length; i++) {
			if(
			   data[i] === "(" 
			|| data[i] === ")"
			) 
				result.push(data[i]);
		}

		return result;
	}
}

module.exports = new Char();