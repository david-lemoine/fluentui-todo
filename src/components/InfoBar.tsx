import React, { useContext } from 'react';
import { Flex, Label } from '@fluentui/react-northstar';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react';

const InfoBar = () => {
    const todoStore = useContext(TodoStore);
    const { info } = todoStore;

    return (
        <Flex gap="gap.medium">
            <Label>Total items: &nbsp; {info.total}</Label>
            <Label>Finished items: &nbsp; {info.completed}</Label>
            <Label>Unfinished items: &nbsp; {info.notCompleted}</Label>
        </Flex>  
    );
}

export default observer(InfoBar);