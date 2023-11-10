export function Actions(){


return( <div>
    Delete Checked Items:
<button id="remove">remove</button>
<br/>
status:
<select className="combo">
    <option id="done" value="done">Done</option>
    <option id="todo" value="todo">Todo</option>
    <option id="all" value="all">All</option>
</select>
</div>
);
}