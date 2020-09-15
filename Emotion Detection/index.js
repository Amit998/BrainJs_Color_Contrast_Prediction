const brain = require('brain.js')
const network = new brain.NeuralNetwork();
const tdata=require('./src/t-data')
const serializer = require('./src/serialize');


network.train(serializer.serialize(tdata));
const emotion= network.run(serializer.encode('I feel fine'))
console.log(emotion)

