const brain = require("brain.js");
const assert = require("assert");
const PublicEvent = require("../events");
const config = require("./config");
const hoatri = require("./trainingFile/hoatri.json").data[0];
const cv = require("./data");
// const crossvalidate = new brain.CrossValidate(brain.recurrent.LSTM, {
//     hiddenLayers : [5, 5],
//     binaryThresh : 0.05,
//     activation : "relu",
// });
//console.log(hoatri);

const data = new cv(0, 31);

const network = new brain.Recurrent({
    inputLayer : () => {
        return 1;
    },
    hiddenLayers : () => {
        return 10
    },
    outputLayer : () => {
        return 1
    }
});

network.maxPredictionLength  = 1000000;

// const network = new brain.NeuralNetwork({
//     activation : "relu",
//     learningRate : 0.6,
//     hiddenLayers : [5, 5],
// });

// const stream = new brain.TrainStream({
//     neuralNetwork : network,
//     floodCallback: function () {
//         readInputs(stream, hoatri);
//     },
//     doneTrainingCallback : function (value) {
//         //console.log(value);
//         //console.log(brain.likely(hoatri, network));
//         console.log(`Iterations: ${value.iterations}  ${value.error}  Result: ${network.run([72])}`);
//         if(value.iterations <= 100000)
//             readInputs(stream, hoatri);
//     }
// });

PublicEvent.addListener("train-file", TrainFunc);
// PublicEvent.addListener("comp", () => {
//     network = crossvalidate.toNeuralNetwork();
// });
// function readInputs(stream, data) {
//     for(let i = 0; i < data.length; i++) {
//         stream.write(data[i]);
//     }

//     stream.endInputs();
// }

function TrainFunc() {
    console.log("Training");
    console.log(hoatri);

    network.train(hoatri, {
        iterations : 2000,
        log : true,
        errorThresh : 0.005,
        momentum : 0.05,
        praxis : "adam",
        learningRate : 0.5
    });

    //console.log(network.run([72]));
    //console.log(starts);
    PublicEvent.emit("comp");

    //readInputs(stream, hoatri);
    //network.endInputs(hoatri);
    //network.write(hoatri);
}

class GuessHT {
    guess(dt) {
        let result = Number(network.run(data.Input(dt)));
        return Number(String.fromCharCode(result));
    }    
}

module.exports = {
    guess : new GuessHT(),
    network : network
}