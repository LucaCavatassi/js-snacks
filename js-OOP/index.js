// Esercizio 1: Definisci una Classe Base

// Definisci una classe Persona con:
// 	•	Un costruttore che accetta nome e eta.
// 	•	Un metodo saluta() che restituisce una stringa: "Ciao, mi chiamo <nome> e ho <eta> anni."


class Persona {
    constructor(nome, eta) {
        this.eta = eta;
        this.nome = nome;
    }

    saluta() {
        return `Ciao mi chiamo ${this.nome} e ho ${this.eta} anni.`
    }
}

const persona1 = new Persona("Luca", 29);
const persona2 = new Persona("Francesca", 31);

// console.log(persona1.saluta());
// console.log(persona2.saluta());

// Esercizio 2: Ereditarietà

// Estendi la classe Persona creando una sottoclasse Studente con:
// 	•	Un costruttore che accetta anche un parametro corso.
// 	•	Un metodo infoCorso() che restituisce "Sto studiando <corso>."

class Studente extends Persona {
    constructor(nome, eta, corso){
        super(nome, eta);
        this.corso = corso
    }

    infoCorso() {
        return `Sto studiando ${this.corso}.`
    }
}

const studente1 = new Studente("Anna", 22, "Informatica");
console.log(studente1.saluta()); // "Ciao, mi chiamo Anna e ho 22 anni."
console.log(studente1.infoCorso()); // "Sto studiando Informatica."