//   clase 15 Estructuras repetitivas: do-while
var contador = 0
//funcion que devueve si llueve o no
const llueve = () => Math.random() < 0.25

do{
 contador += 1  
} while (!llueve())

console.log(`Fui a ver si llovia ${contador} ve${contador ===1? 'z': 'ces'}`)