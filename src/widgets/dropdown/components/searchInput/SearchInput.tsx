import React from 'react';
import { TSearchRequest } from 'Dropdown';
import s from './SearchInput.module.css';

function SearchInput({searchRequest, handleChange}: TSearchRequest) {
  return (
    <div className={ s['search-input__wrapper'] }>
      <input
        type={ 'text' }
        className={ s['search-input'] }
        placeholder={ 'Поиск' }
        value={searchRequest}
        onChange={(evt) => handleChange(evt.target.value)}
      />
    </div>
  );
}

export default SearchInput;
