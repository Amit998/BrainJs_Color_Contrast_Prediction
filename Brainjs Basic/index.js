const net =new brain.NeuralNetwork({ hiddenLayers:[3] });

const tranningData =[
    { input: [0,0] , output:[0] },
    { input: [1,0] , output:[1] },
    { input: [0,1] , output:[1] },
    { input: [1,1] , output:[0] }
];

net.train(tranningData,{
    log: (error) => console.log(error),
    logPeroid:100
});

console.log(net.run([0,0]));