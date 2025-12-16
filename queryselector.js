const my_main = document.querySelector("main");
const new_heading = document.createElement("h3");
const new_paragraph = document.createElement("p");

my_main.append(new_heading);
my_main.append(new_paragraph);


new_heading.innerHTML="hello Guys;"
new_paragraph.innerHTML="Welcome home";

const original_heading = document.querySelector("#my_h2");
original_heading.innerHTML = "we are using query selector";
