import React from "react";

const ContactList = (props) => {
  console.log(props);
  return (
    <div>
      {props.contact.map((elem) => (
        <ul key={elem.id}>
          <li>{elem.name}</li>
          <li>{elem.surname}</li>
          <li>{elem.phone}</li>
          <li>{elem.mail}</li>
          <button onClick={() => props.handleEdit(elem)}>Edit</button>
          <button
            onClick={() => {
              props.handledelete(elem.id);
            }}
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
