function sayHi(name, mood){
    alert("Hey " + name);
    alert("I understood you are "+mood);
}
let userName = prompt("whats your name?");
console.log("the name of the person is "+userName);
let userMood = prompt("what is your mood now? ");
console.log("the person is feeling "+userMood);
sayHi(userName, userMood)



function Hello(name, age, grade, mood){
    alert(`Hello Mr/Miss ${name}`);
        if(age<=10){
        alert("Welcome here Cutie ");
    }
    else if(age<=20 && age>=11){
        alert("A teenager is here!!");
    }
    else{
        alert("Welcome Bhai/didi");
    }
    alert(`nice! you are in ${grade} My ${name}`);
    alert(`i understood that tou are feeling ${mood}`);
}
let secondName = prompt("whats your name?");
console.log("the given nmae is "+ secondName);
let secondAge = Number(prompt("How old are you?"));
console.log(`the user is just ${secondAge} old`);
let secondGrade =prompt("Whats is your grade?");
console.log(`the user got ${secondGrade} `);
let secondMood = prompt("May i know ur current mood?");
console.log(`the user is just feeling ${secondMood} `);
Hello(secondName, secondAge, secondGrade, secondMood);



function sed(number){
    alert(`multiplying  with ${number}`);
    return number*5;
}
let userNumber= Number(prompt("write a number to multiply it with 5"));
let result = sed(userNumber);
console.log(`the written number is ${userNumber} and the multiplied number is ${result}`);
    alert(`gets ${result}`);


