import React, { useState } from 'react';
import './App.css';
import { Dropdown } from 'widgets';
import { TData } from 'Dropdown';
import italy from 'shared/icons/flags/italy.svg';
import russian from 'shared/icons/flags/russian.svg';
import deutsch from 'shared/icons/flags/deustch.svg';
import poland from 'shared/icons/flags/poland.svg';

function App() {
  const [multiselect, setMultiselect] = useState(true)
  const data: Array<TData> = [
    {
      itemName: 'Русский',
      itemSelected: false,
      itemIcon: russian
    },
    {
      itemName: 'Итальянский',
      itemSelected: false,
      itemIcon: italy
    },
    {
      itemName: 'Немецкий',
      itemSelected: false,
      itemIcon: deutsch
    },
    {
      itemName: 'Польский',
      itemSelected: false,
      itemIcon: poland
    },
  ]
  const [languages, setLanguages] = useState<Array<TData>>(data)

  return (
    <div className="App">
      <div className={'checkbox'}>
        <label><input
          type={ 'checkbox' }
          onChange={ () => {
            setLanguages(prevState => {
              return prevState.map(item => {
                return {
                  ...item,
                  itemSelected: false,
                }
              })
            })
            setMultiselect(!multiselect)
          } }
        /> multiselect</label>
      </div>
      <Dropdown
        data={languages}
        handleSelect={setLanguages}
        name={'Языки'}
        placeholder={'Выберите язык'}
        multiSelect={multiselect}
      />
    </div>
  );
}

export default App;
