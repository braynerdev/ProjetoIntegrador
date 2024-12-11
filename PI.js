const prompt = require('prompt-sync')({sigint:true});   

const nome = prompt('Nome: ');
const dataNascimento = prompt('Data de nascimento (nesse formato: dd/mm/aaaa): ');
const cnpj = prompt('CNPJ (nesse formato: 000.000.000-00): ');
const telefone = prompt('Telefone: ');
const email = prompt('Email: ');

const lougradouro = prompt('Lougradouro: ');
const numero = prompt('Número: ');
const complemento = prompt('Complemento: ');
const cep = prompt('CEP: ');
const cidade = prompt('Cidade: ');
const estado = prompt('Estado: ');

const cliente = {
    nome: nome,
    dataNascimento: dataNascimento,
    cnpj: cnpj,
    telefone: telefone,
    email: email,
}
const enderecoCliente = {
    lougradouro:lougradouro, 
    numero:numero, 
    complemento:complemento, 
    cep:cep, 
    cidade:cidade,
    estado:estado
}


function editarCliente() {
    if 
    cliente.telefone = prompt('Telefone: ');;
}