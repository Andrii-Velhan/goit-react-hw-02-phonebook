import './App.css';
import 'modern-normalize/modern-normalize.css';
import React, { Component } from 'react';
import ContactList from './components/ContactList';

export default class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    console.log(contactId);
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        {/* <h1>Phonebook</h1> */}
        {/* <ContactForm /> */}
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <div>Contacts quantity: {contacts.length}</div>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}