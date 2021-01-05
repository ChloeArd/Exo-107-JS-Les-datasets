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
liste = ["chocolat", "fraise", "poireau"];
p3.innerHTML += " : " + liste;
if (booleen === "true"){
    p4.innerHTML += " : " + "La valeur est vraie";
}
else {
    p4.innerHTML += " : " + "La valeur n'est pas vraie";
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

