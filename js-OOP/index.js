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

console.log(persona1.saluta());
console.log(persona2.saluta());
