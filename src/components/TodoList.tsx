import React, { useContext } from 'react';
import { Button, Table } from '@fluentui/react-northstar';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react';

const TodoList = () => {
    const todoStore = useContext(TodoStore);
    const { todos, toggleTodo, removeTodo } = todoStore;
    const header = {
        items: [ 'Title', 'Completed?', 'Actions' ],
    };

    return (
        <Table 
            header={header} 
            rows={ todos.map((todo) => ( { 
                    key: todo.id, 
                    items: [ 
                        todo.title, 
                        todo.completed ? "✅" : "",
                        <Button content="Toggle" />
                    ] 
                } )) }  />
    );
}

export default observer(TodoList);
