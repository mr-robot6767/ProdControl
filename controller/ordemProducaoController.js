import { OrdemProducao } from './OrdemProducao.js';
export const ordemProducaoController = {cadastrar,listarTodos,buscarPorIndice,atualizarPorIndice,excluirPorIndice,iniciarOrdemPorIndice,concluirOrdemPorIndice
};

export function cadastrar(numero, produto, quantidade, prazo) {
    const novaOrdem = new OrdemProducao(numero, produto, quantidade, prazo);
    cadastrarOrdemProducao(novaOrdem);
    console.log(`Ordem de Produção Nº [${numero}] cadastrada com sucesso!`);
}

export function listarTodos() {
    const lista = listarOrdensProducao();
    console.log("\n--- LISTA DE ORDENS DE PRODUÇÃO ---");
    for (let i = 0; i < lista.length; i++) {
        const op = lista[i];
        console.log(`Índice: ${i} | Número: ${op.numero} | Produto: ${op.produto} | Qtd: ${op.quantidade} | Prazo: ${op.prazo} | Status: ${op.status}`);
    }
}

export function buscarPorIndice(indice) {
    const op = buscarOrdemProducaoPorIndice(indice);
    if (!op) {
        console.log(`Erro: Nenhuma Ordem de Produção encontrada no índice ${indice}.`);
        return;
    }
    console.log(`Ordem encontrada no índice ${indice}: Nº [${op.numero}] ${op.produto} - Status: ${op.status}`);
}

export function atualizarPorIndice(indice, numero, produto, quantidade, prazo) {
    if (!buscarOrdemProducaoPorIndice(indice)) {
        console.log(`Erro: Não é possível atualizar. Nenhuma Ordem de Produção encontrada no índice ${indice}.`);
        return;
    }
    const ordemAtualizada = new OrdemProducao(numero, produto, quantidade, prazo);
    atualizarOrdemProducao(indice, ordemAtualizada);
    console.log(`Ordem de Produção no índice ${indice} atualizada com sucesso!`);
}

export function excluirPorIndice(indice) {
    if (!buscarOrdemProducaoPorIndice(indice)) {
        console.log(`Erro: Não é possível excluir. Nenhuma Ordem de Produção encontrada no índice ${indice}.`);
        return;
    }
    excluirOrdemProducao(indice);
    console.log(`Ordem de Produção no índice ${indice} excluída com sucesso!`);
}
export function iniciarOrdemPorIndice(indice) {
    const op = buscarOrdemProducaoPorIndice(indice);
    if (!op) {
        console.log(`Erro: Não foi possível iniciar. Nenhuma Ordem de Produção encontrada no índice ${indice}.`);
        return;
    }
    op.iniciar();
    console.log(`Ordem de Produção Nº [${op.numero}] entrou EM PRODUÇÃO.`);
}

export function concluirOrdemPorIndice(indice) {
    const op = buscarOrdemProducaoPorIndice(indice);
    if (!op) {
        console.log(`Erro: Não foi possível concluir. Nenhuma Ordem de Produção encontrada no índice ${indice}.`);
        return;
    }
    op.concluir();
    console.log(`Ordem de Produção Nº [${op.numero}] foi CONCLUÍDA.`);
}
