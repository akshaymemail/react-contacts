import React from "react";
import Card from './Card'
import contacts from '../contacts'
import Awatar from "./Avatar";

function createCard(contact){
 return (<Card
  key = {contact.id}
  name = {contact.name}
  img  = {contact.imgURL}
  phone = {contact.phone}
  email = {contact.email}
  />)
}

function App() {
  return (
    <div>
       <h1 className="heading"> My Contacts </h1>
       <Awatar img = 'https://avatars2.githubusercontent.com/u/43178939?s=400&u=14aa98e370bc0a5915f29c42b74cb89a0341245e&v=4' />
        {contacts.map(createCard)}
    </div>
  );
}

export default App;
