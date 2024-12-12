const prompt = require("prompt-sync")({sigint:true});
/*    EQUIPE
    JOÃO BRAYNER
    SOCORRO BARRETO
    DANIELA LOPES
    RICARDO SANTOS
    THIAGO MARIANO
    TÁCYTO
    MARCOS

    Tereeza, no nosso aplicativo a maioria das funcionalidades precisam ser alimentadas com dados para poder está 100% funcional. 
    Com base nisso fizemos um "formulário de cadastro do mei" em que ele pode editar os dados e um link direto para o site da emissão 
    do das.
*/
    
    var s = 1;
while (s == 1) {
    
    var  A = 1;
    var nome = prompt("Nome: ");
    var dataNascimento = prompt("Data de nascimento (nesse formato: dd/mm/aaaa): ");
    var cnpj = prompt("CNPJ (nesse formato: 00.000.000/0000-00): ");
    var telefone = prompt("Telefone: ");
    var email = prompt("Email: ");

    var lougradouro = prompt("Lougradouro: ");
    var numero = prompt("Número: ");
    var complemento = prompt("Complemento: ");
    var cep = prompt("CEP: ");
    var cidade = prompt("Cidade: ");
    var estado = prompt("Estado: ");

    var cliente = {
        nome: nome,
        dataNascimento: dataNascimento,
        cnpj: cnpj,
        telefone: telefone,
        email: email,
    }
    var enderecoCliente = {
        lougradouro:lougradouro, 
        numero:numero, 
        complemento:complemento, 
        cep:cep, 
        cidade:cidade,
        estado:estado,
    }

    console.log();
    console.log("Dados do @MEI:");

    for (const chave in cliente) { 
        if (cliente.hasOwnProperty(chave)) {
            console.log(`${chave}: ${cliente[chave]}`); 
        } 
    }
    for (const chave in enderecoCliente) { 
        if (enderecoCliente.hasOwnProperty(chave)) { 
            console.log(`${chave}: ${enderecoCliente[chave]}`); 
        } 
    }

    console.log();
    var editCliente = prompt("Deseja editar algum campo de dados do @MEI? (1-SIM 2-NÃO): ").toLowerCase();
    editarCliente();
    while (A == 1) {
        var outroedit = prompt("Editar outro campo? (1-SIM 2-NÃO): ").toLowerCase();
        if (outroedit == "1" || outroedit == "sim") {
            A = 1;
            editarCliente();
        } 
        else if (outroedit == "2"  || outroedit =="sim"){
            A = 2;
        }
    }
    var viewedit = prompt("Deseja visualizar os dados do @MEI atualizados? (1-SIM 2-NÃO): ").toLowerCase()
            while (viewedit != "1" && viewedit != "sim" && viewedit !="2" && viewedit!="nao"){
                var viewedit = prompt("Deseja visualizar os dados do @MEI atualizados? (1-SIM 2-NÃO): ").toLowerCase();
                console.log();
            }
    if (viewedit == "1" || viewedit =="sim") {
        console.log();
        console.log("Dados do @MEI:");
        for (const chave in cliente) { 
            if (cliente.hasOwnProperty(chave)) {
                console.log(`${chave}: ${cliente[chave]}`); 
            } 
        }
        for (const chave in enderecoCliente) { 
            if (enderecoCliente.hasOwnProperty(chave)) { 
                console.log(`${chave}: ${enderecoCliente[chave]}`); 
            } 
        }
    }
    
    console.log();
    emitirDas();


    var s = prompt("Deseja utilizar o sistema novamente? (1-SIM 2-NÃO): ").toLowerCase();
    while ( s != "1" && s != "sim" && s != "2" && s != "nao"){
        console.log();
        var s = prompt("Deseja utilizar o sistema novamente? (1-SIM 2-NÃO): ").toLowerCase();
    }
    if (s == "1" || s == "sim") {
        s = 1;
    }else{
        s = 2
    }
}
function emitirDas() {
    var das = prompt("Deseja emitir o DAS? (1-SIM 2-NÃO): ").toLowerCase();
    while ( das != "1" && das != "sim" && das != "2" && das != "nao"){
        console.log();
        var das = prompt("Deseja emitir o DAS? (1-SIM 2-NÃO): ").toLowerCase();
    }
    if (das == "1" || das == "sim"){
        console.log("Site para Emissão do DAS: https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao");
    }
}

function editarCliente() {
    console.log()
    while (editCliente != "1" && editCliente != "sim" && editCliente != "2" && editCliente != "nao"){
        editCliente = prompt("Deseja editar algum campo de dados do @MEI? (1-SIM 2-NÃO): ").toLowerCase();
        console.log();
    }
    if (editCliente == "1" || editCliente == "sim"){
        console.log("1-nome\n2-Data de Nascimento\n3-CNPJ\n4-Telefone\n5-Email\n6-Lougradouro\n7-Número\n8-Complemento\n9-CEP\n10-Cidade\n11-EstadoCampo")
        var campoEdit = prompt("Qual campo deseja alterar?: ").toLowerCase();
        console.log();

        while (campoEdit != "1" && campoEdit != "nome"  && campoEdit != "2" && campoEdit != "data de nascimento" && campoEdit != "3" && campoEdit != "cnpj" && campoEdit != "4" && campoEdit != "telefone" && campoEdit != "5" && campoEdit != "email" && campoEdit != "6" && campoEdit != "lougradouro" && campoEdit != "7" && campoEdit != "número" && campoEdit != "8" && campoEdit != "complemento" && campoEdit != "9" && campoEdit != "cep" && campoEdit != "10" && campoEdit != "cidade" && campoEdit != "11" && campoEdit != "estado" ) {
            console.log("1-nome\n2-Data de Nascimento\n3-CNPJ\n4-Telefone\n5-Email\n6-Lougradouro\n7-Número\n8-Complemento\n9-CEP\n10-Cidade\n11-EstadoCampo")
            var campoEdit = prompt("Qual campo deseja alterar?: ").toLowerCase();
            console.log();
        }
        if (campoEdit == "1" || campoEdit == "nome"){
            cliente.nome = prompt("Nome: ");
            console.log(`nome alterado para "${cliente.nome}"`);
        }
        else if (campoEdit == "2" || campoEdit == "data de nascimento"){
            cliente.dataNascimento = prompt("Data de nascimento: ");
            console.log(`Data de nascimento alterada para "${cliente.dataNascimento}"`);
        }
        else if (campoEdit == "3" || campoEdit == "cnpj"){
            cliente.cnpj = prompt("CNPJ: ");
            console.log(`CNPJ alterado para "${cliente.cnpj}"`);
        }
        else if (campoEdit == "4" || campoEdit == "telefone"){
            cliente.telefone = prompt("Telefone: ");
            console.log(`Telefone alterado para "${cliente.telefone}"`);
        }
        else if (campoEdit == "5" || campoEdit == "email"){
            cliente.email = prompt("Email: ");
            console.log(`Email alterado para "${cliente.email}"`);
        }
        else if (campoEdit == "6" || campoEdit == "lougradouro"){
            enderecoCliente.lougradouro = prompt("Lougradoro: ");
            console.log(`Lougradoro alterado para "${enderecoCliente.lougradouro}"`);
        }
        else if (campoEdit == "7" || campoEdit == "número"){
            enderecoCliente.numero = prompt("Número: ");
            console.log(`Número alterado para "${enderecoCliente.numero}"`);
        }
        else if (campoEdit == "8" || campoEdit == "complemento"){
            enderecoCliente.complemento = prompt("Complemento: ");
            console.log(`Complemento alterado para "${enderecoCliente.complemento}"`);
        }
        else if (campoEdit == "9" || campoEdit == "cep"){
            enderecoCliente.cep = prompt("CEP: ");
            console.log(`CEP alterado para "${enderecoCliente.cep}"`);
        }
        else if (campoEdit == "10" || campoEdit == "cidade"){
            enderecoCliente.cidade = prompt("Cidade: ");
            console.log(`Cidade alterado para "${enderecoCliente.cidade}"`);
        }
        else if (campoEdit == "11" || campoEdit == "estado"){
            enderecoCliente.estado = prompt("Estado: ");
            console.log(`Estado alterado para "${enderecoCliente.estado}"`);
        }
        
    }
}
