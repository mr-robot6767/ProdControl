const ordensProducao = [];

export function cadastrarOrdemProducao(ordemProducao) {
    ordensProducao.push(ordemProducao);
}

export function listarOrdensProducao() {
    return ordensProducao;
}

export function buscarOrdemProducaoPorIndice(indice) {
    return ordensProducao[indice];
}

export function atualizarOrdemProducao(indice, ordemProducao) {
    ordensProducao[indice] = ordemProducao;
}

export function excluirOrdemProducao(indice) {
    ordensProducao.splice(indice, 1);
}
