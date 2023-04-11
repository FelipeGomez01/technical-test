require('colors');

const calculateSum = (list, criteria) => {
    let regExp = /[a-zA-Z]/g;
            
    if(regExp.test(list) || regExp.test(criteria)){
        console.log('please only enter numeric values'.red);
        return;
    }

    list = list.trim().split(',').map(Number);

    let comparisonList = [...list];

    list.forEach((number) => {
        let index = comparisonList.indexOf(number);
        comparisonList.splice(index,1);

        comparisonList.forEach((secondNumber) => {
            if(criteria == (number + secondNumber)){
                console.log(`${'->'.blue} ${number} ${'+'.blue} ${secondNumber}`);
            }
        });
    });
}

module.exports = {
    calculateSum
};