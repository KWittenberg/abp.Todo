﻿$(function () {

    // DELETING ITEMS /////////////////////////////////////////
    $('#TodoList').on('click', 'li i', function () {
        var $li = $(this).parent();
        var id = $li.attr('data-id');

        todo.services.todo.delete(id).then(function () {
            $li.remove();
            abp.notify.info('Deleted the todo item.');
        });
    });

    // CREATING NEW ITEMS /////////////////////////////////////
    $('#NewItemForm').submit(function (e) {
        e.preventDefault();

        var todoText = $('#NewItemText').val();
        todo.services.todo.create(todoText).then(function (result) {
            $('<li data-id="' + result.id + '">')
                .html('<i class="fa fa-trash-o"></i> ' + result.text)
                .appendTo($('#TodoList'));
            $('#NewItemText').val('');
        });
    });
});