import React from 'react';
import Chip from './components/chip/Chip'
import SearchInput from './components/searchInput/SearchInput';
import s from './Dropdown.module.css'
import ItemsList from './components/itemsList/ItemsList';

type Props = {

}

function Dropdown(props: Props) {
  return (
    <div className={s['dropdown-wrapper']}>
      <div className={ s['dropdown__header'] }>Язык</div>
      <div className={ s.dropdown }>
        <div className={ s['dropdown__repletion'] }>
          <Chip children='Русский'/>
          <Chip children='Английский'/>
          <Chip children='Итальянский'/>
        </div>
        <div className={ s['dropdown__arrow'] }></div>
      </div>
      <div className={s['dropdown__dropped-list']}>
        <SearchInput/>
        <ItemsList/>
      </div>
    </div>
  );
}

export default Dropdown;
