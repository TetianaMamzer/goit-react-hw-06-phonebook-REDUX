import { useState, useEffect, useMemo } from 'react';
import '../index.css';
import { nanoid } from 'nanoid';

import Conteiner from './phoneBook/Conteiner';
import Form from './phoneBook/Form';
import PhoneBookList from './phoneBook/PhoneBookList';
import Filter from './phoneBook/Filter';

import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '320px',
  position: 'center-top',
  distance: '10px',
  opacity: '1',
  fontFamily: 'source-code-pro',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '14px',
  timeout: 4000,
  cssAnimationStyle: 'from-top',
  useIcon: false,
  cssAnimationDuration: 1000,

  failure: {
    background: 'transperent',
    textColor: '#FF001B',
    childClassName: 'notiflix-notify-failure',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
  },
});

export default function PhoneBook() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('phoneBook')) ?? []
  );
  const [filter, setFilter] = useState('');

  const formSubmit = ({ name, number }) => {
    const phoneList = {
      id: nanoid(),
      name,
      number,
    };

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        return Notiflix.Notify.failure(`${name} is olredy in contacts`);
      }
    }

    setContacts(prevState => {
      return [phoneList, ...prevState];
    });
  };

  useEffect(() => {
    localStorage.setItem('phoneBook', JSON.stringify(contacts));
  }, [contacts]);


  const getFilterContacts = useMemo(() => {
    if (!filter) {
      return contacts;
    }
console.log('hgfc')
    const normalizedFilter = filter.toLowerCase();
    const visiblePhoneList = contacts.filter(({name, number}) => {
      return (name.toLowerCase().includes(normalizedFilter) || number.includes(normalizedFilter))
    }
    );
    return visiblePhoneList;
  }, [filter, contacts]);


  return (
    <Conteiner title="Phonebook">
      <Form onSubmit={formSubmit} />
      {contacts.length > 0 && (
        <>
          <Filter value={filter} onChange={({target})=> setFilter(target.value)} />
          <PhoneBookList
            contacts={getFilterContacts}
            type="button"
            text="delete"
            onClick={idx =>
              setContacts(prevState =>
                prevState.filter(contact => contact.id !== idx)
              )
            }
          />
        </>
      )}
    </Conteiner>
  );
}
