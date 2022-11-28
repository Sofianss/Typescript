/**
 * Retourne le nombre le plus grand à partir d'une liste de nombre
 * @param nombres une liste de nombre
 * @returns le nombre le plus grand
 */

function PlusGrandNombreDeux(... nombres: number []){
    let max : number = 0
    for (let index = 0; index < nombres.length; index ++){
        if (nombres [index] > max){
            max = nombres[index];
        }
    }  
    return max;
}
console.log(`Le nombre le plus grand est ${PlusGrandNombreDeux(10,60,5788,154,8)}`);