// Função para gerar um número aleatório dentro de um intervalo
const numAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min);

//Funções para gerar caracteres aleatórios
const geraLetrasMaiusculas = () => String.fromCharCode(numAleatorio(65, 91));
const geraLetrasMinusculas = () => String.fromCharCode(numAleatorio(97, 123));
const geraNumeros = () => String.fromCharCode(numAleatorio(48, 58));
const simbolos = '!@#$%¨&()_+={}[]?;:.,<>/|-*';
const geraSimbolos = () => simbolos[numAleatorio(0, simbolos.length)];

// Função principal que gera a senha
export default function geraSenha (qtd, maiusculas, minusculas, numeros, simbolos) {
    const arraySenha = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        minusculas && arraySenha.push(geraLetrasMinusculas());
        maiusculas && arraySenha.push(geraLetrasMaiusculas());
        numeros && arraySenha.push(geraNumeros());
        simbolos && arraySenha.push(geraSimbolos());
    }
    
    return arraySenha.join('').slice(0, qtd);
}