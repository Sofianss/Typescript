/**
 *  r   etourne le plus grand nombre
 * @param nombre1 nombre 1
 * @param nombre2 nombre 2
 * @param nombre3 nombre 3
 */

function PlusGrandNombre(nombre1: number, nombre2: number, nombre3: number) : string {
    if (nombre1 > nombre2 ){
        return `Le plus grand nombre est : ${nombre1}`;
    } else if (nombre2 > nombre3) {
        return `Le plus grand nombre est : ${nombre2}`;
    } else if (nombre3 > nombre1 && nombre2) {
        return `Le plus grand nombre est : ${nombre3}`;
    }
    else {
        return "Veuillez rentrer un nombre"
    }
   
}
console.log(PlusGrandNombre(800,700,600));