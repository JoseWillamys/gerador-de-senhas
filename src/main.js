import {alfabeto, numeros, caracteresEspeciais} from './modules/caracteres';
import {valoresCheckBox, numeroAleatorio} from './modules/funcoes';

import './assets/css/style.css';

(function () {
    const senha = document.querySelector('.senha');
    const button = document.querySelector('.gerar-senha');
    button.addEventListener('click', () => {
        const quantidadeCaracteres = Number(document.querySelector('#quantidade').value);
        let valores = valoresCheckBox();
        let senhaGerada = [];

        if (!quantidadeCaracteres) {
            senha.innerText = 'É necessario definir a quantidade de caracteres da senha.'
            return;
        } else if (quantidadeCaracteres < 6) {
            senha.innerText = 'A quantidade mínima de caracteres é 6.'
            return;
        }

        if (!valores) {
            senha.innerText = 'Selecione pelo menos uma das Opções'
            return;
        }

        for (let i = 1; i <= quantidadeCaracteres; i++) {
            for (let el of valores) {
                if (el === 'n') {
                    senhaGerada.push(numeros[numeroAleatorio(numeros.length)]);
                } else if (el === 'm') {
                    senhaGerada.push(alfabeto[numeroAleatorio(alfabeto.length)]);
                } else if (el === 'M') {
                    senhaGerada.push(alfabeto[numeroAleatorio(alfabeto.length)].toUpperCase());
                } else if (el === '#') {
                    senhaGerada.push(caracteresEspeciais[numeroAleatorio(caracteresEspeciais.length)])
                }
            }

            if (senhaGerada.length === quantidadeCaracteres || senhaGerada.length > quantidadeCaracteres) break;
        }

        senhaGerada = senhaGerada.slice(0, quantidadeCaracteres)
        senha.innerText = senhaGerada.join('');
    })
})();
