"use strict";
let todos = {
    construct: function(){
        this.selectElements();
        this.addListeners();
    },
    selectElements: function() {
        this.todoInput = document.getElementById("todo_input");
        this.addButton = document.getElementById("add_button");
        this.undoButton = document.getElementById("undo_button");
        this.todoList = document.getElementById("todo_list");
        this.junk = null;
        this.toRemove = null;
    },
    doTodo: function(todo){
        if(todo.style.color === "black"){
            var d = new Date();
            var date = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay();
            todo.style.color = "gray";
            todo.innerHTML = "<strike>"+todo.innerHTML+"</strike> "+date;
        }else{
            let todo_text;
            todo.style.color = "black";
            todo_text = todo.getElementsByTagName("strike")[0].innerHTML;
            todo.innerHTML = todo_text;
        }
    },
    setToRemove: function(toRemove){
        this.toRemove=toRemove;  
    },
    removeTodo: function(){
        this.junk=this.toRemove;
        $(this.junk).remove();
    },
    addTask: function() {
        let todo, todoDiv, todoText, xButton;
        todo = document.createElement("p");
        xButton = $("<button data-toggle='modal' data-target='#exampleModal' class='btn btn-danger'>X</button>");
        if(this.todoInput.value === "")
            return;
        todoText = document.createTextNode(this.todoInput.value);
        todoDiv = document.createElement("div");
        todoDiv.appendChild(todoText)
        todoDiv.style.color = "black";
        todoDiv.onclick = this.doTodo.bind(this,todoDiv);
        $(todo).append(todoDiv,xButton);
        $(xButton).click(this.setToRemove.bind(this,todo));
        this.todoList.appendChild(todo);
    },
    addListeners: function(){
        this.addButton.onclick = this.addTask.bind(this);
        this.undoButton.onclick = this.undo.bind(this);
    },
    undo: function(){
        $(this.todoList).append(this.junk);
    }
};