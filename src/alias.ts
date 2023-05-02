type OperationType = (x : number, y :number) => number
const calculate = (number1 : number,
     number2 : number,
      operation : OperationType
      ) => {
    return operation(number1, number2);
}
const result = calculate(12,25, (x,y) => x +y );
console.log(result)
// type NameType = string;    
// const herName : NameType = "Rubel";
// console.log(herName)
// type CrushType = {
//     name : string,
//     age? : number,
//     profession : string,
//     address : string
// }
// const crush1 : CrushType = {
//     name : "Rana",
//     age : 52,
//     profession : "developer",
//     address : "bd"
// };

// const crush2 : CrushType  = {
//     name : "RRR",
//     profession : "developer",
//     address : "india"
// }
// console.log(crush1, crush2)