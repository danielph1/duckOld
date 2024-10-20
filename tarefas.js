import fs from 'fs';

// var diasArray = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
// var monthArray = new Array("1","2","3","4","5","6","7","8","9","10","11","12")
var myDate = new Date()

class tarefa{
    constructor(nome, dia, mes, description){
        this.nome = nome;
        this.dia = dia;
        this.mes = mes;
        this.description = description;
    }
}

function criarTarefa(a, b, c, d){
    let tarefaNova = new tarefa(a, b, c, d);
        fs.writeFileSync('./tarefas.json', 'utf8');
            let lerTarefa = JSON.stringify(fs.readFileSync(tarefaNova), 'utf8');
            let cadastroTarefa = lerTarefa != "" ? JSON.parse(lerTarefa) : []
                fs.writeFileSync('./cadastro.json', JSON.stringify(cadastroTarefa, null, 3), 'utf-8')
}

criarTarefa('festa1', '32', '11', 'festa de Pedro')


if(tarefa.dia > 31){
    console.log('dia inválido!')
}
if(tarefa.mes > 12){
    console.log('mes inválido!')
}

function mostrarTarefas(){
    console.table(tarefaNova.nome, tarefaNova.dia)
}

mostrarTarefas()

//testando invalidez