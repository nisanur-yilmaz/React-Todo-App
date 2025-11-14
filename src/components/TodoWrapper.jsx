import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm.jsx";
import EditTodoForm from "./EditTodoForm.jsx";
import Todo from "./Todo.jsx";
import { v4 as uuidv4 } from "uuid";

function TodoWrapper() {
    const [todos, setTodos] = useState(() => {

        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>Web Development Task!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
}

export default TodoWrapper;
