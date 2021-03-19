// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
  
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var result = {};

  for(var i = 0; i < string.length; i++){
    var c = string.charAt(i);
    if(result[c] == null){
      result[c] = 1;
    } else {
      result[c]++;
    }
  }
  return result;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arr = Array.from(s);
  var mayusculas = arr.filter(a => a === a.toUpperCase());
  var minusculas = arr.filter(a => a === a.toLowerCase());
  return mayusculas.concat(minusculas).join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var frase = str.split(' ');
  var fraseEspejo = '';
  for(var i = 0; i < frase.length; i++){
    for(var j = frase[i].length - 1; j >= 0; j--){
      fraseEspejo += frase[i][j];
    }
    if(i !== frase.length - 1){
      fraseEspejo += ' ';
    }
  }

  return fraseEspejo;


  //var rev = str.split('').reverse().join('');
  /*var rev = Array.from(str).reverse().join('');
  var arrRev =+ rev;
  arrRev.reverse();
  console.log(arrrev);*/

  /*var arrStr = Array.from(str);
  return arrStr.reverse();*/


//  var st = str.split('').reverse().join('');
  //return st;

  //nvifndn
  /*var c = ' ';
  var salida = '';
  for(var i = 0; i < str.length; i++){
    c = str.charAt(i);
    salida += c;
  }

  return salida;*/

  //grgfdfrd
  /*var str1 = '';
  for(var j = str.length; j >= 0; j--){
    str1 = str.charAt(j);
  }
  return str1;*/
 /* var s = '';
  for(var i = str.length; i >= 0; i--){
   s += str.charAt(i);
  }
  return s;*/
  //var array = str.split();
  /*var s = '';
  var n = 0;
  for(var i = str.length - 1; i >= 0; i--){
    //ar.push(array);
    while(s = str.charAt(i)){
      s+= str.charAt(i);
      n++;
    };
  }
  return s;*/
  //var arr = Array.from(str);
  //var l = arr.reverse().join('');
  //return l;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  var arr = num.split('').reverse().join('');
  
  if(num !== arr){
    return 'No es capicua';
  } else {
    return 'Es capicua';
  }
} 


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replace(/([abc])/g, '');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a, b) => a.length - b.length);
} 


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrVacio = [];
  var filtrar = arreglo1.filter(n => arreglo2.includes(n));

  if(filtrar.length > 0){
    return filtrar;
  } else {
    return arrVacio;
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

