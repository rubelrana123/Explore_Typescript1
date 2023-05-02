const boyos : number = 22;

const isAdult = boyos >= 18 ? "adult" : "child";
console.log(isAdult)


type Manus = {
    name : string;
    age : number;
    address : {
        city : "No City",
        road : "No Road",
        home? : ''
    };
};

const manus1 : Manus ={
    name : "Manus",
    age : 100,
    address : {
        city : "No City",
        road : "No Road"

    }

}
const home = manus1.address.home  ?? "no Home";
console.log(home)