

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion) {
  this.direccion=direccion;
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
 

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if(this.direccion=="horizontal"){
    this.x+=this.velocidad
  }


  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }

  if(this.direccion=="vertical"){
    this.y+=this.velocidad
  }
  
  
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.velocidad *= -1;
  }
 
  


}

ZombieConductor.prototype.atacar=function(jugador){
  jugador.vidas=0

}



/* Completar creacion del ZombieConductor */



/* Completar metodos para el movimiento y el ataque */
