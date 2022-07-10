import rl from 'readline-sync';

var divida = rl.question("Escreva o valor da dívida: ");
var divida = Number(divida);

if (divida > 0) {
    var dias = rl.question("Escreva o número de dias em atraso: ");
    var dias = Number(dias);
    if (dias > 0) {

    var taxa = dias > 15 ? 10 : 5;
    var total_juros = (divida / 100) * taxa;

    console.log(`\n\nvalor da dívida: R$ ${divida}`);
    console.log(`Dias em atraso: ${dias}`);
    console.log(`Taxa de juros: ${taxa}%`);
    console.log(`Valor com juros: ${divida + total_juros}`); 
    } else {
        console.log(`Você está em dia.`);
    }
} else {
    console.log(`Você não tem nenhuma dívida.`)
}