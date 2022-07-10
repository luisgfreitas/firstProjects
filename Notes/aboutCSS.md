/*O QUE É E COMO USAR O CSS*/
/* Existe uma padronização de estilo para cada agent server
    CSS inline: dentro de alguma TAG do html
        <h1 style="color:red;font-size:14px;">
    CSS interno: tag <style> dentro do head do HTML
        <style>
            h1 {
                color:blue;
                font-size:14px;
        }

        </style>
    CSS externo: CSS em arquivo separado com linkagem dentro do head
    <link rel="stylesheet" href=".sobre_CSS.css" />
*/



/*A BASE GERAL DO CSS*/
/*
Tipos de seleção de tags e elementos no HTML para usar no CSS
    tag: seleciona todas as tags de mesmo nome
    #id: seleciona o id que colocar em uma tag (<h1 id="NOME"). O nome do id não pode ser repetido
    .class: seleciona o nome da class colocada em cada tag (<h1 class="NOME">). O nome pode repetir em vários elementos.
    
Agrupando propriedades CSS para diferentes elementos
    tag: 
    #id:
    .class:
    elemento, elemento:
    elemento elemento:
*/

/*CORES NO CSS*/

/*
Como definir as cores:
    escrevendo o nome em inglês
    hexadecimal: entre 6 e 8 letras e números
        #FF00FF
    rgb: red, green, blue
        background-color: rgb(0, 0, 255);
    hsl: hue, saturation, lightness      
*/


/*BORDAS NO CSS*/
/*
Propriedades básicas da borda
Largura Tipo-de-borda cor
    h1 {border: 5px solid #FF00FF}
É possível colocar borda em um só lado
        border-top | border-bottom | border-left | border-right
Tipos de bordas
        solid | dotted | dashed | no-border | ...
Borda arredondada: border-radious: NUMEROpx;
Nós podemos colocar borda em qualquer coisa (imagem, class, id, tag etc)
Colocar borda em imagem e cortá-la junto: overflow:hidden;
*/


/*MARGINS E PADDINGS*/
/*
Todo elemento tem 4 propriedades básicas:
        padding: espaçamento interno do elemento
        margin: espaçamento externo do elemento
        conteúdo: texto/imagem etc
        border: borda
Podemos definir o padding e a margin separadamente ou usando shorthand (jeito menor de escrever)
        margin: 0px 5px 5px 10px (de cima até a esquerda, no sentido horário)
        padding: 0px 10px (o primeiro valor é para top e bottom, o segundo é pra left e right)
        padding: 15px (vai para todos os lados)
            margin-top: 10px
*/


/*WIDTH E HEIGHT*/
/*
Possíveis valores: auto | % (da tela) | px | cm | vw/vh | inherit (pega o mesmo valor do item anterior) etc
Widht: largura
height: altura
Definir max e min
    max-height | min-height | max-widht | min-widht

   * {O QUE VAI AQUI É APLICADO A TODO O CÓDIGO}
box-sizing: usado para manter o tamanho do conteúdo, padding e border fixo no tamanho apenas do conteúdo
    border-sizing: content-box (o valor do conteúdo é somado ao da border e do padding)
    border-sizing: border-box (o valor da border e do padding é descontado)
*/


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

Estilos CSS comuns para links (colocar uma class ou algum identificador no link)
        <a href="LINK" class="links"></a>
    no css:
        .links - aplica ao links
        .links:hover {
            color: pink;
        }
        .links:visited {
            color: blue;
        }

*/


/*FORMATAÇÃO DE TEXTOS NO CSS*/
/*
Podemos formatar os textos no html e no css
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

importar fontes
    Ir no google fonts
    colocar o link no head do html
    selecionar a fonte no font-family
*/


/*LISTAS NO HTML*/
/*
É possível colocar uma lista dentro da outra
    Mudar tipo de ul (no ccs inline ou externo)
        <ul style="list-style-type: disc | circle | square | none | ..."></ul>
    Mudar tipo da ol
        <ol type="1 | A | a | I | i | ..."></ol>
        <ol start="VALOR PARA COMEÇAR">
*/


/*TABELAS NO HTML*/

/*
<table>
    
    <thead> (cabeça da tabela)
        <tr> (cabeça da tabela)
            <th></th> (título da linha 1)
            <th></th> (título da linha 2)
        </tr>
    </thead>
    <tbody> (corpo da tabela)
        <tr> (linha 1)
            <td></td> (coluna 1)
            <td></td> (coluna 2)
        </tr>
        <tr> (linha 2)
            <td></td> (coluna 1)
            <td></td> (coluna 2)
        </tr>
        <tr> (linha 3)
            <td></td> (coluna 1)
            <td></td> (coluna 2)
        </tr>
    </tbody>
</table>
*/


/*TABELAS E FORMULÁRIOS*/

/*Ver "testando-tabelas"
Primeiro: criar um formulário
    <form action="/PASTA/PASTA" method="GET ou POST">
        <input type="text" name "email/usuario/..." value="VALOR QUE JÁ APARECE ESCRITO">
        Tipos de input type: text | email | password | radio | checkbox | submit | number

        <input type="submit" value="fazer cadastro">
    </form>

    <select name="ordenacao"> (todos os elementos do form precisam ter um nome para os dados serem recebidos corretamente)
        <option></option>
        <option></option>
    </select>
    value: o que é?
    atributo selected
    multiplas escolhas
        - multiple
        - size
    
    <select name="order" multiple size="5">
        <option value="" disabled selected></option>
        <option value="1">item 1</option>
        <option value="2">item 2</option>
    </select>

    <textarea name="mensage"></textarea>

    <button></button> - podemos usar como substituto do input="submit". é mais estilizável

    <label>Nome completo:</label> - definir onde o usuário digita cada coisa
        - colocar id no input e for no lable
            - pode ser usado em vários tipos de input: checkbox; text; email etc
        - posso colocar meu input dentro do meu lable
    Formatação padrão do lable no CSS: lable {display: inline}. Pode ser alterado para display:block, para transformar o lable em uma "div"
        - podemos editar a lable com margin, padding etc

        para selecionar um item especifico de input:
            aplicar no comando input (para todos)
            aplicar em uma class de cada input
            selecionar um tipo específico de input (input[type:text]) - funciona para text e email

Validação nativa (definir campos obrigatórios/conteúdo de cada dado etc)
    required (transformar um campo em obrigatório)
    minlenght
    maxlenght
    
    input type number
        step
        min
        max
    padrão de informações para cada input
        pattern="EXPRESSÃO REGULAR"
        title

    Input hidden (campo preenchido que o usuário não vê, mas envia)
    Input file (p/ enviar arquivos)
        input type="file" name="photo" accept="image/* | application/pdf | ..."
    Quando acrescentar esse tipo de input, é necessário colocar a propriedade enctype="multipart-form-data" na tag <form>
*/
    

/*CARACTERÍSTICAS DO CSS*/
/*
Herança
    o que tiver dentro de um mesmo elemento recebe as mesmas propriedades do elemento
    nem todas as propriedades são herdadas
        <div> <h1>Um <strong>texto</strong> qualquer</h1> </div>
        Se eu colocar cor, tamanho etc na <div>, o strong também vai herdar, mas propriedades como border (mais estruturais), ele não herda

Especificidade
    quanto mais específico o elemento, mais prioridade tem na div
        tag > class > id

Cascata
    verificação de estilos css: externo< interno< inline

Unidades de medida absoluta
    medidas que não sofrem interferências de outras coisas (não se comunicam)
        pixel: pixel do css é um pouco maior do que do PC
        pt: mais utilizada para fontes
        in: inches (polegadas)
        cm: centímetro
        mm: milímetro

Unidades de medida relativa (fontes)
    Medidas que variam de acordo com alguns fatores
        em: baseado no font-size do item pai; escala de acordo com o ultimo item
        rem: se mantém proporcional ao root (html)
        %: pega a porcentagem do espaço disponível (baseado na div, no body ou outro elemento)
        ex: tamanho da letra x na fonte aplicada
        ch> character unity: pega o espaço de cada letra (funciona para fontes monospace)

Unidades de medida relativa (viewport - espaço visível na tela)
    vh: viewport height
    vw: viewport widht
    vmin/vmax: não é muito bom usar, mas pega o espaço do menor e do maior espaço disponível na tela
    
inherit
    usa-se para herdar alguma propriedade da tag anterior (quando quero forçar que o elemento herde alguma propriedade do anterior)

Tipos de valores para cores
    por nome
    por hexadecimal
    por rgb
    por currentcolor pra pegar a cor anterior
*/


/*RESPOSIVIDADE*/

/*
Mobile First
    ideia de programar para o computador, mas já pensando em como vai ser no celular

Layout adaptativo vs layout responsivo
    adaptativo - se adapta a tamanhos fixos de tela
    responsivo - se adapta proporconalmente aos tamanhos de tela
    o ideal é usar os dois em conjunto

Viewport
    Adaptação e responsividade para celular
    Há um código que colocamos no head para isso:
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            também posso usar sem zoom: user-scalable=no

Imagens responsivas
    Podemos trocar cada imagem de acordo com o tamanho do dispositivo
        <picture>
        <source midia="(min-width: 650px)" srcset="IMAGEM2"/>
        <source midia="(min-width: 450px)" srcset="IMAGEM3"/>
        <img src="IMAGEM1"> - padrão
        </picture>
            também podemos usar max-width ou outros tamanhos
    Object-fit
        Usado no CSS para redimensionar a imagem
            img {
                width: 400px;
                hieght: 400px;
                object-fit: fill (padrão, faz a imagem caber na área disponível) / cover (aumenta a imagem e a corta com foco no meio) / contain (redimensiona a imagem sem cortar, deixando um espaço em branco) / none (só corta a imagem) / scale-down (diminui a imagem e a resolução para caber na caixa)
            }
    
*/


/*@media MEDIA*/

/*
body {
    background-color: brown;
}

@media (min-width: 1000px) {
    
    body {
        background-color: blue;
    }
}

@media (min-width: 600px) and (max-width: 1000px) {
    body {
        background-color: red;
    }
}

@media (max-width: 600px) {
    body {
        background-color: aquamarine;
    }

    h1 {
        font-size: 15px;
    }

}

@media only print {
    body {
        background-color: #00FF00;
    }
}

Orientation no @media
    o orientation é baseado no tamanho da dela, então, se o usuário abrir o teclado, isso pode influenciar
    @media (orientation: portrait) {}
    @media (orientation: landscape) {}

Aspect-ratio no @media
    @media (aspect-ratio: 1/1) {}
    @media (min-aspect-ratio: 1/2) {}
    @media (max-aspect-ratio: 2/1) {}
*/

/*FUNÇÕES*/
/*
VAR
As variáveis são importantes para alterar as coisas em várias partes do site ao mesmo tempo
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

Var dentro de @media
    O ideal e trocar o valor do root dentro do @media
        :root {
        ==bg-color: #000;
        --font-size: 12px;
    }

    .container {
        background-color: var(--bg-color, #0F0)
    }

    @media (max0width: 450px) {
        :root {
            --font-size: 20px;
        }
    }

Hack CSS: Altura relativa a largura
    ver "video responsivo.html e .css"

MIN E MAX

ajuda na responsividade, dependendo do tamanho da tela, ele pega o tamanho min ou max
img {
    width : min(50%, 300px); ou width : max(50%, 300px);
}

CALC

.container {
    width: calc(100% - 20px)
    height: 300px;
    backgroung-color: grey;

}
*/


/*SEMÂNTICA E CSS AVANÇADO*/
/*
Tags header, nav e footer
    serve para criar cabeçalho, navegação e rodapé
Tags Section, Article, Aside e Time
    Section - categorização de seções
    Articlle - o site lê o conteúdo daqui como principal
    Aside - conteúdo secundário
    Time - especifica alguma data para ajudar no SEO
Tags de Input
    Search | email | url | tel | number | range | date | time | datetime-local | color | submit
Atributo Data
    atributo para guardar infos dentro do próprio html, para usar com js etc, sem aparecer na página
        <div data-NOME></div>
Tag video
    Usada para inserir videos da própria máquina
        <vídeo width="1080" height "720" autoplay controls>
            <source src="NOME VIDEO" type="video/mp4" />
        </vídeo>
Tag audio
    Usada para inserir audios
        <audio autoplay controls muted preload loop>
            <source src="NOME AUDIO" type="audio/mpeg" />
        </audio>
Tags de forms
    placeholder | autofocus | size="X" | maxlength="X" | required | autocomplete (mostra opções para autocompletar email, url etc)

Normalize.css
    biblioteca que conserta alguns erros e padroniza os css em todos os navegadores
        https://github.com/necolas/normalize.css/

Borda arredondada
    dentro do css:
        border-radius: 10px;
        border-top-right-radius: 15px.
Degradê
    colocar um background padrão para caso não funcione em algum navegador
        background: linear-gradient(Xdeg, COR, COR)
Animações
    pode-se criar várias coisas diferentes 
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

        }
Sombras
    Sombra em elemento
        box-shadow: direção1 | direção2 | blur | cor (pode ser valor negativo ou positivo)
        box-shadow: 10px 10px 5px #888;
    Sombra em texto
        text-shadow

Transições
    podemos alterar o ritmo em que alguma property muda
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

Webkit
    Engine responsável por desenhar o html e o css na tela

Wordwrap
    quebra as palavras para evitar que elas saiam da div
        word-wrap: break-word;

Meta tag (social sharing)
    coloca-se no head do html para aparecer um cartaozinho de visita quando compartilhar a página
        <meta property="og: url" content="http://url.com.br">
        <meta property="og: type" content="article | website | product | ...">
        <meta property="og: title" content="TITULO">
        <meta property="og: description" content="DESCRIÇÃO">
        <meta property="og: image" content="/IMAGE">

Listas de descrição
    ajuda o google a entender essas descrições
    posso colocar listas dentro dessa tag
        dl - description list
        dt - description title
        dd - description description
            <dl>
                <dt>café</dt>
                <dd>para beber</dd>
            </dl>

Citações
    Para citações menores:
        <p>Como ele dizia: <q>você é chato</q></p>
    Para citações maiores:
        <p>Como ele dizia:
            <blockquote cite="LINK DE ONDE VEIO">
                Você é chato
            </blackquote>
        </p>

Tag main
    Só pode ter uma em toda a página
    Não pode ser descentente de outras tags, se não a section
        <main>
            Conteúdo principal da página
        </main>

Tag adress
    dados de informações de contato
    geralmente fica no rodapé

Tag figure
    geralmente usada apenas para quando temos uma img associada ao conteúdo, junto de uma legenda
        <figure>
            <img src="http://google.com/logo" title="logo do google">
            <figcaption>Logo do Google  </figcaption>
        </figure>

*/

/*FLEXBOX*/
/*
Display - formas de como o conteúdo pode aparecer
    display: flex;
A organização pode ser alterada
    flex-direction: row | column | row-reverse | column-reverse 
alterar a relação de divisão do espaço entre as divs
    flex:1 | 2 | 3 | ...
permitir a quebra de itens para que eles passem para a próxima pag
    flex-wrap:wrap;
definir flex-direction e flex-flow em uma propriedade só
    flex-flow: column wrap;
definir posição dos itens na div
    justify-content (justifica de acordo com o alinhamento da flexbox): flex-start | flex-end | center | space-around | space-between
    align-items (justifica o contrário do alinhamento da flexbox): flex-start | flex-end | center | space-around | space-between
definir a posição de um item separado dos outros, sobrescrevendo as propriedades da div pai
    align-self: flex-start | flex-end
definir a ordem em que cada divzinha aparece
    order: flex-start | flex-end
definir o alinhamento de todas as divzinhas com wrap ativo
    align-content: flex-start | flex-end | center | space-around | space-between
    
*/

/* COMO SELECIONAR UM ATRIBUTO NO CSS */

/* Atributos que começam/terminam/cotém
[atributo] {} / [required]
tag [atributo] {} / input [required]
.class [atributo] {} / .input [type=text]
#id [required] {} / #input [type="nomedousuario"]
    Baseado no conteúdo do atributo (ex: links de url)
a[href*="economia"] {} - contém no conteúdo
a[href^="economia"] {} - o conteúdo começa com
a[href$="economia"] {} - o conteúdo termina com
*/
/* Tag Vazia
div:empty {}
*/
/*Primeira letra e primeira linha
p::first-letter {}
p::first-line {}
*/
/*Primeiro e último elemento
div:first-child {}
div:last-child {}
*/
/*Seletor negativo (todos tais elementos menos outro elemento)
body :not(p)
*/
/*Selecionar item específico
div:nth-child(2) {}
div:nth-last-child(2) {}
*/
/*Seletores before e after - cria elementos antes ou depois dos elementos, fora do html
div::before { content "" }
div::after { content "" }
    - sempre acompanha o content
    - para aparecer uma caixa completa, preciso colocar display block
*/

/* Transparencia
 - só com rgba
 valor de 0 a 1
    bacground-color: rgb(255, 255, 255, 0.5) */

/* Transform (usar dentro do css)
- pode-se aumentar ou diminuir escala do objeto, rotacionar, distorcer...
transform: scale(); -scale(); scale3d(); scaleX(); scaleY(); scaleZ();
transform: rotate(30deg);
transform: skew(20deg);
*/
/*Estilizar o placeholder
input::placeholder {}
*/





/*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  */
/* CSS GRID */

/* #2: Container e Item
    precisa de um container geral e os itens dentro dele
    regra geral: container; regra específica: item
        display: gap;

#3: Trabalhando com Gaps
    row-gap: px;
    column-gap: px;
    gap: 1px 1px;

#4: Colunas e linhas
    grid-template-columns: auto 100px 200px;
    grid-template-rows: auto 100px 200px;

#5: Unidade FR
    representa uma fração do espaço do grid (totalmente flexível)
    grid-template-columns: 1fr 2fr 1fr;

#6: Usando o Repeat
    grid-template-columns: repeat 100px (3 -quantas vezes o item repete-, 1fr -tamanho de cada item-);
    grid-template-columns: repeat (auto-fill -preenche automaticamente dependendo do tamanho dos itens-, 1fr);

#7: Usando minmax
    define o min e o max do tamanho das rows e columns
    pode usar dentro do repeat, fora, de vários jeitos
    grid-template-columns: minmax(200px, 1fr);

#8: Posicionamento no Grid
#9: Mesclando itens em linhas (1/3) - pensar em linhas imaginárias
    grid-row-start: 3;
    grid-row-end: 5;

    grid-column-start: 4;
    grid-row-start: 7;

#10: Mesclando itens em linhas (2/3)
#11: Mesclando itens em linhas (3/3) - shorthand
    grid-column: 1 / 4;
    grid-row: 1 / 3;
    grid-column: 1 / span 4; - até tal linha ou coluna
    grid-row: 1 / span 3;


#12: Grid Area
grid-area: 1 / 4 / 1 / 3;
row-start / column-start / row-end / column-end;

#13: Template Area
    colocar nome nos itens com:
        grid-area: NOME;
    colocar no container:
        grid-template-areas:
            "NOME1 NOME1"
            "NOME3 NOME4"
        ;

#14: Estrutura de Layout em Grid
#15: Responsividade no Grid */