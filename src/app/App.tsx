import React, { useState } from 'react';
import './App.css';
import { Dropdown } from 'widgets';
import { TData } from 'Dropdown';
import { languagesData } from '../mockData/languages';
import { carModelsData } from '../mockData/cars';

function App() {
  const [multiselect, setMultiselect] = useState(true)
  const [languages, setLanguages] = useState<Array<TData>>(carModelsData)

  return (
    <div className="App">
      <div className={'checkbox'}>
        <label><input
          type={ 'checkbox' }
          checked={multiselect}
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
