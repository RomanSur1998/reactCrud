import React, { useState } from "react";

const AddProduct = (props) => {
  const [task, setTask] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const handleInput2 = (e) => {
    setTask2(e.target.value);
  };
  const handleInput3 = (e) => {
    setTask3(e.target.value);
  };
  const handleInput4 = (e) => {
    setTask4(e.target.value);
  };
  const handleAdd = () => {
    if (!task || !task2 || !task3 || !task4) {
      alert("Напиши что-ныибудь");
      return;
    } else {
      const NewObj = {
        name: task,
        surname: task2,
        phone: task3,
        mail: task4,
        id: Date.now(),
      };
      console.log(NewObj);
      props.handleTask(NewObj);
      setTask("");
      setTask2("");
      setTask3("");
      setTask4("");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInput} />
      <input type="text" onChange={handleInput2} />
      <input type="text" onChange={handleInput3} />
      <input type="text" onChange={handleInput4} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProduct;
