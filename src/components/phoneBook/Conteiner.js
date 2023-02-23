import React from "react";
import PropTypes from 'prop-types';
import css from '../PhoneBook.module.css';

const Conteiner = ({title, children}) => (
  <div className={css.conteiner}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </div>
)

Conteiner.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Conteiner;