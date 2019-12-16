/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Natal', 24, false, 'Ano Novo', null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray(arr)
{
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornarArray([1, 2, 3])[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarValorIndice(arr, num)
{
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var cinco = [2, undefined, 'Brasil', true, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornarValorIndice(cinco, 0));
console.log(retornarValorIndice(cinco, 1));
console.log(retornarValorIndice(cinco, 2));
console.log(retornarValorIndice(cinco, 3));
console.log(retornarValorIndice(cinco, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro)
{
	var objeto = {'livro um': {quantidadePaginas: 100, autor: 'Fernanda', editora: 'Saraiva'},
	              'livro dois': {quantidadePaginas: 200, autor: 'Maria', editora: 'Abril Educação'},
	              'livro tres': {quantidadePaginas: 300, autor: 'Carolina', editora: 'FTD'}};
    return nomeLivro === undefined ? objeto : objeto[nomeLivro];	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); /* {'livro um': {quantidadePaginas: 100, autor: 'Fernanda', editora: 'Saraiva'},
	          'livro dois': {quantidadePaginas: 200, autor: 'Maria', editora: 'Abril Educação'},
	          'livro tres': {quantidadePaginas: 300, autor: 'Carolina', editora: 'FTD'}}*/


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'livro dois';
console.log(' O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');
// O livro livro dois tem 200 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(' O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor);
//O autor do livro livro dois é Maria

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(' O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora);
// O livro livro dois foi publicado pela editora Abril Educação
