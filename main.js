let readline = require('readline');
let route = require('./route');

function main(input) {
    let response = route(input);
    console.log(response.text);
}

function start() {
    let rl = readline.createInterface({
        input: process.stdin,
    });

    rl.on('line', function (input) {
        main(input);
    });

    main();
};
start();


