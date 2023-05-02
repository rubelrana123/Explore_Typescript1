// function add(num1 : number, num2 : number = 10) : number {
//     return num1 + num2;
// }
// add(2,5)
// add(2,9);
// const addArrow = (num1 : number, num2 : number) : number => num1 + num2;
// const arr = [1,3,4,5,6];
// const newArr = arr.map((elem : number) => elem*elem)



// const person : {
//     name : string,
//     balance : number,
//     addBalance  (money : number) : number;
// } = {
//     name : "R ubel",
//     balance : 10,
//     addBalance(money : number) {
//         return this.balance + money
//     }
// }
//spread operator
// const friends : string[] = ['alas', "tom",'rose', 'jack'];
// const newfriend : string[] = ['mita', 'rupali', 'fultosi'];
// friends.push(...newfriend);
// console.log(friends)
//rest paramentr
// const greetFriend = (...friends : string[]) : void => {
//     friends.map(friend => console.log(friend))
// }
// greetFriend("Rubel", "Rana","Joshim");
// const myFriends : string[] = ['alas', "tom",'rose', 'jack'];

// const [bestfriend] = myFriends;
// console.log(bestfriend);
const myBestFriend  = {
    fullName : "Abul Bashar",
    age : 14,
};
const { fullName , age} = myBestFriend;
console.log(fullName)