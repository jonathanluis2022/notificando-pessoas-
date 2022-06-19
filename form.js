function myEscopo() { //criado para nada ser poluido
    const form = document.querySelector('.form'); //para add o form
    const resultado = document.querySelector('.resultado'); // para add o result

    const pessoas = [];//criei vazio para jogar o object


    function naoEnviar(evento) {
        evento.preventDefault();//evento para nao atualizar e perder 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ //object criado
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value //value para pegar o valor 
        });

        console.log(pessoas) // exibir pessoas 

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
        // innerHTML para exibir para o Usuario 

    }

    form.addEventListener('submit', naoEnviar); //add um evento de nao atualizar como acima 

}
myEscopo();


