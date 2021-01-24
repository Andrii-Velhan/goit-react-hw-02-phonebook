import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="ContactList__item">
        <p className="ContactList__name">
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

// const ContactList = ({ contacts }) => (
//   <ul>
//     {contacts.map(({ contact }) => (
//       <li key={contact.id}>
//         <p>
//           {contact.name} : {contact.number}
//         </p>
//       </li>
//     ))}
//   </ul>
// );
export default ContactList;
