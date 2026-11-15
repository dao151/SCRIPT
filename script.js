/ ============================================================
// Fonctions de manipulation de chaînes
// ============================================================

// Inverser une chaîne
function inverserChaine(chaine) {
  return chaine.split("").reverse().join("");
}

// Compter les caractères (espaces inclus)
function compterCaracteres(chaine) {
  return chaine.length;
}

// Mettre la première lettre de chaque mot en majuscule
function mettreMotsEnMajuscules(phrase) {
  return phrase
    .split(" ")
    .map((mot) => (mot ? mot[0].toUpperCase() + mot.slice(1).toLowerCase() : mot))
    .join(" ");
}

// ============================================================
// Fonctions sur les tableaux
// ============================================================

// Trouver le maximum
function trouverMax(tableau) {
  if (tableau.length === 0) return undefined;
  let max = tableau[0];
  for (const n of tableau) {
    if (n > max) max = n;
  }
  return max;
}

// Trouver le minimum
function trouverMin(tableau) {
  if (tableau.length === 0) return undefined;
  let min = tableau[0];
  for (const n of tableau) {
    if (n < min) min = n;
  }
  return min;
}

// Somme des éléments d'un tableau
function sommeTableau(tableau) {
  return tableau.reduce((total, n) => total + n, 0);
}

// Filtrer un tableau selon une condition (fonction passée en paramètre)
function filtrerTableau(tableau, condition) {
  const resultat = [];
  for (const element of tableau) {
    if (condition(element)) resultat.push(element);
  }
  return resultat;
}

// ============================================================
// Fonctions mathématiques
// ============================================================

// Factorielle : n! = n × (n-1) × ... × 1  (0! = 1)
function factorielle(n) {
  if (!Number.isInteger(n) || n < 0) return undefined;
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

// Vérifier si un nombre est premier
function estPremier(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Suite de Fibonacci : renvoie les `nbTermes` premiers termes
// (0, 1, 1, 2, 3, 5, 8, ...) où chaque terme = somme des deux précédents
function fibonacci(nbTermes) {
  const suite = [];
  for (let i = 0; i < nbTermes; i++) {
    suite.push(i < 2 ? i : suite[i - 1] + suite[i - 2]);
  }
  return suite;
}

// ============================================================
// Tests
// ============================================================

console.log("--- Chaînes ---");
console.log(inverserChaine("bonjour"));                   
console.log(compterCaracteres("Bonjour le monde"));             
console.log(mettreMotsEnMajuscules("bonjour le monde"));         

console.log("--- Tableaux ---");
const nombres = [4, 9, 2, 17, 6];
console.log(trouverMax(nombres));                                
console.log(trouverMin(nombres));                                
console.log(sommeTableau(nombres));                              
console.log(filtrerTableau(nombres, (n) => n % 2 === 0)); 

console.log("--- Maths ---");
console.log(factorielle(5));                                     
console.log(estPremier(7), estPremier(10));                      
console.log(fibonacci(10));                                      
