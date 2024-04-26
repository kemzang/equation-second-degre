var norme;

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
      norme= normeSolution1;
      //document.getElementById('resultatNorme').innerHTML = "La norme de la solution 1 est : " + normeSolution1;
    }
    beginAnimation()
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

  function beginAnimation(){
    var dinisaur=document.getElementById("dinosaur");
    var b=true;
    var v=translat(norme);
    InitialiseAnimation(dinisaur,b,v)
    setAnimation(dinisaur,b);
    console.log("b")   
  }
  

  function setDay(){
    var area=document.getElementById("area")
    area.style.cssText="background: linear-gradient(rgb(243, 243, 118),white)";
    document.getElementById("astre").setAttribute("src","sunny.png")
    beginAnimation();
        
}

function setNight(){
    var area=document.getElementById("area")
    area.style.cssText="background: linear-gradient(rgb(76, 76, 105),rgb(172, 172, 204),white)";
    document.getElementById("astre").setAttribute("src","moon.png") 
    beginAnimation();
}

function InitialiseAnimation( dinisaur,b,v){
  var area=document.getElementById("area");
  area.style.cssText="visibility: visible ";
    if(b==true){
      dinisaur.style.cssText="position: relative; left: 5px;";
      dinisaur.style.cssText= " transition: "+v+"s ease-in-out ;";
      dinisaur.setAttribute("src","runnig.gif");
    }else{
      dinisaur.style.cssText=" position: relative ; left: 80%; transition: "+v+"s ease-in-out" ;
      dinisaur.setAttribute("src","R.gif");
    }
    //dinisaur.style.cssText="position: relative; left: 10%;";
     
}

function translat( nb){
    return nb%10 +1;
}

function setAnimation(dinisaur,b){
    if(b)
      dinisaur.style.cssText=" transform: translateX(1500px)";
    else
    {
      dinisaur.style.cssText=" transform: translateX(70%)";
    } 
}
  