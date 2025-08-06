import geraSenha from './geraSenha';

// Seleciona os elementos do DOM
const senhaGerada = document.querySelector('.senha');
const qtd = document.querySelector('.qtd');
const letrasMaius = document.querySelector('.letras-maius');
const letrasMinus = document.querySelector('.letras-minus');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');
const btnGera = document.querySelector('.gerar-senha');

// Adiciona o evento de clique no botão para gerar a senha
export default () => {
    btnGera.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

// Função que gera a senha com base nas opçôes selecionadas
function gera() {
    const senha = geraSenha(qtd.value, letrasMaius.checked, letrasMinus.checked, numeros.checked, simbolos.checked);
    return senha || 'Nenhuma opção selecionada';
}