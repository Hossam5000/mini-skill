// vars & cons
const Lis = document.querySelectorAll("ul li");
const selected = document.querySelector(".selected");
const date = new Date(2025, 10, 21, 9, 0, 0, 0);
const regex = new RegExp(/abc/);
let str = "Hi, what is your abc";
// logic
selected.style.backgroundColor = "green";
selected.style.color = "white";


// test
console.log(str.match(regex));
