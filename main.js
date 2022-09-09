var formulario = document.querySelector('form#contato')

formulario.addEventListener('submit', enviar)

function enviar(evento) {
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.getAll('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')

    console.log(nome, email, turma, motivo, mensagem);

    var resultado = document.querySelector('p.mensagem')

    // var resultado = document.createElement('p')
    // resultado.classList.add('mensagem')
    resultado.style.padding = '10px'
    resultado.style.textAlign = 'center'
    
    resultado.innerHTML = `
        <i>${nome}<i>, sua mensagem foi enviada com sucesso!
    `
    // formulario.append(resultado)

    var templateParams = {
        nome : nome,
        email : email,
        turma : turma,
        motivo : motivo,
        mensagem: mensagem
    };
     
    emailjs.send('service_pltel3m', 'template_q8k7oyi', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}