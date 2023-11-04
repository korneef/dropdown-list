import React from 'react';
import s from './SearchInput.module.css'

interface Props {

}

function SearchInput(props: Props) {
  return (
    <div className={ s['search-input__wrapper'] }>
      <input
        type={ 'text' }
        className={ s['search-input'] }
        placeholder={ 'Поиск' }
      >
      </input>
    </div>
  );
}

export default SearchInput;
