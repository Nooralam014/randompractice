// const arr = "[ '  1','1 ' ,'5        *  2',      '3 + 2' , '2-5']";

// const withoutSpace = arr.replace(/\s/g, "");
// const withoutBrackets = withoutSpace.slice(2, -2);
// const elements = withoutBrackets.split("','");

// const sum = elements.map(expression => {
//   return eval(expression);
//   }).reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//     });

// console.log(sum)

// let abc = arr;

// abc = abc.replace(/ /g, '')
// abc = abc.replace(/'/g, '')
// abc = abc.replace('[', '')
// abc = abc.replace(']', '')
// const terms = abc.split(',')
// let sum1 = 0
// terms.forEach(term => sum1 += eval(term))

// console.log(sum1);

let arr = "[ '  1','1 ' ,'5        *  2',      '3 + 2' , '2-5']";

arr = arr.replace(/ /g, '').replace(/'/g, '').replace('[', '').replace(']', '').replace(/,/g, '+')

console.log(eval(arr));