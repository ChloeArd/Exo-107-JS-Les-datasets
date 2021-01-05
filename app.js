// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

let number = p1.dataset.number;
let string = p2.dataset.string;
let liste = p3.dataset.liste;
let booleen = p4.dataset.booleen;

p1.innerHTML += " : " + number;
p2.innerHTML += " : " + string.length;
liste = [liste];
p3.innerHTML += " : " + liste;
if (booleen === "true"){
    p4.innerHTML += " : " + "La valeur est vraie";
}
else {
    p4.innerHTML += " : " + "La valeur n'est pas vraie";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
p5.dataset.number2 = "10";
p5.innerHTML += "-> " + p5.dataset.number2;

let p6 = document.getElementById('p6');
let string2 = p6.dataset.string2 = "blablacar";
p6.innerHTML += "-> " + string2.length;

let p7 = document.getElementById('p7');
p7.dataset.liste2 = ["chocolat", "fraise", "poireau"];
p7.innerHTML += "-> " + p7.dataset.liste2;

let p8 = document.getElementById('p8');
let booleen2 = p8.dataset.booleen2 = "true";
if (booleen2 === "true"){
    p8.innerHTML += "-> " + "La valeur est vraie";
}
else {
    p8.innerHTML += "-> " + "La valeur n'est pas vraie";
}





