const button = document.querySelector("#inputButton");

button.addEventListener('click', criarTabuada);


function criarTabuada() {
    const numero = Number((document.querySelector('#inputNum')).value);

    let divTabu = document.querySelector('#divTabu');

    divTabu.innerHTML=''; //zera o select antes de inseri novos dados
    
    for (let i = 1; i < 11; i++) {
        let lista = document.createElement('li');
        lista.style.listStyle='none';
        lista.innerHTML += `${i} X ${numero} = ${i*numero}`;
        divTabu.appendChild(lista);
    }
}

