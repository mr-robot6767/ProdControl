import Operador from './Operador.js';
export const operadorController = {cadastrar,listarTodos,buscarPorIndice,atualizarPorIndice,excluirPorIndice,ativarOperadorPorIndice,desativarOperadorPorIndice};

export function cadastrar(matricula, nome, funcao, turno) {
    const novoOperador = new Operador(matricula, nome, funcao, turno);
    cadastrarOperador(novoOperador);
    console.log(`Operador [${matricula}] cadastrado com sucesso!`);
}

export function listarTodos() {
    const lista = listarOperadores();
    console.log("\n--- LISTA DE OPERADORES ---");
    for (let i = 0; i < lista.length; i++) {
        const o = lista[i];
        console.log(`Índice: ${i} | Matrícula: ${o.matricula} | Nome: ${o.nome} | Função: ${o.funcao} | Turno: ${o.turno} | Status: ${o.status}`);
    }
}

export function buscarPorIndice(indice) {
    const operador = buscarOperadorPorIndice(indice);
    if (!operador) {
        console.log(`Erro: Nenhum operador encontrado no índice ${indice}.`);
        return;
    }
    console.log(`Operador encontrado no índice ${indice}: [${operador.matricula}] ${operador.nome} - Status: ${operador.status}`);
}

export function atualizarPorIndice(indice, matricula, nome, funcao, turno) {
    if (!buscarOperadorPorIndice(indice)) {
        console.log(`Erro: Não é possível atualizar. Nenhum operador encontrado no índice ${indice}.`);
        return;
    }
    const operadorAtualizado = new Operador(matricula, nome, funcao, turno);
    atualizarOperador(indice, operadorAtualizado);
    console.log(`Operador no índice ${indice} atualizado com sucesso!`);
}

export function excluirPorIndice(indice) {
    if (!buscarOperadorPorIndice(indice)) {
        console.log(`Erro: Não é possível excluir. Nenhum operador encontrado no índice ${indice}.`);
        return;
    }
    excluirOperador(indice);
    console.log(`Operador no índice ${indice} excluído com sucesso!`);
}
export function ativarOperadorPorIndice(indice) {
    const operador = buscarOperadorPorIndice(indice);
    if (!operador) {
        console.log(`Erro: Não foi possível ativar. Nenhum operador encontrado no índice ${indice}.`);
        return;
    }
    operador.ativar();
    console.log(`Operador [${operador.nome}] foi ATIVADO com sucesso.`);
}

export function desativarOperadorPorIndice(indice) {
    const operador = buscarOperadorPorIndice(indice);
    if (!operador) {
        console.log(`Erro: Não foi possível desativar. Nenhum operador encontrado no índice ${indice}.`);
        return;
    }
    operador.desativar();
    console.log(`Operador [${operador.nome}] foi DESATIVADO com sucesso.`);
}
