import { useState } from 'react';
import css from '../PhoneBook.module.css';

import initialState from 'components/initialState';


function Form({onSubmit}) {
  const [state, setState] = useState({...initialState});

  const hendleChange = ({target}) => {
    const { value, name } = target;

    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }

  const hendleSubmit = e => {
    e.preventDefault();


    onSubmit({name, number});
    setState({...initialState})
  };

  const {name, number} = state;
  return (
    <form onSubmit={hendleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={hendleChange}
          required
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={hendleChange}
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}

export default Form;
