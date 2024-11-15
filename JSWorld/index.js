// console.log("hi there");

// let a = 12
// console.log(a)

// arr =[1,2,34,5,6]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// function sum(a,b){
//     var sum = a+b;
//     return sum;
// }

// console.log("sum is : " + sum(3,5));

// function cCompiler(){
//     return "c compiler";
// }
// function JavaCompiler(){
//     return "java compiler"
// }

// function selectLanguage(clbk){
//     console.log( "you need to select lang first " + clbk);
// }

// selectLanguage(JavaCompiler())
// function JavaCompiler(){
//     return "Hi there from Java";
// }
// function CCompiler(){
//     JavaCompiler();
//     console.log("hi there from CCompiler");
// }

// let ans = CCompiler();
// console.log(ans);

console.log(document);
const div = document.getElementsByClassName("container");
console.log(div);
div[0].innerText="Name";
div[0].innerHTML="<h2 style=color:red>Abhishek</h2>";

const h1=document.createElement("hello");
h1.innerText="Kuch nahi India ki batting dekh raha";
h1.style.backgroundColor="yellow";
h1.style.color-"green";
div[0].appendChild(h1);
console.log(h1);

const img = document.createElement('img');
img.src='cat.jpg';
img.setAttribute("height","300px");
console.log(img);
div[0].appendChild(img);


const button = document.getElementsById("btn");
console.log(button);
const display = document.getElementById("disp");
console.log(display);
function getData(){
    console.log("calling getData function");
    display.innerHTML="Abhi bhi match dekh raha";
    
}
// const button = document.getElementById("btn");
// console.log(button);

// const display = document.getElementById('disp');
// console.log(display);
// function getData() {
//     console.log("calling getdata function");
//     display.innerHTML = "<h3 style=color:red>Abhi bhi dekh raha</h3>"
// }

// button.addEventListener("click",getData);




