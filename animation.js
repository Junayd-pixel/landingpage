

//function js pour défiler sur un élément


/*function scrollWin() {
  window.scrollByPages(1);
}*/


function maFonction() {
  const element = document.getElementById("content");
  element.scrollIntoView();
}

function maFonction2() {
  const element = document.getElementById("content2");
  element.scrollIntoView();
}

function maFonction3() {
  const element = document.getElementById("top");
  element.scrollIntoView();
}

//Image aleatoire
/*
var pos_x = Math.round(Math.random()*4000);


var
pos_y = Math.round(Math.random()*900);
var Obj = document.getElementById("image1")


Obj.style.left = pos_x +"px";

Obj.style.top  = pos_y +"px";


//-- Suivante


pos_x = Math.round(Math.random()*3000);

pos_y = Math.round(Math.random()*900);

Obj = document.getElementById("image2")

Obj.style.left = pos_x +"px";

Obj.style.top  = pos_y +"px";

//Suivant

pos_x = Math.round(Math.random()*3000);

pos_y = Math.round(Math.random()*900);

var Obj2 = document.getElementById("image3")

Obj2.style.left = pos_x +"px";

Obj2.style.top  = pos_y +"px";
console.log(Obj)
console.log(pos_x , pos_y)

//Suivant

pos_x = Math.round(Math.random()*3050);

pos_y = Math.round(Math.random()*900);

var Obj3 = document.getElementById("image4")

Obj3.style.left = pos_x +"px";

Obj3.style.top  = pos_y +"px";

//Suivant

pos_x = Math.round(Math.random()*3000);

pos_y = Math.round(Math.random()*900);

var Obj4 = document.getElementById("image5")

Obj4.style.left = pos_x +"px";

Obj4.style.top  = pos_y +"px";

//Suivant

pos_x = Math.round(Math.random()*3000);

pos_y = Math.round(Math.random()*900);

var Obj5 = document.getElementById("image6")

Obj5.style.left = pos_x +"px";

Obj5.style.top  = pos_y +"px";

//Suivant

pos_x = Math.round(Math.random()*3000);

pos_y = Math.round(Math.random()*900);

var Obj6 = document.getElementById("image7")

Obj6.style.left = pos_x +"px";

Obj6.style.top  = pos_y +"px";

//Suivant

pos_x = Math.round(Math.random()*3000);

pos_y = Math.round(Math.random()*900);

var Obj7 = document.getElementById("image8")

Obj7.style.left = pos_x +"px";

Obj7.style.top  = pos_y +"px";
*/










/*var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}*/