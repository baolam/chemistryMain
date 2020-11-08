const lowdb = require("lowdb");
const adapters = require("lowdb/adapters/FileSync");

const congthucdonchat = new adapters("./src/brain/trainingFile/congthucdonchat.json");
const congthuchopchat = new adapters("./src/brain/trainingFile/congthuchopchat.json");
const hoatri = new adapters("./src/brain/trainingFile/hoatri.json");

const dc = lowdb(congthucdonchat);
const hc = lowdb(congthuchopchat);
const ht = lowdb(hoatri);

dc.defaults({data : []}).write();
hc.defaults({data : []}).write();
ht.defaults({data : []}).write();

module.exports = {
	dc : dc,
	hc : hc,
	ht : ht
}