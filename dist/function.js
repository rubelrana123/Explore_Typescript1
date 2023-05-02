"use strict";
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 5);
add(2, 9);
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 3, 4, 5, 6];
const newArr = arr.map((elem) => elem * elem);
const person = {
    name: "R ubel",
    balance: 10,
    addBalance(money) {
        return this.balance + money;
    }
};
//spread operator
const friends = ['alas', "tom", 'rose', 'jack'];
const newfriend = ['mita', 'rupali', 'fultosi'];
friends.push(...newfriend);
