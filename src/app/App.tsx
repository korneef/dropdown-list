import React, { useState } from 'react';
import './App.css';
import { Dropdown } from 'widgets';
import { TData } from 'Dropdown';
import { languagesData } from '../mockData/languages/languages';
import { carModelsData } from '../mockData/cars/cars';

function App() {
  const [multiselect, setMultiselect] = useState(true);
  const [expandable, setExpandable] = useState(true);
  const [data, setData] = useState<Array<TData>>(languagesData)
  const [selectedOption, setSelectedOption] = useState('languages');
  const [dropdownWidth, setDropdownWidth] = useState(400);
  const [headerData, setHeaderData] = useState({
    name: 'Языки', placeholder: 'Выберите язык'
  })

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case 'languages':
        setData(languagesData);
        setHeaderData({name: 'Языки', placeholder: 'Выберите язык'})
        break
      case 'cars':
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
                value="languages"
                checked={ selectedOption === 'languages' }
                onChange={ handleOptionChange }
              /> Языки
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="cars"
                checked={ selectedOption === 'cars' }
                onChange={ handleOptionChange }
              /> Машины
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
