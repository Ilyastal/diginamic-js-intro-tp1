let x = 20;
function fibonacci(nbr) {
    var x1 = 0;
    var x2 = 1;
    var somme = 0;
    console.log(" element 1 = " + x1 );
    console.log(" element 2 = " + x2 );
    for(let i = 2; i <= 20; i++){
        somme = x1 + x2; 
        x1 = x2;
        x2 = somme; 
     console.log(" element " + i +"  = " +  somme);
    }
 }
 fibonacci(x);