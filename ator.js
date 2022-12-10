let yAtor=366;
let xAtor=85;
let colisao = false;
let meusPontos=0;

function mostraAtor(){
   image(imagemDoAtor,xAtor,yAtor,30,30)
}
//movimentando o Ator
function movimentaAtor(){
if(keyIsDown(UP_ARROW)){
   yAtor-=3
   }
if (keyIsDown(DOWN_ARROW)){
  if(podeSeMover()){
  yAtor+=3;
  }
}
}

//verificando a colisao com o CollideRectCircle
function verificaColisao(){
  for(let i=0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
    if(colisao){
     colidiu();
        somDaColisao.play();
      if(pontosMaiorqueZero()){
        meusPontos-=1;
      }
    }
  }
}

function colidiu(){
  yAtor=366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos,width / 5,27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    colidiu();
    somDoPonto.play();
  }
}

function pontosMaiorqueZero(){
  return meusPontos >0
}

function podeSeMover(){
  if(yAtor < 366){
    return yAtor <366;
  }
}