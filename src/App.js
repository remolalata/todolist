import { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import { ITEMS } from './utils/constants';
import './App.css';

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const handleClick = id => {
    setTodoList(prevState => {
      let oldState = prevState;
      return oldState.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: true
          }
        }

        return item;
      });
    })
  }
  
  useEffect(() => {
    ITEMS.length && setTodoList(ITEMS);
  }, [])

  return (
    <div className='container'>
      {todoList.length ? <TodoList items={todoList} onItemClick={handleClick} /> : null}
    </div>
  )
}

export default App;
