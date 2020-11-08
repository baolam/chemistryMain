const events = require("events");
const EventEmitter = new events.EventEmitter();

EventEmitter.setMaxListeners(100);
module.exports = EventEmitter;