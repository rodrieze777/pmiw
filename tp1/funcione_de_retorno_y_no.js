function vibracionTriangulo(x, y, r, c, x1, y1, x2, y2, x3 ,y3 ) {
let vibX = 0;
let vibY = 0;

if(dist(mouseX, mouseY, x, y) < r) {
   vibX = random(-1.5, 1.5);
   vibY = random(-1.5, 1.5);
}
push();
translate(x + vibX, y + vibY);
fill(c);
noStroke();
triangle(x1, y1 ,x2 , y2, x3, y3);
pop();
}
function tamañoCirculo(x, y, tamActual, tamMin, tamMax, distanciaRef ){

  let d = dist(mouseX, mouseY, x, y);
  
  
  if(d < distanciaRef) {
    let newTam = map(d, 0, distanciaRef, tamMin, tamMax);
    if (tamActual > newTam + 0.5){
      tamActual -= (tamActual - newTam) * 0.2;
    } else if (tamActual < newTam - 0.5) {
      tamActual += (newTam - tamActual) * 0.2;
    }else{
      tamActual = newTam;
    }
  } else {
    if (tamActual < tamMax - 0.5) {
     tamActual += (tamMax - tamActual) * 0.2;
    }else if (tamActual > tamMax + 0.5) {
      tamActual -= (tamActual - tamMax) * 0.2;
    } else {
      tamActual = tamMax;
    }
  }
  return tamActual;
}
function tamañoCirculoCrece(x, y, tamActual, tamMin, tamMax, distanciaRef ){

  let d = dist(mouseX, mouseY, x, y);
  
  if(d < distanciaRef) {
    let newTam = map(d, 0, distanciaRef, tamMax, tamMin);
    if (tamActual > newTam + 0.5){
      tamActual -= (tamActual - newTam) * 0.2;
    } else if (tamActual < newTam - 0.5) {
      tamActual += (newTam - tamActual) * 0.2;
    }else{
      tamActual = newTam;
    }
  } else {
    if (tamActual < tamMin - 0.5) {
     tamActual += (tamMin - tamActual) * 0.2;
    }else if (tamActual > tamMin + 0.5) {
      tamActual -= (tamActual - tamMin) * 0.2;
    } else {
      tamActual = tamMin;
    }
  }
  return tamActual;
}
