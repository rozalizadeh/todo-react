export function Todo(props){
return (
    <div className="item">
                <input type="checkbox" checked={props.status}/>
               <span>{props.title}</span> 
               <button className="delete">Delete</button>
            </div>
);


}

