export default class De {
    private _valeur: number;
    

    constructor(valeur: number) {
        this._valeur = valeur;
        
    }

    get valeur(): number{
        return this._valeur;
    }

    public Lancer(): void{
        console.log(`Votre lancer est tombé sur le nombre ${this.valeur}`);
    }
}