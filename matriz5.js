/*
5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.

Nome: Pedro Henrique de Oliveira Alves
*/
console.clear();
var teclado5 = require("Prompt-sync")();
var matriz5 = [];
var linha5 = 3;
var coluna5 = 3;
for (var z = 0; z < linha5; z++) {
    matriz5[z] = [];
    for (var x = 0; x < coluna5; x++) {
        var numero5 = teclado5("Digite o nome que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz: "));
        matriz5[z][x] = numero5;
    }
}
console.log(matriz5);
