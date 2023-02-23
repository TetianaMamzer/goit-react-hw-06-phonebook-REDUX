import React from 'react';
import PropTypes from 'prop-types';
import css from '../PhoneBook.module.css';

const Filter = ({value, onChange}) => (
  <label className={css.labelFilter}> Find contacts by name
  <input type='text' value={value} onChange={onChange} className={css.input}/>
</label>
)

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Filter;