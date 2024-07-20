const dadosMock = {
    'Nome Completo': 'Artur Henrique de Oliveira',
    'Telefone': '(31) 99914-6175',
    'E-mail': 'arturholiv@gmail.com',
    'CEP': '32.115-150',
    'Endereço': 'Rua Castelo Nuevo',
    'Cidade': 'Contagem',
    'Estado': 'Minas Gerais',
    'Nome do Titular': 'Artur Henrique de Oliveira',
    'Número do Cartão': '1234 5678 4321 8765',
    'Data de Validade': '07/2031',
    'CVV': '300'
};

const etapasDoFormulario = document.querySelectorAll('.form-step');
const botao = document.getElementById('next-btn');


let etapaAtual = 0;

function preencherStep(indiceEtapa) {
    const etapa = etapasDoFormulario[indiceEtapa];
    const inputs = etapa.querySelectorAll('.input-field input');
    inputs.forEach(input => {
        const label = input.previousElementSibling;
        if (label && dadosMock[label.textContent]) {
            input.value = dadosMock[label.textContent];
        }
    });
}

function validarEmail() {
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }
    return true;
}

function proximaEtapa() {
    etapaAtual++;
    setTimeout(() => botao.click(), 500);
}

botao.addEventListener('click', function() {
    preencherStep(etapaAtual);

    if (etapaAtual === 0) {
        if (!validarEmail()) {
            return;
        }
    }

    setTimeout(proximaEtapa, 500);
});

function preencherEEnviarAutomaticamente() {
    preencherStep(etapaAtual);
        setTimeout(() => {
            botao.click();
        }, 500);
}

setTimeout(preencherEEnviarAutomaticamente, 500);
