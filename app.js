const { requestInput } = require('./helpers/request_input');
const { calculateSum } = require('./helpers/calculate_sum');

const main = () => {
    let list = '';
    
    requestInput('Enter the list of numbers separated by commas (,):')
    .then((value) => {
        list = value;
        
        return requestInput('Enter criteria number for sum:', true);
    })
    .then(
        (value) => calculateSum(list,value)
    );
};

main();