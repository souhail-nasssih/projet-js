//exercice :1

function somme(a, b) {
  return a + b;
}



let resultat1 = somme(1, 3);
console.log(resultat1);

// excercice 2:

function minute(m) {
  return m * 60;
}
let resultat2 = minute(6);
console.log(resultat2);

// exercice 3:
function nombre(n) {
  return n + 1;
}
let resultat3 = nombre(6);
console.log(resultat3);

// exercice 4:
function triangle(b, h) {
  return (b * h) / 2;
}
let surface = triangle(7, 3);

console.log(surface);

// exercice 5 :

// une fuction qui permet de renverser une chaine de caratcter
function renverser(chaine) {
  let chaineIverser = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    chaineIverser += chaine[i];
  }
  return chaineIverser;
}

let resultat4 = renverser("kamal");
console.log(resultat4);

// exercice 6:

function grande(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
let resultat5 = grande(10, 9, 7);
console.log(resultat5);

// exercice : 7
function tableau(nbr) {
  return nbr[0];
}
let resultat6 = tableau([30, 20, 50, 40]);
console.log(resultat6);

// exercice : 8
// let url = window.location.href;
// console.log(url);


// exercice : 9

function reste(nbr1, nbr2) {
  if (nbr2 == 0) {
    return "impossible de deviser a zero";
  }
  return nbr1 % nbr2;
}
let resultat7 = reste(9000, 7);
console.log(resultat7);

// serie 2:
// exercice 1:
let a = 'a';
let b = 'b';
console.log(typeof(a));
console.log(typeof(b));

// function verifier(a,b){
//   if(typeof){
  
//   }


// }