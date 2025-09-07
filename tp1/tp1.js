//https://youtu.be/qri5kwV68go?si=nzEN_zo0BVDkRzHc
//tp1:reconstruccion en p5.js - comisión 4
//Rodrigo Ezequiel Rodriguez - legajo 122865/2



let estado = 0;
let tamcircle = 70;
let tamcircle2 = 70;
let tamcircle3 = 90;
let obra;

// Patrón de colores 
  let verde, verde1, verde2, azul, azul2, celeste, celeste2;

//cambio de color
  let CELESTE, CELESTE2, VERDE, CIAN;
 
  let apreto = false;
  let apreto2 = false;
  let reinicio = false;
 
  function preload() {
  obra = loadImage("pintura.jpg");
}

 function setup() {
 createCanvas(800,400);

// Patrón de colores 
 verde = color(40,140,100);   //verde
 verde1 = color(40,200,100);  //verde agua
 verde2 = color(20,70,40);    //verde oscuro
 azul = color(0,0,160);       //azul
 azul2 = color(20,0,100);     //azul oscuro
 celeste = color(0,200,215);   //celeste
 celeste2 = color(120,200,215);  //celeste opaco

//cambio de color
 CELESTE = color(120,200,215);
 CELESTE2 = color(120,200,215);
 VERDE = color(40,200,100);
 CIAN = color(0,200,215);
 
 //estado
 estado = 0;
}

  function draw() {
  background(199);
  image(obra,0,0,420,400);
  noStroke();
  
//inicio
  for(let j=0; j<3 ; j++){
  for(let i=0; i<3 ; i++){
  if (j == 0 && i == 0){
     fill(verde2);
  }
    if (j == 0 && i == 1){
      fill(azul);
  }
    if (j == 0 && i == 2){ 
      fill(azul2);
  }
    if (j == 1 && i == 0){
      fill(verde);
  }
    if (j == 1 && i == 1){
      fill(celeste);
  }
    if (j == 1 && i == 2){
      fill(azul);
  }
    if (j == 2 && i == 0){
      fill(verde1);
  }
    if (j == 2 && i == 1){
      fill(verde);
  }
    if (j == 2 && i == 2){
      fill(CELESTE);
  }
  rect(460 + i*100, 27 + j*100 ,100,100);
 }
}
  for(let r=0; r<3 ; r=r+1){
  fill(azul);
  rect(460 + r*100 ,327,100,26);
  
}
  
  for(let k=0; k<3 ; k++){
  if(k == 0) {
    fill(CELESTE2);
 }
  if(k == 1){
    fill(celeste);
 }
  if(k == 2){
    fill(verde2);
 }
  rect(560, 53 + k*100 ,100,100);
 
 }
    // Figuras
   
 vibracionTriangulo(710,73,50, verde2, -40, -23, 40, -23, 0, 47); //triangulo columna 3 fila 1
  
 vibracionTriangulo(710,183,50,verde,-40,22,40,22,0,-43); //triangulo columna 3 fila 2
 
 
  fill(CIAN);
  rect(685,252,50,50);  //rectangulo columna 3 fila 3
  
  
  fill(VERDE);
  rect(585,79,50,50);  //rectangulo columna 2 fila 1
  
  
  tamcircle3= tamañoCirculo(610,203,tamcircle3,50,90,60);
  fill(verde1);
  circle(610,203,tamcircle3); //circulo columna 2 fila 2
  
  
  
  tamcircle2 = tamañoCirculoCrece(610, 304, tamcircle2, 70, 95, 60);
  fill(20,40,40);
  circle(610, 304, tamcircle2); //circulo columna 2 fila 3
  
 
  tamcircle = tamañoCirculoCrece(510, 77, tamcircle, 70, 90, 60);
  fill(azul2);
  circle(510, 77, tamcircle); //circulo columna 1 fila 1 
  
  
  vibracionTriangulo(510,172,50,azul,-38,-22,38,-22,0,45); //triangulo columna 1 fila 2
  
  
  vibracionTriangulo(510,283,50,celeste2,-37,22,38,22,0,-44);  //triangulo columna 1 fila 3
  
  if(apreto){
  VERDE=color(120,200,215);
  CELESTE2=color(40,200,100);
  }  
 if(apreto2){
  CELESTE=color(0, 200, 215);
  CIAN=color(120,200,215);
 }
 if(reinicio){
   VERDE=color(40,200,100);
   CELESTE2=color(120,200,215);
   CELESTE=color(120,200,215);
   CIAN=color(0, 200, 215);
 }
  apreto=false;
  apreto2=false;
  reinicio=false;
 }
 
 
 function mouseClicked(){
 if (mouseX >= 0 && mouseX <= 420 && mouseY >= 0 && mouseY <= 400) {
    estado = 0;
   reinicio=true;
 }
   
if (mouseX >= 585 && mouseX <= 585 + 50 && mouseY >= 79 && mouseY <= 79 + 50) {
   apreto=true;}
   
if (mouseX >= 685 && mouseX <= 685 + 50 && mouseY >= 252 && mouseY <= 252 + 50) {
    apreto2=true;}
 }
