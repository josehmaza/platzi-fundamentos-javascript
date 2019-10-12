
const btnEmpezar = document.getElementById('btnEmpezar')
const azul = document.getElementById('azul')
const rojo = document.getElementById('rojo')
const verde = document.getElementById('verde')
const amarillo = document.getElementById('amarillo')
const rosado = document.getElementById('rosado')
var nombre = prompt("Cual es Tu Nombre");
document.getElementById('nombre').innerHTML=nombre

const UltimoLVL=10

class Juego{ //2) toda la logica de nuestro juego
    constructor(){ //3

            this.inicializar()
            this.generarSecuencia()
            
        setTimeout( this.siguientelvl,500)
        



    }
    inicializar(){//4 ocultar el boton de empezar
        this.inicializar=  this.inicializar.bind(this)
        this.siguientelvl =   this.siguientelvl.bind(this)
        this.elegirColor=this.elegirColor.bind(this) //queda atado al this del juego


        this.toggleBtnEmpezar() //es la funcion de mostrar o quitar boton
      
        this.nivel=1
        this.colores={
            //cuando el atributo y la varieble se llama igual, podemos dejar solo un nombre  (eje:azul:azul =azul)
            azul,
            rojo,
            verde,
            amarillo,
            rosado
        }
    }
toggleBtnEmpezar(){

    if(btnEmpezar.classList.contains('hidden')){
        btnEmpezar.classList.remove('hidden')//se agrega clase de css al boton de empezar
    }else{
        btnEmpezar.classList.add('hidden')//se agrega clase de css al boton de empezar
    }
   
}
    
    generarSecuencia(){//5 Generar el array
        this.secuencia = new Array(UltimoLVL).fill(0).map(n=>Math.floor(Math.random()*4))//nunca ll
        //Floor=redondear hacia abajo (eje: 3.95 = 3)

        

    }

    siguientelvl(){//6 llama a iluminar secuencia
        this.subnivel=0
        this.iluminarSecuencia()
        this.agregarEventosClic()
    }

    NumeroAcolor(numero){//8 trasformar de un numero a un color
        switch(numero){
            case 0:
                return 'azul'
            case 1:
                return 'rojo'
            case 2:
                return 'verde'
            case 3:
                return 'amarillo'
            case 4:
                return 'rosado'
        }

    }

    coloraNumero(color){//13 trasformar de un color a un numero
        switch(color){
            case 'azul':
                return 0
            case 'rojo':
                return 1
            case 'verde':
                return 2
            case 'amarillo':
                return 3
            case 'rosado':
                return 4
        }

    }
    iluminarSecuencia(){//7 recorre el array de la secuancia hasta el nievel donde esta
        for(let i= 0; i< this.nivel;i++){ //en los for mejor utilizar let
            const color=this.NumeroAcolor(this.secuencia[i])//los trae en forma de letra (eje 0=azul)
             setTimeout(()=> this.iluminarColor(color),1000 * i) // se vayya iluminando cada color con tiempo
        }
        

    }

    iluminarColor(color){//9  iluminar color
        this.colores[color].classList.add('light')
        setTimeout(()=> this.apagarColor(color),300)
    }

    apagarColor(color){//10 Quitar la clase de color
        this.colores[color].classList.remove('light')

    }
    agregarEventosClic(){//11 verificar cuando hace clic en el color y obtener el input del usuario que clikeo
        this.colores.azul.addEventListener('click',this.elegirColor)
        this.colores.rojo.addEventListener('click',this.elegirColor)
        this.colores.verde.addEventListener('click',this.elegirColor)
        this.colores.amarillo.addEventListener('click',this.elegirColor)
        this.colores.rosado.addEventListener('click',this.elegirColor)

    }

    eliminarEventoClic(){//14
        this.colores.azul.removeEventListener('click',this.elegirColor)
        this.colores.rojo.removeEventListener('click',this.elegirColor)
        this.colores.verde.removeEventListener('click',this.elegirColor)
        this.colores.amarillo.removeEventListener('click',this.elegirColor)
        this.colores.rosado.removeEventListener('click',this.elegirColor)
        //OJO tambien se puede aplicar el bind de esta manera
        // this.colores.rosado.removeEventListener('click',this.elegirColor.bind(this))
    }

    elegirColor(ev){//12  ver la logica si clikeo bien
        const nombreColor=ev.target.dataset.color // optiene el color de data-color =del html
        const numeroColor= this.coloraNumero(nombreColor) //cambia de color a numero
        this.iluminarColor(nombreColor)

        //comparar el numero del color con la secuencia de iluminación, en la posicion del subnivel
        if(numeroColor ==this.secuencia[this.subnivel]){
             this.subnivel++
            if(this.subnivel===this.nivel){
                
                this.nivel++ 
                document.getElementById("lvl").innerHTML =   this.subnivel ;
                
                this.eliminarEventoClic()
                if(this.nivel===(UltimoLVL + 1)){ //si llega al nive l y le suma uno 
                    this.gano()
                } else{
                    // OJO se pasa la referencia, se pone el .bind(this) por cuanto 
                    // se cambiara el thhis ya que el que ejecuta el settimeout es window
                   setTimeout( this.siguientelvl, 1500)
                }
            }
        }else{
            this.perdio()
        }
        //console.log(numeroColor)
        
        

    }
    gano(){//15
        Swal.fire(
            'Muy bien',
            'Ganaste el juego',
            'success'
          )
            .then(()=>{
           
            this.inicializar()
            })
    }

    perdio(){//16
        Swal.fire(
            'Que mal',
            'Perdiste el juego',
            'error'
          )
            .then(()=>{
           this.eliminarEventoClic()
            this.inicializar()
            })
    }

}

function EmpezarJuego(){ //1
   window.juego = new Juego() //inicializar el juego
}