export default class Joueur {
    private _nom: string;
    private _score: number;

    constructor(nom: string, score: number){

        this._nom = nom;
        this._score = score;

    }

    public get nom(): string {
        return this._nom;
    }

    public set nom(nouveauNom: string){
        
    }

    public jouer(Gobelet): void {
        return
    }

    public afficherScore(): void{
        return
    }
}