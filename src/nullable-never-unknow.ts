// const searchName = (value : string | null ) => {
//     if(value === null) {
//         console.log("there is nothing serach");
//     }
//     else {
//         console.log("searching")
//     }
// }
// searchName(null)
// const myCarSpeed = (speed : unknown) => {
//     if(typeof speed === "number") {
//         const convertedSpeed = (speed * 1000) / 3600;
//         console.log(`My Speed is ${convertedSpeed}`)

//     }
//     if(typeof speed === "string"){
//         const [value , unit] = speed.split(" ");
         
//         const convertedSpeed = ( parseFloat(value) * 1000) / 3600;
//         console.log(`My Speed is ${convertedSpeed} ${unit}`)
//     }
//     else {
//         console.log("there is wrong type")
//     }
// }
// myCarSpeed(12)

function thowError (message : string) : never {

    throw new Error (message); 
}

thowError("error hoiche")