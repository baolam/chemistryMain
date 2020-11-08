/*
	Structure :
		NTK
			Dạng 1: Làm tròn
			Dạng 2: Không làm tròn
		Dạng cơ bản
			Ví dụ: H2, O2, Na, Fe
		Thể
			Rắn lỏng khí
		Hóa trị
			1, 2, 3, ...
		Loại nguyên tố
			Phi kim, kim loại
            0        1
		Cách gọi tên
			H: Hydro
			Na: Natri

    Rắn lỏng khí
    0   1    2
*/

class Goc {
    constructor() {
    	this.ntk = undefined;
    	this.cb = undefined; // Cơ bản
    	this.the = undefined;
    	this.type = undefined;
    	this.ht = undefined; // Hóa trị lớn nhất
    	this.call = undefined;
		this.khhh = undefined;
		this.noHt = undefined;
    }

    HoaTri(guess) {
    	let counter = 0;
		if(this.ht === null) {
			//console.log("Testing hoatri");
			return this.noHt(guess);
		}

		if(this.ht === 1)
			return this.ht;
    }

    TypeofNT() {
    	return this.type;
    }

    KHHH() {
    	return this.khhh;
	}
	
	MD() {
        return this.call + " hiếm nên không có hóa trị!";
	}
	
	ConfigNoHoaTri(func) {
        this.noHt = func;
    }

    KHHH() {
    	return this.khhh;
    }
}

module.exports = Goc;