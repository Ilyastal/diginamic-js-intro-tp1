var nbr = prompt("Choisir un chiffre :");
function fibonacci(nbr) {
   var x1 = 0;
   var x2 = 1;
   var somme = 0;
    document.write(" element 1 = " + x1 + "<br/>");
    document.write(" element 2 = " + x2 +"<br/>");
   for(let i = 2; i <= nbr; i++){
      somme = x1 + x2; 
      x1 = x2; 
      x2 = somme; 
      document.write(" element " + i + " = " + somme+"<br/>");
   }
}
fibonacci(nbr);