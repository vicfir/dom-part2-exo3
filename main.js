console.log(document.querySelector("#content"));

console.log(document.querySelectorAll("#content"));

console.log(document.querySelector(".important"));

console.log(document.querySelectorAll(".important"));

let liste = Array.from(document.getElementsByTagName("li"));
console.log(liste);
liste.forEach(element => {
    console.log(element.textContent.slice(0, element.textContent.length -1) + element.textContent.charAt(element.textContent.length -1).toUpperCase());
});

let content = document.getElementById("content");
let grandPara = content.getElementsByClassName("grandParagraphe");
console.log(grandPara);