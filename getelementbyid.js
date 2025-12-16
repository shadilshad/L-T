const main = document.getElementById("main");

const new_main = document.createElement("h2");
const new_para = document.createElement("p");

main.append(new_main);
main.append(new_para);

new_main.innerHTML = "enthelum okk aavalo";
new_para.innerHTML= "enik pedi ond but ath ok aannen njan vishwasikkaam";


const ok_ah= document.getElementsByClassName("ok_ah");
for(ok of ok_ah){
ok.style.color= "red";
ok.style.background="yellow";
}