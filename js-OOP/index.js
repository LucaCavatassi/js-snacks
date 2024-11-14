// Esercizio 1: Definisci una Classe Base

// Definisci una classe Persona con:
// 	•	Un costruttore che accetta nome e eta.
// 	•	Un metodo saluta() che restituisce una stringa: "Ciao, mi chiamo <nome> e ho <eta> anni."


// class Persona {
//     constructor(nome, eta) {
//         this._eta = eta;
//         this.nome = nome;
//     }

//     saluta() {
//         return `Ciao mi chiamo ${this.nome} e ho ${this._eta} anni.`
//     }

//     get eta() {
//         return this._eta;
//     }

//     set eta(eta) {
//         if (eta <= 0) {
//             console.log('Eta deve essere positiva');
//         } else {
//             this._eta = eta
//         }
//     } 
// }

// const persona1 = new Persona("Luca", 29);
// const persona2 = new Persona("Francesca", 31);

// console.log(persona1.saluta());
// console.log(persona2.saluta());

// Esercizio 2: Ereditarietà

// Estendi la classe Persona creando una sottoclasse Studente con:
// 	•	Un costruttore che accetta anche un parametro corso.
// 	•	Un metodo infoCorso() che restituisce "Sto studiando <corso>."

// class Studente extends Persona {
//     constructor(nome, eta, corso){
//         super(nome, eta);
//         this.corso = corso
//     }

//     infoCorso() {
//         return `Sto studiando ${this.corso}.`
//     }
// }

// const studente1 = new Studente("Anna", 22, "Informatica");
// console.log(studente1.saluta()); // "Ciao, mi chiamo Anna e ho 22 anni."
// console.log(studente1.infoCorso()); // "Sto studiando Informatica."

// Esercizio 3: Incapsulamento con Getter e Setter
// Modifica la classe Persona per includere una proprietà privata _eta e usa getter e setter per accedere e modificare eta, assicurandoti che l’età possa essere impostata solo se positiva.

// const persona2 = new Persona("Marco", 30);
// console.log(persona2.eta); // 30

// persona2.eta = -5; // Non dovrebbe cambiare l'età
// console.log(persona2.eta); // 30

// persona2.eta = 32; // Dovrebbe aggiornare l'età
// console.log(persona2.eta); // 32
// console.log(persona2.saluta());

// Esercizio 4: Polimorfismo
// Crea una classe Animale con un metodo verso() che restituisce "Un suono generico". 
// Crea poi due classi Cane e Gatto che estendono Animale e sovrascrivono il metodo verso() per restituire rispettivamente "Woof!" e "Miao!".

// class Animale{
//     verso() {
//         return 'Un suono generico';
//     }
// }

// class Cane extends Animale {
//     verso() {
//         return 'Woof!'
//     }
// }

// class Gatto extends Animale {
//     verso() {
//         return 'Miao!'
//     }
// }

// const animali = [new Cane(), new Gatto()];
// animali.forEach(animale => console.log(animale.verso()));

// Esercizio 5: Classe con Metodo Statico

// Crea una classe Calcolatrice con un metodo statico somma(a, b)
// che accetta due numeri e restituisce la loro somma.


// class Calcolatrice {
//     static somma(a, b) {
//         return a + b;
//     }
// }

// console.log(Calcolatrice.somma(5, 3)); // 8 

// Esercizio 6: Contatore di Oggetti

// Crea una classe Veicolo che tenga traccia di quanti veicoli sono stati creati utilizzando un attributo statico. 
// Ogni volta che viene creato un nuovo veicolo, il contatore dovrebbe aumentare.
class Veicolo {
    // Aggiungi un contatore statico che parte da 0
    static contatore = 0;

    constructor() {
        // Incrementa il contatore ogni volta che viene creato un nuovo veicolo
        Veicolo.contatore++;
    }

    // Metodo statico per ottenere il valore del contatore
    static contaVeicoli() {
        return Veicolo.contatore;
    }
}
