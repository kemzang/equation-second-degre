function calculerEquation() 
{
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      document.getElementById('resultat').innerHTML = "Veuillez entrer des valeurs numériques valides pour a, b et c.";
      return;
    }
  
    var discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      document.getElementById('resultat').innerHTML = "Les solutions sont x1 = " + x1.toFixed(2) + " et x2 = " + x2.toFixed(2);
    } else if (discriminant === 0) {
      var x = -b / (2 * a);
      document.getElementById('resultat').innerHTML = "La solution double est x = " + x.toFixed(2);
    } else {

      var reel = -b / (2 * a);
      var imaginaire = Math.sqrt(Math.abs(discriminant)) / (2 * a);
      var solution1 = reel.toFixed(2) + " + " + imaginaire.toFixed(2) + "i";
      var solution2 = reel.toFixed(2) + " - " + imaginaire.toFixed(2) + "i";
      document.getElementById('resultat').innerHTML = "Les solutions sont des nombres complexes : " + solution1 + " et " + solution2;
      var normeSolution1 = calculerNorme(solution1);
      //document.getElementById('resultatNorme').innerHTML = "La norme de la solution 1 est : " + normeSolution1;
    }
}

function calculerNorme(nombreComplexe) {
  // Séparation de la partie réelle et de la partie imaginaire
  var parties = nombreComplexe.split("+");
  var reel = parseFloat(parties[0].trim());
  var imaginaire = parseFloat(parties[1].replace("i", "").trim());

  // Calcul de la norme
  var norme = Math.sqrt(reel ** 2 + imaginaire ** 2);

  return norme.toFixed(2); // Renvoie la norme avec une précision de deux décimales
}
function actualiserPage() {
    location.reload();
  }
  