import { maquinaController } from './maquinaController.js';
import { operadorController } from './operadorController.js';
import { ordemProducaoController } from './ordemProducaoController.js';

console.log("==================================================");
console.log(" INICIANDO TESTES DO FLUXO DE PRODUÇÃO (app.js)");
console.log("==================================================\n");

console.log("--- [CADASTRO] Cadastrando Máquinas ---");
maquinaController.cadastrar('MAQ-001', 'Torno CNC', 'Usinagem');
maquinaController.cadastrar('MAQ-002', 'Corte de Chapa Laser', 'Corte');

console.log("\n--- [CADASTRO] Cadastrando Operadores ---");
operadorController.cadastrar('OP-101', 'Carlos Silva', 'Operador de Torno', 'Matutino');
operadorController.cadastrar('OP-102', 'Ana Souza', 'Técnica de Corte', 'Vespertino');

console.log("\n--- [CADASTRO] Cadastrando Ordens de Produção ---");
ordemProducaoController.cadastrar('OP-2026-A', 'Mesa de Jantar Premium', 20, '15 dias');
ordemProducaoController.cadastrar('OP-2026-B', 'Cadeira Estofada Luxo', 80, '10 dias');

console.log("\n==================================================");
console.log(" PRIMEIRA LISTAGEM GERAL");
console.log("==================================================");
maquinaController.listarTodos();
operadorController.listarTodos();
ordemProducaoController.listarTodos();

console.log("\n==================================================");
console.log(" TESTANDO BUSCAS POR ÍNDICE");
console.log("==================================================");
maquinaController.buscarPorIndice(0);
operadorController.buscarPorIndice(1);
ordemProducaoController.buscarPorIndice(0);

console.log("\n--- [ESTADO] Ligando e Desligando uma Máquina ---");
maquinaController.ligarMaquinaPorIndice(0);
maquinaController.desligarMaquinaPorIndice(0);

console.log("\n--- [ESTADO] Desativando um Operador ---");
operadorController.desativarOperadorPorIndice(1);

console.log("\n--- [ESTADO] Atualizando Estados da Ordem de Produção ---");
ordemProducaoController.iniciarOrdemPorIndice(0);
ordemProducaoController.concluirOrdemPorIndice(0);

console.log("\n==================================================");
console.log(" TESTANDO ATUALIZAÇÕES PELO ÍNDICE");
console.log("==================================================");
maquinaController.atualizarPorIndice(1, 'MAQ-002-MOD', 'Corte Laser Industrial', 'Corte Pesado');
operadorController.atualizarPorIndice(0, 'OP-101', 'Carlos Silva Rezende', 'Supervisor de Usinagem', 'Integral');
ordemProducaoController.atualizarPorIndice(1, 'OP-2026-B', 'Cadeira Estofada Luxo - Tecido Suede', 100, '7 dias');

console.log("\n==================================================");
console.log(" TESTANDO EXCLUSÕES PELO ÍNDICE");
console.log("==================================================");
maquinaController.excluirPorIndice(0);
operadorController.excluirPorIndice(1);
ordemProducaoController.excluirPorIndice(0);

console.log("\n==================================================");
console.log(" SEGUNDA LISTAGEM GERAL (PÓS ALTERAÇÕES/EXCLUSÕES)");
console.log("==================================================");
maquinaController.listarTodos();
operadorController.listarTodos();
ordemProducaoController.listarTodos();

console.log("\n==================================================");
console.log(" TESTES CONCLUÍDOS COM SUCESSO!");
console.log("==================================================");
