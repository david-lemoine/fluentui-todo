import React from 'react';
import { Header, Flex } from '@fluentui/react-northstar';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Flex column gap="gap.medium">
        <Header content="Todos" />
        <TodoAdd />
        <TodoList />
      </Flex>
    </div>
  );
}

export default App;
