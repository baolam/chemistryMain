const H = require("./H/Hoatri.json").data;
const Li = require("./Li/Hoatri.json").data;
const Be = require("./Be/Hoatri.json").data;
const O = require("./O/Hoatri.json").data;
const Na = require("./Na/Hoatri.json").data;

module.exports = [
    ...H,
    ...Li,
    ...Be,
    ...O,
    ...Na
]