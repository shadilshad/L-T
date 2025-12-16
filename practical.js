const my_heading = document.getElementById("headinga");

if (my_heading) {
    const new_heading = document.createElement("h2");
    const new_paragraph = document.createElement("p");

    new_heading.innerHTML = "Hey, Guys! I changed this heading with JavaScript";
    new_paragraph.innerHTML = "Best idh ingane aayirunno";

    my_heading.append(new_heading, new_paragraph);
}

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5"); // FIXED

let click_count = 0;

btn1.addEventListener("click", function (e) {
    click_count++;
    alert(`You clicked this button for ${click_count} times!`);
});

btn2.addEventListener("mouseenter", function () {
    this.innerHTML = "you have entered the button";
});
btn2.addEventListener("mouseleave", function () {
    this.innerHTML = "you have left the button";
});

function putName() {
    let name = prompt("whats your name?");
    this.innerHTML = `Aiwa! ${name} is here`;
    this.style.background = "wheat";
    this.style.color = "blue";
}

btn3.addEventListener("click", putName);
btn4.addEventListener("click", putName);
