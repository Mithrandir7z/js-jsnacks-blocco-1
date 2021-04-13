// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola la somma del peso di tutte le zucchine.
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.



var zucchine = [
    {
        'peso': 2,
        'lunghezza': 17
    },

    {
        'peso': 5,
        'lunghezza': 8
    },

    {
        'peso': 4,
        'lunghezza': 23
    },

    {
        'peso': 3,
        'lunghezza': 15
    },

    {
        'peso': 1,
        'lunghezza': 5
    },

    {
        'peso': 18,
        'lunghezza': 22
    },

    {
        'peso': 17,
        'lunghezza': 10
    },

    {
        'peso': 16,
        'lunghezza': 9
    },

    {
        'peso': 1,
        'lunghezza': 3
    },

    {
        'peso': 19,
        'lunghezza': 21
    }
];


//Calcola la somma del peso di tutte le zucchine.

var somma = 0;

for ( var i = 0; i < zucchine.length; i++ ) {
    var thisObject = zucchine[i];
    console.log(thisObject);
    somma = somma + thisObject.peso;
}

console.log("Il peso totale è di: ", somma);



// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var pesoMinore = [];

var pesoMaggiore = [];


for ( var j = 0; j < zucchine.length; j++ ) {

    var thisObjectZucchina = zucchine[j];
    console.log("peso thisObjectZucchina.peso", thisObjectZucchina.peso);

    if ( thisObjectZucchina.peso > 15) {

        pesoMaggiore.push(thisObjectZucchina.peso);

    } else if ( thisObjectZucchina.peso < 15 ) {

        pesoMinore.push(thisObjectZucchina.peso);

    }

}

console.log("array pesoMaggiore", pesoMaggiore);

console.log("array pesoMinore", pesoMinore);