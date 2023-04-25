import React, { useState } from "react";

const EditProduct = (props) => {
  const [user, setUser] = useState(props.edit);
  const handleEditInput = (e) => {
    let newObj = { ...user };
    newObj.name = e.target.value;
    setUser(newObj);
  };
  const handleEditInput2 = (e) => {
    let newObj = { ...user };
    newObj.surname = e.target.value;
    setUser(newObj);
  };
  const handleEditInput3 = (e) => {
    let newObj = { ...user };
    newObj.phone = e.target.value;
    setUser(newObj);
  };
  const handleEditInput4 = (e) => {
    let newObj = { ...user };
    newObj.mail = e.target.value;
    setUser(newObj);
  };
  console.log(user);

  return (
    <div>
      <div>
        <input type="text" onChange={handleEditInput} value={user.name} />
        <input type="text" onChange={handleEditInput2} value={user.surname} />
        <input type="text" onChange={handleEditInput3} value={user.phone} />
        <input type="text" onChange={handleEditInput4} value={user.mail} />
        <button
          onClick={() => {
            props.handleSaveContact(user);
          }}
        >
          Save
        </button>
        <button onClick={props.handleCloseModal()}>Close</button>
      </div>
    </div>
  );
};

export default EditProduct;
