x= Number(prompt("whats your salary?"));
if(x>=15000 && x<=30000){
    console.log("thats medium");
}
else if(x>=30001){
    console.log("thats rich in india");
}
else if(x<=14099){
    console.log("bro is poor");
}
else{
    console.log("bro is rich");
}

const Z= prompt("Whats your name?");
let Y = Number(prompt("write your marks here"));
if(Y>90){
    document.getElementById("mark").innerHTML = Z +", You Got A! ";
    alert("Nice Work Champ");
    console.log(`${Z} you got A`);
}
else if(Y<=89 && Y>=80){
    document.getElementById("mark").innerHTML = Z +", You Got B! ";
        alert("Nice Work Champ");
    console.log(`${Z} you got B`);
}
else if(Y<=79 && Y>=70){
    document.getElementById("mark").innerHTML = Z +", You Got C! ";
        alert("Nice Work Champ");
    console.log(`${Z} you got C`);
}
else if(Y<=69 && Y>=60){
    document.getElementById("mark").innerHTML = Z +", You Got D ";
        alert("you need improvement");
    console.log(`${Z} you got D`);
}
else{
    document.getElementById("mark").innerHTML = Z +", You Failed ";
        alert("Failure");
    console.log(`${Z} you Failed`);
}

/*switch cases*/

let color = prompt("enter your favourate color");
switch(color){
    case("Yellow"):
    alert("is it really yellow?");
    console.log(color);
    break;
    case("maroon"):
    alert("is it really maroon?");
    console.log(color);
    break;
    case("red"):
    alert("is it really red?");
    console.log(color);
    break;
    case("black"):
    alert("is it really black?");
    console.log(color);
    break;
    default:
    alert("poor boy");
    console.log("No color from the list");
    break;

}