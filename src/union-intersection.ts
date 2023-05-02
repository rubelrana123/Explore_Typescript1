type NoobDeveloper = {
    name : string;

};
type JuniorDeveloper = NoobDeveloper &  {
    
    expertise : string;
    experience : number;
}
// enum Level {
//     Junior, Mid, Pro
// }
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number,
    level : "Junior" | "Mid" | "Pro"
//   level : Level
}
const  newDeveloper : NoobDeveloper | JuniorDeveloper = {
    name : "Rana",
    expertise : "Javascript",
    experience : 1,
    // level : 2
}
const  developer : NextLevelDeveloper = {
    name : "Hello ",
    expertise : "Typescript",
    experience : 5,
    leadershipExperience : 1,
    level : "Mid"
}
console.log(newDeveloper);
console.log(developer);