import React, { useEffect, useRef } from 'react';
import { TSearchRequest } from 'Dropdown';
import s from './SearchInput.module.css';

function SearchInput({searchRequest, handleChange}: TSearchRequest) {
  const inputRef = useRef<HTMLInputElement | null> (null);

  useEffect(() => {
    if (inputRef === null || inputRef.current === null) return;
    inputRef.current.focus();
  }, [])

  return (
    <div className={ s['search-input__wrapper'] }>
      <input
        type={ 'text' }
        className={ s['search-input'] }
        placeholder={ 'Поиск' }
        value={searchRequest}
        onChange={(evt) => handleChange(evt.target.value)}
        ref={inputRef}
      />
    </div>
  );
}

export default SearchInput;
