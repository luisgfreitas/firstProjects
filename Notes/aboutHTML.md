<!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML --><!-- HTML -->

<!--
<h1> a <h6> (títulos e subtítulos)
<p> (parágrafos)
<a href="LINK">NOME</a> (links)
<img src="LINK" alt="TEXTO ALTERNATIVO"/> (colocar imagens)
<button>BOTÃO</button>
<br/> (broken line)
<ul> ou </ol> (unordered list/ordered list)
    <li>ITEM 1</li>
    <li>ITEM 2</li>
    <li>ITEM 3</li>
</ul> ou </ol>
<div></div> (uma caixa imaginária)
-->

<!--
/* LINKS (tag a)*/
/*
Tag <a>
    href="" - pode redirecionar para:
        outra página
        http://google.com.br
        outro arquivo na máquina
            <a href:"index.html">NOME</a>
            <a href:"pasta1/index.html">
    target:"" - muda o jeito de abrir os links
        target:"_blank": abre em outra página
    title:"TÍTULO" - dar um título pro link quando passamos o mouse em cima

Não precisamos usar links só em textos
    em imagens: </a href>IMAGEM OU OUTROS AQUI</a>
    para referencias no nosso próprio site: Colocar id em alguma parte
        <h1 id="area1">Área 1<h1>
        <a href="#area1">ir para a área 1</a>
-->

<!--
<b>negrito sem semântica de importância</b>
<strong>negrito com semântica de importância</strong>
<i>itálico sem semântica de importância</i>
<em>itálico com semântica de importância</em>
<small>diminuir um pouco o tamanho da fonte</small>
<del>riscar o texto</del>
<mark>marca-texto</mark>
<sup>letras do lado e em cima (1º)</sup>
</sub>letras do lado e embaixo</sub>
-->
<!--
<table>tabela</table>
<tr>table rol</tr>
<td>table description</td>

required (transformar um campo em obrigatório)
minlenght
maxlenght

<meta name="
content="width=device-width, initial-scale=
0"> - tag do head para deixar o site responsivo

<picture> - para imagens responsivas
<source midia="(min-width: 650px)srcset="IMAGEM2"/>
<source midia="(min-width: 450px)srcset="IMAGEM3"/>
<img src="IMAGEM1"> - padrão
</picture>

<header>
<nav>
<footer>
<section>
<article>
<aside>
<time>

<input type="search" name="search">
<input type="email" name="email">
<input type="url" name="">
<input type="tel" name="tel">
<input type="number" name="number">
<input type="range" name="range" min="1" max="100">
<input type="date" name="date" type="month/day">
<input type="time" name="time">
<input type="datetime-local" name="datetime-local">
<input type="color" name="color">
<input type="submit" name="submit">

<div data-NOME></div>

<vídeo width="1080" height "720" autoplay controls>
    <source src="NOME VIDEO" type="video/mp4" />
</vídeo>
<vídeo width="1080" height "720" autoplay controls>
    <source src="NOME VIDEO" type="video/mp4" />
</vídeo>

<audio autoplay controls muted preload loop>
    <source src="NOME AUDIO" type="audio/mpeg" />
</audio>

<input type="text" name="usuário" autofocus | placeholder | size="10" | maxlength="4" | autocomplete="off" ou ="on">

<meta property="og: url" content="http://url.com.br">
<meta property="og: type" content="article | website | product | ...">
<meta property="og: title" content="TITULO">
<meta property="og: description" content="DESCRIÇÃO">
<meta property="og: image" content="/IMAGE">

<dl> - description list (posso colocar uma list dentro dela)
    <dt>café</dt>
    <dd>para beber</dd>
</dl>

<q>citação curta</q>
<blockquote cite="LINK DE ONDE VEIO">citação longa</blackquote>

<main></main>
<adress></adress>
<figure>
    <img src>
    <figcaption>Legenda</figcaption>
</figure>
-->




<!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS --><!-- CSS -->
<!-- padding
resize
widht
height
margin
font-size: ;
font-weight: ;
        bold;
color: ;
font-family: NOME, OUTRAOPÇÃO, OUTRAOPÇÃO;
text-align: left | right | justify | center;
text-decoration: none (para tirar o _ dos links);
text-transform: uppercase | lowercase;
letter-spacing: ...px;
word-spacing: ...px;
line-height: ...px;
text-shadow: direção direita | direção baixo | espaço de esfumaçamento | cor da sombra;
)

Propriedades @media
@media (min-width: 300px) and (max-width: 600px) {
    body {...
@media only screen
@media only print
@media screen, print
@media all
@media (orientation: portrait) {}
@media (orientation: landscape) {}

Funções
var
    :root {
            --NOME: PROPRIEDADE;
            ==bg-color: #000;
            --bg-second: #FFF;
            --font-color: #F00;
            --font-size: 12px;
        }

        .container {
            background-color: var(--bg-color, #0F0)
        }

placeholder | autofocus | size="X" | maxlength="X" | required | autocomplete (mostra opções para autocompletar email, url etc)

background: linear-gradient(Xdeg, COR, COR)

text-shadow: 2px 2px 1px #333
box-shadow

animações
     @keyframes exemplo {
            0% {background color:red;top:0;left:0;}
            25% {background color:yellow;top:0;left:200;}
            50% {background color:blue;top:200;left:200;}
            75% {background color:green;top:200;left:0;}
            100% {background color:red;top:0;left:0;}
        }
        TAG/CLASS {
            width: 150px;
            height: 15opx;
            background-color: red;
            position: absolute;
            animation-name: exemplo;
            animation-duration: 4s;
            animation-delay: 2s; 
            animation-literation-count: 3 | infinite

Trensition
    .exemplo {
        width: 150px;
        height: 150px;
        margin: auto;
        margin-top: 100px;
        background-color: green;
        transition: all 1s linear;
    }

    .exemplo:hover {
        background-color: red;
        
    } 

word-wrap: break-word;

FLEXBOX

display: flex;

flex-direction: row | column | row-reverse | column-reverse 

flex:1 | 2 | 3 | ...

flex-wrap:wrap;

    flex-flow: column wrap;

justify-content (justifica de acordo com o alinhamento da flexbox)
align-items (justifica o contrário do alinhamento da flexbox)
align-content
    flex-start | flex-end | center | space-around | space-between
align-self: flex-start | flex-end
order: flex-start | flex-end

-->

<!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS --><!-- JS -->

<!--

IF e ELSE

var hora = 16;

if ( hora < 12 ) {
    console.log("Bom dia!")
} else {
    console.log("Não é dia!!")
}

/* ELSE IF */

/* var tamanho = 555;

if ( tamanho < 550 ) {
    console.log("Esse país é pequeno. Sinto muito")
} else if ( tamanho < 1100 ) {
    console.log("Hmmm, temos um país médio")
} else if ( tamanho <= 2200 ) {
    console.log("Que paísão em")
} */

if ( pratosLimpos > 10 && pratosLimpos <= 20 )
if ( pratosLimpos > 20 || pratosLimpos == 1 )

document.getElementsById('exemplo')[1].innerHTML = ("Item alterado!");
document.getElementsByTagName('exemplo')[1].innerHTML = ("Item alterado!");
document.getElementsByClassName('exemplo')[1].innerHTML = ("Item alterado!");
document.getElementsByName('exemplo')[1].innerHTML = ("Item alterado!");
document.querySelector('exemplo')[1].innerHTML = ("Item alterado!");

document.querySelector('#img').classList.contains('img2');
document.querySelector('#img').classList.add('img2');
document.querySelector('#img').classList.remove('img2');


-->