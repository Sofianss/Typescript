export default class De {
    private _valeur: number;
    private _lancer: number;
    
    

    constructor(valeur: number, lancer: number) {
        this._valeur = valeur;
        this._lancer = lancer;
        
    }

    public get valeur(): number{
        return this._valeur;
    }

    public set valeur(nouvelleValeur: number){
        if (nouvelleValeur > 1 || nouvelleValeur <  6){
            throw new console.error("Le lancer doit être compris entre 1 et 6");
            
        } else {
            this._valeur += nouvelleValeur
        }
    }

    public get lancer (): number{
        return this.lancer;
    }

    public Lancer(): void{
        console.log(`Votre lancer est tombé sur le nombre ${this.valeur}`);
    }

    public nombreLancer(): void{
        console.log(`C'est votre ${this.lancer}ème lancé`);
    }
    public roll(): number {
        this._valeur = Math.floor(Math.random() * this._lancer) + 1;
        return this._valeur;
        }
}
