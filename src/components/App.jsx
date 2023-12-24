import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';

const localData = localStorage.getItem('contacts');

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    const input = e.target.name;

    switch (input) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
    }
  };

  const createContact = () => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    console.log(contact);

    const isDublicated = contacts.find(
      e => e.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isDublicated) {
      alert('This contact is already added');
      return;
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact();
    setName('');
    setNumber('');
  };

  useEffect(() => {
    if (localData) {
      const data = JSON.parse(localData);
      setContacts(data);
    }
  }, []);

  useEffect(() => {
    console.log(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = value => {
    console.log(value);
  };

  const deleteContact = id => {
    console.log(id);
    setContacts(contacts.filter(e => e.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div
      style={{
        width: '370px',
        fontSize: 34,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1>
        Phone<span style={{ color: 'rgb(54, 96, 212)' }}>book</span>
      </h1>
      <ContactForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={name}
        number={number}
      />
      <div
        style={{
          border: 'solid 2px rgb(11, 26, 68)',
          borderRadius: '24px',
          padding: '20px 16px',
          marginTop: '24px',
        }}
      >
        <Filter onChange={handleChangeFilter} />
        <ContactList
          contactsArr={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </div>
  );
}
