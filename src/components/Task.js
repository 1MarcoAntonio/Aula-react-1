import React, { useState } from "react";
import List from "./List";
export default function () {
  const [task, setTask] = useState();

  return (
    <div>
      <imput value={task} onChange={(e) => setTask(e.target.value)} />

      <List task={task} setTask={setTask}></List>
    </div>
  );
}
