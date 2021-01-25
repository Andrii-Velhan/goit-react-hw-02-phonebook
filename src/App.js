import './App.css';
import 'modern-normalize/modern-normalize.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import initialContacts from './bd/contacts.json';

export default class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    // console.log(contactId);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    // const visibleContacts =
    //   normalizedFilter.length > 0
    //     ? this.state.contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(normalizedFilter),
    //       )
    //     : this.state.contacts;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
