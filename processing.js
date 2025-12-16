const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

const click_coords = document.getElementById("click_coords");
const hover_coords = document.getElementById("hover_coords");


let click_count = 0;

btn1.addEventListener("click", function (my_event) {
    click_count ++;
    alert("you clicked this " + click_count + " times!");
    console.log(my_event);
});

btn2.addEventListener("mouseenter", function(e){
    btn2.innerHTML="you have entered the button";
    console.log(e);
})
btn2.addEventListener("mouseleave", function(e){
    btn2.innerHTML = "you have left the button";
    console.log(e);
})

/*
we can write our function seperately and then target it with
an eventlistner. we can reference the element the listener is 
attached to with 'this' keyword
*/

function putName(e){
    let name = prompt("whats your name sir?");
    this.innerHTML = `Hey ${name} Click Here`;
    this.setAttribute("style", "background: wheat; color:black;");
}
btn3.addEventListener("click" , putName);
btn4.addEventListener("click" , putName);


function ChangeColor(e){
    let colors = ["yellow", "orange","blue","white","red"];
    var randomColor = colors[Math.floor(Math.random()*colors.length)]
    this.style.backgroundColor = randomColor;
}
btn5.addEventListener("click", ChangeColor);