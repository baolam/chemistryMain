const nthh = require("../nthh/export");
const check = require("../filter/checkData");
const char = require("../filter/char");
const loainhunggtgiongnhau = require("../filter/loainhunggtgiongnhau");
const HT = require("../brain/guessHoaTri");

class createCTHH {
	createDc(data) { // 2 nguyên tố
		let result = check.checkDT(data, "object");
		try {
			let nt1 = result[0].KHHH();
			let nt2 = result[1].KHHH();
			let cs1 = result[0].HoaTri(HT.guess.guess(nt1));
			let cs2 = result[1].HoaTri(HT.guess.guess(nt2));

			let ucln = this.UCLN(cs1, cs2);

			cs1 = cs1 / ucln;
			cs2 = cs2 / ucln;
			
		}
		catch(e) {
			
		}
	}

	UCLN(x, y) {
		let temp;
		while(y !== 0) {
			temp = x % y;
			x = y;
			y = temp;
		}

		return x;
	}

	createHc(data) {

	}
}

module.exports = new createCTHH();