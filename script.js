// vars & cons
const Lis = document.querySelectorAll("ul li");
const selected = document.querySelector(".selected");

const regex = new RegExp(/[\b]/g);
let str = `You can play the next \b turn on A4 or even at C2, did you hear about A2 and 9S`;
// logic


// test
console.log(str, str.match(regex));
