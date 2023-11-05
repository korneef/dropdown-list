import React, { useState } from 'react';
import './App.css';
import { Dropdown } from 'widgets';
import { TData } from 'Dropdown';
import { languagesData } from '../mockData/languages/languages';
import { carModelsData } from '../mockData/cars/cars';

function App() {
  enum listType {
    cars = 'cars',
    languages = 'languages'
  }
  const [multiselect, setMultiselect] = useState(true);
  const [expandable, setExpandable] = useState(true);
  const [data, setData] = useState<Array<TData>>(languagesData)
  const [selectedOption, setSelectedOption] = useState<string>(listType.languages);
  const [dropdownWidth, setDropdownWidth] = useState(400);
  const [headerData, setHeaderData] = useState({
    name: 'Языки', placeholder: 'Выберите язык'
  })

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case listType.languages:
        setData(languagesData);
        setHeaderData({name: 'Языки', placeholder: 'Выберите язык'})
        break
      case listType.cars:
        setData(carModelsData);
        setHeaderData({name: 'Автомобили', placeholder: 'Выберите автомобиль'})
        break
    }
  };

  return (
    <div className="App">
      <div className={ 'control-panel' }>
        <div>
          <div>Тип списка</div>
          <div>
            <label>
              <input
                type="radio"
                value={listType.languages}
                checked={ selectedOption === listType.languages }
                onChange={ handleOptionChange }
              /> Список языков (с иконками)
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value={listType.cars}
                checked={ selectedOption === listType.cars }
                onChange={ handleOptionChange }
              /> Список машин (без иконок)
            </label>
          </div>
        </div>
        <div>
          <label><input
            type={ 'checkbox' }
            checked={ multiselect }
            onChange={ () => {
              setData(prevState => prevState.map(item => {
                return {...item, itemSelected: false}
              }))
              setMultiselect(!multiselect)
            } }
          /> Мультиселект</label>
        </div>
        <div><label><input
          type={ 'checkbox' }
          checked={ expandable }
          onChange={ () => setExpandable(!expandable) }
        /> Расширяемость по высоте при переполнении</label>
        </div>
        <div>
          Ширина списка <input
          type="number"
          step={ 25 }
          value={ dropdownWidth } onChange={ (event) => {
          setDropdownWidth(Number(event.target.value))
        } }/>
        </div>
      </div>

      <div style={ {width: `${ dropdownWidth }px`} }>
        <Dropdown
          data={ data }
          handleSelect={ setData }
          name={ headerData.name }
          placeholder={ headerData.placeholder }
          multiSelect={ multiselect }
          expandable={ expandable }
        />
      </div>

    </div>
  );
}

export default App;
