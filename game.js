function age(realage){
    let userage;

    while(true){
        userage = Number(prompt("Guess My age!"));
        if(userage===realage){
            alert(`Woah! Yes, I am ${userage}`);
            break;
        }
        else if(userage<=15){
            alert(`I am too old to be ${userage}`);
        }
        else if(userage<=21){
            alert(`try a bit higher because i aint ${userage}`);
        }
        else{
            alert(`no, i am not that old, i am not ${userage}`)
        }

    }
}
age(22);
let playAgain="yes";
while(playAgain==="yes"){
playAgain= prompt("do u wanna play again? (yes/no)" );
if(playAgain.toLocaleLowerCase==="No"){
    alert("thanks for playing");
    break;
}
else{
    age(24);
}}