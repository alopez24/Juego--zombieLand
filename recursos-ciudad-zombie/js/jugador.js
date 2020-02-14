/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover:function(x,y){
    this.x+=x
    this.y+=y
    
    
  },

  perderVidas:function(contador){
    this.vidas-=contador
    
    console.log("VIDAS EN EL JUGADOR",this.vidas)

  },

  frenar:function(){
    this.velocidad=0
  }
  

}
