//Bulletin : Nom du gars, notes
    // Calculer la moyenne
        // Vérifier note
            // Si note inférieur à 0 et supérieure à 20 : PAS PRISE EN COMPTE
        // Additionner toutes les valeurs et diviser par le nombre de valeur
        // Retourner la moyenne
    // Définir la mention
        // Si c'est inférieur à 4 : catastrophe
        // Inférieur à 10 : insuffisant
        // Inférieur à 14 : Passable
        // Inférieur à 18 : Bien
        // Inférieur à 20 : Très bien

    /**
     * Vérifie que la note est bien comprise entre 0 et 20
     * @param note note à vérifier
     * @returns true si ok, false si ko
     */

    function VerifierNote(note: number): boolean {
        if (note < 0 || note > 20) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * Calcule la moyenne d'un élève à partir de la liste de ses notes
     * @param notes liste des notes
     * @returns la moyenne sur 20
     */

    function calculerMoyenne(...notes: number[]): number {
        let moyenne = 0
        for (let note of notes){
            if(VerifierNote(note)){
                moyenne += note
            } else{
                console.log(`La note ${note} a été ignorée car non valide`)
            }
        }
        return moyenne / notes.length
    }

/**
 * 
 * @param moyenne la moyenne à vérifier
 * @return la mention de la note
 */

    function definirMention(moyenne: number): string{
        if (moyenne < 4){
            return "Catastrophique"
        } else if (moyenne < 10){
            return " insuffisant"
        } else if (moyenne < 14){
            return "Bien"
        } else if (moyenne < 18){
            return "Très bien"
        } else {
            return "Excellent"
        }
    }


    /**
     * Retourne le bulletin d'un élève
     * @param nomEleve nom de l'élève
     * @param notes notes de l'élève
     * @return la totalité des notes de l'élève avec un commentaire
     */
    function bulletin(nomEleve : string, ...notes: number[]): string{
        let moyenne: number = calculerMoyenne(...notes);
        let mention: string = definirMention(moyenne);
        return `${nomEleve} a une moyenne de ${moyenne}, son travail est donc ${mention}`;
    }

    const bulletinTheodule: string = bulletin("Théodule",5,8,9,15,2,3,14,18,7);