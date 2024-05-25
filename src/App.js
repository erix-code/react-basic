import logo from './platzi.webp';
import './App.css';
import TodoItem  from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import TodoSearch from "./Components/TodoSearch";
import TodoCounter from "./Components/TodoCounter";
import { CreateTodoButton } from "./Components/CreateTodoButton";

function App() {
    const list = [1, 2, 3, 4, 5]
  return (
    <div className="App">
        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>
        <TodoList>
            {list.map((item, key) => {
                return <TodoItem item={item} key={key}/>
            })}
        </TodoList>
        <CreateTodoButton></CreateTodoButton>
    </div>
  );
}



export default App;
