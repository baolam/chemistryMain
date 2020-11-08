const PublicEvent = require("./src/events");
const nthh = require("./src/nthh/export");
const dt = require("./src/brain/data");
const block = require("./src/filter/loainhunggtgiongnhau");
const check = require("./src/filter/checkData");
const create = require("./src/CTHH/lapCTHH");
const guessHT = require("./src/brain/guessHoaTri");
const train = require("./src/brain/train");
const hoatri = require("./src/nthh/hoatri");

const data = new dt(0, 31);

data.Encode(hoatri, "ht");

setTimeout(() => {
    PublicEvent.emit("train-fileHT");
    console.log(guessHT.guess.guess("H"));
    console.log(guessHT.guess.guess("Li"));
    console.log(guessHT.guess.guess("Be"));
    console.log(guessHT.guess.guess("O"));
    console.log(guessHT.guess.guess("Na"));
}, 500);

module.exports = {
    nthh : nthh,
    dtBrain : data,
    check : check
}