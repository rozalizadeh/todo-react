import { Todo } from "./components/Todo";
import { TodoInput } from "./components/TodoInput";
import { Actions } from "./components/Actions";
import { Search } from "./components/Search";

const todos=[
    {
    title:"item1",
    status: false,
    }
,
    {
    title:"item2",
    status: true,
    }

,
    {
    title:"item3",
    status: false,
    },


];


export function App() {
    return (
        
            <div className="container">
        <div className="form">
            <TodoInput />
            <br />
            <Actions />
            <Search />
        </div>
        <div className="list">
            {todos.map((value) => {
                return <Todo title={value.title} status={value.status} /> ;
            })}
                

            </div>
    </div>
        
    );
}