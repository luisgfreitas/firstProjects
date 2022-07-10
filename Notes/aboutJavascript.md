# JS STUDIES

## CARACTERISTICS

* Case sensitive
* Mutable typing
    * variable can be changed
* Multiparadigm

## VARIABLES
* A variable is a container for a value

----
### var
First variable JS model. The variables can be redefined and redeclared.

`var name = "Luis";`

`name = "Adam";` :heavy_check_mark:

`var name = "Louis";` :heavy_check_mark:

----
### let
let can be redeclared, but not redefined

`let name = "Luis";`

`name = "Adam";` :heavy_check_mark:

`let name = "Louis";` :x: 

----
### const
const can't be redeclared or redefined

`const name = "Luis";`

`name = "Adam";` :x:

`const name = "Louis;"` :x:

----
## Variable types

### Numbers
`let myAge = 17;`

----
### Strings
`let dolphinGoodbye = 'So long and thanks for all the fish';`

----
### Booleans
`let iAmAlive = true;`

`let test = 6 < 3;`

----
### Arrays
```javascript
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
```

----
### Objects
`let dog = { name : 'Spot', breed : 'Dalmatian' };`

----
#### When to use const and when to use let
> Use const when you can, and use let when you have to.

----
## Undefined and Null

### Undefined
The variable don't have a value

`let name;`
### Null
A reference that points, generally intentionally, to a nonexistent or invalid object or address

`let name = null`

----
## OPERATORS

### +, -, * and /
The simple arithmetics operations

```javascript
let quantidadeVagas = 2 + 5; // resultado: 7
let contratados = 7 - 2; // resultado: 5
let valorContribuicao = 2500 * 0.10; // resultado: 250
let primeiraParcela = 2500 / 2; // resultado: 1250
```
The operator `+` can also concatenate values

```javascript
console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”
```

On the concatenation, the operator `+` convert the different values:
![](https://www.devmedia.com.br/arquivos/Salas/Linguagem/JavaScript/65/2342/fig2.png)
![](https://www.devmedia.com.br/arquivos/Salas/Linguagem/JavaScript/65/2342/fig21.png)

### %
Returns the rest of a division
```javascript
var resto1 = 15 % 4; // resultado: 3
var resto2 = 3 % 1.2; // resultado: 0.6
```

### `++` and `--`
These increments operators can do this on the values
If we use them before the value, it will be changed immediataly
```javascript
var numero = 9;
console.log(++numero);
// 10
```
When the operator is placed after the name, the value changes after the current operation is performed
```javascript
var numero = 9;
console.log(numero++);
// 9
```

### Relational operators
* `==`: equal
* `!=`: different
* `<` and `>`: minor and major
* `<=` and `>=`: minor and major
* `===` and `!==`: strictly equal and strictly different (consider the value and the type)

### Logic operators

* `&&` = and
* `||` = or
* `!` = no

## OBJECTS
The objects serve to group data

### Syntax of literal object

```javascript
let produto = { //domain { properties}
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00 // key: value
};
```

To access the properties, we can use `domain.key`

### Colection of objects
Simple a multiple objects ordered in arrays

```javascript
let colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];
```
can be accessed like this:
```javascript
console.log( colecao_disciplinas[0].id ); // 1

console.log( colecao_disciplinas[4].nome ); // Química

console.log( colecao_disciplinas[6].carga_horaria ); // 1
```

### Chuck Norris facts example

```javascript
var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal",           conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries",          conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Suicida que não morre",                  conteudo: "Chuck Norris foi homem-bomba 34 vezes."},
    { titulo: "Olhos que tudo veem",                    conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Manipulando o tempo",                    conteudo: "Chuck Norris não usa relógio. Ele decide que horas são."},
    { titulo: "Praticando esportes radicais",           conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar",                        conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo",                        conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros",               conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."},
    { titulo: "Contando sem parar",                     conteudo: "Chuck Norris contou até o infinito. Duas vezes."}
];

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);
```

`Math.random()` returns a number between 0 and < 1

`Math.floor()` rounds the number down to the nearest whole number

## CONDITIONALS

### if/else if/else

#### Syntax

```javascript
if ( limite >= valor ) {
    console.log("Compra aprovada");
} else if {
    console.log("Compra negada");
} else {
    console.log("Algo deu errado");
}
```

here we can use all operators learned

#### Condicional ternary operator
We can write the conditionals in a simplified way

The traditional way:

```javascript
var status = "";
if ( nota > 7 ) {
status = "Aprovado";
}
else {
 status = "Reprovado";
}
```

The ternary way:

```javascript
var status = nota > 7 ? "Aprovado" : "Reprovado";
```

including within functions:

```javascript
function example() {
  return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
}
```

#### short-circuit
If we have just one condition, we can write this even more simplified

Tradicional way:

```javascript
var aprovado = true;

if (aprovado) {
    console.log("Parabéns");
}
```

Short-circuit way:

```javascript
var aprovado = true;

aprovado && console.log("Parabéns");
```

### switch

#### Syntax

```javascript
var produto = “Smartphone”;

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}
```

## INPUTS

sometimes the user needs to enter some data in the system for his objective to be completed. This function isn't native from JavaScript.

to allow this we need to install an extension called "readline-sync"

### Step 1

In the folder where your file is, open the CMD and write `npm init -y` and will be created an `package.json` file.

After that write `npm install readline-sync`. More `.json` files will be created.

### Step 2

Open the file `package.json` and add `"type": "module"`

### Step 3 and syntax

Now we can use the syntax from `readline-sync` on our document:

```javascript
import dataEntry /* surname */ from 'readline-sync' /* plugin's name */

let name = dataEntry.question("What's your name?"); // function to access surname
console.log("Hello " + name);
```

In readline-sync, all data will automatically converted by string. To convert into a number, we need to use the function `Number()` 

## Array

Serves to group diferent types of data

### Syntax

```javascript
let produtos = [
    "Notebook Samsung X40",
    "Smartphone Xiaomi Redmi 9",
    "Smart TV LED 50 LG",
    "Home Theater Philco PHT690"
];

let notas_aluno = [ 9, 8, 7, 9 ];

let objects_colection = [
    {name: "Luis", age: 24},
    {name: "Steve", age: 26},
    {name: "Mark", age: 41}
]
```

In the arrays we can access the elements by the index and add elements in that way
```javascript
var funcionarios = [
    "Danilo",   // index 0
    "Denise",   // index 1
    "Marcos",   // index 2
    "Roberta",  // index 3
    "Thiago"    // index 4
];

console.log(funcionarios[index])

funcionarios[5] = "Mário"
```

We too have an way to get the size of an array:

`funcionarios.length`

## Repetition structures

### while

```javascript
let contador = 0;

while ( contador < 5 ) {

            console.log(contador);
            contador++;
}
```

### do... while

```javascript
let contador = 0;

do {

    console.log(contador);
    contador++;

} while ( contador < 5 );
```

### for

```javascript
let multiplicador = 8;

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;

    console.log( multiplicador + " x " + contador + " = " + resultado );

}
```

### for... in

loops through all properties of an object

```javascript
let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25
```

### for... of

loops through all values of an object

```javascript
let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    console.log("Email: " + email);

}

// Email: danilo@email.com
// Email: jessica@email.com
// Email: luana@email.com
// Email: gustavo@email.com
```

