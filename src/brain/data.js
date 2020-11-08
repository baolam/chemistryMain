const config = require("./config");

/*
	Chức năng
	Chuyển đổi 
	Giải mã
	Viết file

	Thao tác với số vì số dễ xử lý hơn string

*/

class data {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}


	Encode(data, type) {
		let result = this.ConvertObject(data);

		//console.log(result);

		if(type === "dc") {					
			config.dc.get("data")
				  .push(result)
				  .write();

		}

		if(type === "ht") {
			let kq = config.ht.get("data")
					 .find(result)
					 .value();
			//console.log(kq);
			if(kq === undefined) {
				// config.ht.get("data")
				// 	.push(result)
				// 	.write()
			}
		}

		return true;
	}

	Decode(data, type) {
		let res = Array.isArray(data);

		if(res) {
			//console.log(true);
			let arrResult = [];

			data.forEach((dt) => {
				arrResult.push(
					String.fromCharCode(dt)
				)
			});

			if(String(type) === "array") 
				return arrResult;
			
			if(String(type) === "string") {
				//console.log(true);
				let result = "";
				for(let i = 0; i < arrResult.length; i++) 
					result += arrResult[i];
				return result;
			}
		}	
		else {
			const svl = (this.end - this.start) + 1;
			let str = String(data);
			let result = [];
			let temp = "";
	
			for(let i = 0; i < str.length; i++) {
				temp += str[i];
				let num = Number(temp);
				
				if(num.isNaN()) {
					throw new Error("Is not a number!");	
				}

				if(num >= svl) {
					result.push(num);
					temp = "";
				}
			}
			//console.log(result);

			// Dùng cấu trúc đệ quy để trả về kết quả
			return this.Decode(result, type);
		}
	}

	Input(data) {
		let arrayData = [];

		data.split("").map(dt => {
			let str = String(dt);
			arrayData.push(
				(str.charCodeAt(0) / 255)
			)
		});

		//console.log(arrayData);
		return arrayData;
	}

	Output(data) {
		let arrayData = [];

		data.split("").map(dt => {
			let str = String(dt);
			arrayData.push(
				(str.charCodeAt(0))
			)
		});

		//console.log(arrayData);
		return arrayData;
	}

	ConvertObject(data) {
		// Data is an object
		return data.map(value => {
			//console.log(`${value.input}`)
			return {
				input : this.Input(String(value.input)),
				output : this.Output(String(value.output))
			}
		});	
	}
}

module.exports = data;