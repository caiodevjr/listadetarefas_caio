$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        // Evita que o formulário recarregue a página
        event.preventDefault();
        
        // Obtém o valor do campo de entrada
        let nomeTarefa = $('#nome-tarefa').val();
        
        // Verifica se o campo não está vazio
        if (nomeTarefa.trim() === '') {
            alert('Por favor, insira o nome da tarefa.');
            return;
        }
        
        // Cria um novo item de lista com a tarefa
        let novoItem = $('<li>').text(nomeTarefa);
        
        // Adiciona o efeito de linha através do texto ao clicar nos itens da lista
        novoItem.click(function() {
            $(this).toggleClass('feito');
        });
        
        // Adiciona o novo item à lista ordenada de tarefas
        $('#lista-tarefas').append(novoItem);
        
        // Limpa o campo de entrada
        $('#nome-tarefa').val('');
    });
});