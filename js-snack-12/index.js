// 1.	Filtro di Oggetti:
// Scrivi una funzione che filtri gli oggetti all’interno di un array in base a un determinato criterio 
// (ad esempio, filtra gli utenti che hanno un saldo maggiore di 10.000 euro).

const clienti = [
    { nome: 'Giovanni', saldo: 15000 },
    { nome: 'Maria', saldo: 5000 },
    { nome: 'Luca', saldo: 20000 },
];

function filterSaldo(arr) {
    let output = arr.filter(elem => elem.saldo >= 10000);
    console.log(output);

    return output
}
filterSaldo(clienti)