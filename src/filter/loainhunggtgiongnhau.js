
/*
	input: string
	output: array
*/

module.exports = (data) => {
	//let array = Array.isArray(data);
	let result = [];
	//let data = undefined;

	for(let i = 0; i < data.length; i++) {
		let memory = false;
		for(let j = i + 1; j <= data.length; j++) {

			if(! memory) {
				result.push(data[i]);
				memory = true;
			}

			if(data[i] === data[j])
				result.pop(data[i]);
		} 
	}

	return result;
}