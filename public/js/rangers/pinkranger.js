$(document).ready(function () {

    console.log("the JS is linked properly")


    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });



    // Get references to page elements
    var $todoText = $(".todo-text");
    var $todoDescription = $(".todo-description");
    var $submitBtn = $("#submit");
    var $todoList = $(".todo-list");


    // The API object contains methods for each kind of request we'll make
    var API = {
        saveTodo: function (todo) {
            return $.ajax({
                headers: {
                    "Content-Type": "application/json"
                },
                type: "POST",
                url: "api/todo",
                data: JSON.stringify(todo)
            });
        },
        getTodo: function () {
            return $.ajax({
                url: "api/todo",
                type: "GET"
            });
        },
        deleteTodo: function (id) {
            return $.ajax({
                url: "api/todo/" + id,
                type: "DELETE"
            });
        }
    };

    // refreshExamples gets new examples from the db and repopulates the list
    var refreshTodo = function () {
        API.getTodo().then(function (data) {
            var $todo = data.map(function (todo) {

                var todoCard = "<div class='card yellow lighten-2 darken-1 list-group-item' data-id=" + todo.id + "><div class='card-content white-text'><span class='card-title grey-text text-darken-4'>" + todo.text + "</span><p class='grey-text text-darken-4'>" + todo.description + "</p></div><div class='card-action'><a href='#' class = 'btn-small red waves-effect waves-light delete' data-id=" + todo.id + " >Delete</a> <p> <label><input class = 'check' type='checkbox'/><span class='grey-text text-darken-4'>Completed </span></label></p>"
                // var $a = $("<a>")
                //     .html("<h6>"+todo.text+"</h6>")
                //     .attr("href", "/todo/" + todo.id);

                var $li = $("<li>")
                    .attr({
                        class: "list-group-item",
                        "data-id": todo.id
                    })
                // .append($a);

                var $button = $("<button>")
                    .addClass("btn btn-danger float-right delete")
                    .text("ｘ");

                // $li.append($button);
                $li.append(todoCard);
           

                return $li;
            });

            $todoList.empty();
            $todoList.append($todo);
        });
    };

    // handleFormSubmit is called whenever we submit a new example
    // Save the new example to the db and refresh the list
    var handleFormSubmit = function (event) {
        event.preventDefault();

        var todo = {
            text: $(".todo-text").val().trim(),
            description: $todoDescription.val().trim()
        };

        if (!(todo.text && todo.description)) {
            alert("You must enter task and a description!");
            return;
        }

        API.saveTodo(todo).then(function () {
            refreshTodo();
        });

        $todoText.val("");
        $todoDescription.val("");
    };

    // handleDeleteBtnClick is called when an example's delete button is clicked
    // Remove the example from the db and refresh the list
    var handleDeleteBtnClick = function () {
        var idToDelete = $(this)
            // .parent()
            .attr("data-id");
        console.log("THIS IS THE ID TO DELETE" + idToDelete)
        API.deleteTodo(idToDelete).then(function () {
            refreshTodo();
        });

    };

    // Add event listeners to the submit and delete buttons
    $submitBtn.on("click", handleFormSubmit);
    $todoList.on("click", ".delete", handleDeleteBtnClick);
    refreshTodo();



});