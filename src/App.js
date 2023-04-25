import React, { useState } from 'react'
import AddProduct from './components/addProduct/AddProduct'
import ContactList from './components/ContactList/ContactList'
import EditProduct from './editProduct/EditProduct'

const App = () => {

  const [contact, setContact]=useState([])
  // console.log(contact);
  const handleTask =(newObj)=>{
    let newCont = structuredClone(contact)
    newCont.push(newObj) 
    setContact(newCont)
  }
  const[edit,setEdit]=useState({})
  const [modal,setModal]=useState(false)
  
  const handledelete=(id)=>{
  let newCont = contact.filter((elem)=>elem.id !== id)
  setContact(newCont)
  } 

  const handleEdit =(contactToEdit)=>{
    setModal(true);
    setEdit(contactToEdit)
  }
  const handleCloseModal =()=>{
    setModal(false);
  }


  const handleSaveContact=(upDateted )=>{
const newCont = contact.map((elem)=>{
  if(elem.id === upDateted.id){
    return upDateted
  }
  return elem
})
setContact(newCont)
handleCloseModal()
  }

  return (
    <div>
      <AddProduct handleTask={handleTask}/>
      <ContactList contact={contact} handledelete={handledelete}
      handleEdit={handleEdit} />
      {
      modal?<EditProduct
      handleSaveContact={handleSaveContact}
      edit={edit}
      handleCloseModal={handleCloseModal}/>:null
      }
    </div>
  )
}

export default App