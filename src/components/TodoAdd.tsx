import React, { useContext, useState } from 'react';
import { Button, Flex, Input } from '@fluentui/react-northstar';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react';
import InfoBar from './InfoBar';

const AddTodo = () => {
    const [ title, setTitle ] = useState("");
    const todoStore = useContext(TodoStore);
    const { addTodo } = todoStore;
    const setTodo = (e: any) => {
        setTitle(e.target.value);
    }

    return (
        <Flex column gap="gap.small" >
            <InfoBar />
            <Input fluid value={title} type='text' placeholder="Todo title..." onChange={ setTodo } />
            <Button content="Add Todo" primary style={{ width: 160 }} onClick={_ => {
                    addTodo({
                        title: title,
                        completed: false
                    });
                    setTitle("");
                }
            }/>
        </Flex>
    );
}

export default observer(AddTodo);
