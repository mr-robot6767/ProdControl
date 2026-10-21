import Maquina from './Maquina.js';
export const maquinaController = {cadastrar,listarTodos,buscarPorIndice,atualizarPorIndice,excluirPorIndice,ligarMaquinaPorIndice,desligarMaquinaPorIndice};


export function cadastrar(codigo, nome, setor) {
    const novaMaquina = new Maquina(codigo, nome, setor);
    cadastrarMaquina(novaMaquina);
    console.log(`Máquina [${codigo}] cadastrada com sucesso!`);
}

export function listarTodos() {
    const lista = listarMaquinas();
    console.log("\n--- LISTA DE MÁQUINAS ---");
    for (let i = 0; i < lista.length; i++) {
        const m = lista[i];
        console.log(`Índice: ${i} | Código: ${m.codigo} | Nome: ${m.nome} | Setor: ${m.setor} | Status: ${m.status}`);
    }
}

export function buscarPorIndice(indice) {
    const maquina = buscarMaquinaPorIndice(indice);
    if (!maquina) {
        console.log(`Erro: Nenhuma máquina encontrada no índice ${indice}.`);
        return;
    }
    console.log(`Máquina encontrada no índice ${indice}: [${maquina.codigo}] ${maquina.nome} - Status: ${maquina.status}`);
}

export function atualizarPorIndice(indice, codigo, nome, setor) {
    if (!buscarMaquinaPorIndice(indice)) {
        console.log(`Erro: Não é possível atualizar. Nenhuma máquina encontrada no índice ${indice}.`);
        return;
    }
    const maquinaAtualizada = new Maquina(codigo, nome, setor);
    atualizarMaquina(indice, maquinaAtualizada);
    console.log(`Máquina no índice ${indice} atualizada com sucesso!`);
}

export function excluirPorIndice(indice) {
    if (!buscarMaquinaPorIndice(indice)) {
        console.log(`Erro: Não é possível excluir. Nenhuma máquina encontrada no índice ${indice}.`);
        return;
    }
    excluirMaquina(indice);
    console.log(`Máquina no índice ${indice} excluída com sucesso!`);
}
export function ligarMaquinaPorIndice(indice) {
    const maquina = buscarMaquinaPorIndice(indice);
    if (!maquina) {
        console.log(`Erro: Não foi possível ligar. Nenhuma máquina encontrada no índice ${indice}.`);
        return;
    }
    maquina.ligar();
    console.log(`Máquina [${maquina.nome}] foi LIGADA com sucesso.`);
}

export function desligarMaquinaPorIndice(indice) {
    const maquina = buscarMaquinaPorIndice(indice);
    if (!maquina) {
        console.log(`Erro: Não foi possível desligar. Nenhuma máquina encontrada no índice ${indice}.`);
        return;
    }
    maquina.desligar();
    console.log(`Máquina [${maquina.nome}] foi DESLIGADA com sucesso.`);
}
