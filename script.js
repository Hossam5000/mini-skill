// vars & cons
const Lis = document.querySelectorAll("ul li");
const selected = document.querySelector(".selected");

const regex = new RegExp(/\bfox\b/g);
let str = `A quick fox profox foxation can run very fast
so any fox can run slowly and foxy trifox can't catch it.
`;
// logic
selected.style.backgroundColor = "green";
selected.style.color = "white";


// test
console.log(str.match(regex));
