    $(document).ready(function() {
        $('#tarefaForm').submit(function(event) {
        event.preventDefault(); 
        var tarefa = $('#novaTarefa').val();
        if (tarefa) {
            $('#listaTarefas').append('<li>' + tarefa + '</li>');
            $('#novaTarefa').val(''); 
    }
});

    $('#listaTarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});