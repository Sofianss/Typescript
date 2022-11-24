/**
 * Calcul le bénéfice ou la perte d'une transaction en fonction de son cout et  de son prix de vente
 * @param Pdv prix de vente du produit
 * @param Cdf prix d'achat du produit
 * @returns Une phrase qui indique le bénéfice/la perte
 */
function Benefice(Pdv: number, Cdf: number) : string {
    const benefice: number = Pdv - Cdf
    if (benefice < 0){
        return `Perte de ${-benefice}`;
    } else if (benefice > 0) {
        return `Gain de ${benefice}`;
    } else {
        return `Vive le bénévolat`;
    }
}
console.log(Benefice(10,20));
console.log(Benefice(20,10));
console.log(Benefice(10,10));
