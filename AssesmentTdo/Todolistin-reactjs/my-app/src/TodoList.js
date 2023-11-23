import React, { useState } from 'react';
import './App.css';
function TodoListagain() {
  const [data, setdata] = useState('');
  const [TodoList, setTodoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const Addlist = (data) => {
    if (data.trim() === '') {
      alert('Please enter a valid activity before adding.');
      return;
    }
    setdata('');
    setTodoList([...TodoList, data]);
    setCheckedItems([...checkedItems, false]); 
  };
  const deleteList = (key) => {
    const updatedList = [...TodoList];
    updatedList.splice(key, 1);
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems.splice(key, 1);
    setTodoList(updatedList);
    setCheckedItems(updatedCheckedItems);
  };
  const toggleCheck = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };
  return (
    <div className="todo-list-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your Activity"
          value={data}
          onChange={(e) => {
            setdata(e.target.value);
          }}
        />
        <button onClick={() => { Addlist(data); }}>Add</button>
      </div>
      <ul>
        {TodoList.map((item, i) => (
          <li key={i} className={`todo-item ${checkedItems[i] ? 'checked' : ''}`}>
            <div>
              <input
                type="checkbox"
                className="checkbox"
                checked={checkedItems[i]}
                onChange={() => toggleCheck(i)}
              />
              {item}
            </div>
            <button className="delete-button" onClick={() => deleteList(i)}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoListagain;
