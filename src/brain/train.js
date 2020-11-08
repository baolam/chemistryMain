const PublicEvent = require("../events");

PublicEvent.addListener("train-fileHT", TrainHTFunc);

function TrainHTFunc() {
    PublicEvent.emit("train-file");
}