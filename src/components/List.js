import React, { useState } from "react";

export default function (props) {
  const [list, setList] = useState([]);

  function clear() {
    props.setTask("");
  }

  const handleAddTask = () => {
    setList([props.task, ...list]);
    clear();
  };

  return (
    <div>
      <button onClick={handleAddTask}>Adicionar tarefa</button>

      <ul>
        {list.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}
