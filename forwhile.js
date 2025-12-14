for(let i=0; i<10; i++){
    console.log("hello shadil");
    console.log("ahhahaha " + i);
}
for(j=10; j>0; j--){
    console.log("count me from back "+j )
}

let even= prompt("how many even number would you like to display?");
for(let k=2 ; k<=even*2 ; k+=2){
    console.log("even number"+k);
}
let colors=["purple","orange","magenta"];
for(let color of colors){
    console.log(color)
}

for(i=0;i<11;i++){
    console.log( i + " X 1"  + " = " + i*1);
    console.log( i + " X 2"  + " = " + i*2);
    console.log( i + " X 3"  + " = " + i*3);
    console.log( i + " X 4"  + "=" + i*4);
    console.log( i + " X 5"  + "=" + i*5);
    console.log( i + " X 6"  + "=" + i*6);
    console.log( i + " X 7"  + "=" + i*7);
    console.log( i + " X 8"  + "=" + i*8);
    console.log( i + " X 9"  + "=" + i*9);
    console.log( i + " X 10"  + "=" + i*10);


}

/*while loops*/
let r=0;
while(r<5){
    console.log(r);
    r++
}

let state= "yes";
while(state == "yes"){
    state=prompt("yes/no");
    console.log("alright");
}
console.log("thankyou");