
class Chat {

    nom!: string;
    race!: string;
    age!: number;
    poids!: number

/**
 * Permet d'afficher le chat
 */

    afficherChat(): void{
        console.log(`Mon super chat s'appelle ${this.nom}, c'est un ${this.race} âgé de ${this.age} ans, il pèse ${this.poids}kg`)
    }
}
  
const monChat = new Chat();

monChat.age = 2;
monChat.nom = "Bébou 2";
monChat.poids = 50;
monChat.race = "Clochard";

monChat.afficherChat();



