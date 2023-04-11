require('colors');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const requestInput = (message, closeQuestion = false) => {
    return new Promise(
        (resolve, reject) => {
            readline.question(`${message}\n`.green, (value) => {

                if(closeQuestion){
                    readline.close();
                }

                resolve(value);
            });
        }
    );
}

module.exports = {
    requestInput
};