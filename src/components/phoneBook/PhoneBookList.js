import React from 'react';
import PropTypes from 'prop-types';
import css from '../PhoneBook.module.css';

// import { useSelector } from 'react-redux';

const PhoneBookList = ({ contacts, type, text, onClick }) => {
  // const list = useSelector(store => store.contacts)

  const elements = contacts.map(({name, number, id}) =>  <li key={id} className={css.list}>
  {name}: {number} <button type={type} onClick={() => onClick(id)} className={css.button}>{text}</button>
</li>)
  return (
  <>
    <h2 className={css.title}>Contacts</h2>
    <ul className={css.group}>
      {elements}
    </ul>
  </>
)};



PhoneBookList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ 
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })),
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PhoneBookList;