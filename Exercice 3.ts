
function Benefice(Pdv: number, Cdf: number) : string {
    const benefice: number = Pdv - Cdf
    if (benefice < 0){
        return `Perte de ${-benefice}`
    } else if (benefice > 0) {
        return `Gain de ${benefice}`
    } else {
        return `Vive le bénévolat`
    }
}
console.log(Benefice(10,20))
console.log(Benefice(20,10))
console.log(Benefice(10,10))
