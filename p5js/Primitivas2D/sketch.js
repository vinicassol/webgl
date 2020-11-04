function setup() {

  // Cria o canvas (posicoes de -350 px ateh 350 px) e define o uso da WEBGL
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(222);

  fill(0, 0, 255); // define a cor da caneta para azul

  rectMode(CENTER); // define a posição do pivo
  rect(0,0,150,50); // desenha retangulo na posição (X,Y) com tamanho (W, H);
  square(-300,20, 60); //desenha quadrado na posicao (X,Y) com tamanho (N)
  quad(100, 30, 150,20, 130, 60, 90, 75); // desenha quadrilatero, passando o X,Y dos 4 pontos
  triangle(30, 100, 60,40, 85, 100);

  line(3,260, 300, 260); // desenha linha entre dois pontos (X,Y)

  fill('blue'); //Muda a cor para roxo
  circle(30, -100, 50); //Desenha um circulo roxo na posicao (X,Y) com diametro (D);

  fill('orange');
  ellipse(100, -100, 35, 100); //Desenha elipse, na posicao (X,Y) com tamanho (W, H);

  strokeWeight(30); // define a expessura da linha
  point(0,200); //desenha um ponto na posicao XY
  strokeWeight(1); // retorna para a expessura "normal"
}
