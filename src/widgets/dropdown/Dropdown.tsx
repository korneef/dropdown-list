import React, { useMemo, useState } from 'react';
import type { TData, TDropdown } from 'Dropdown';
import Chip from './components/chip/Chip';
import SearchInput from './components/searchInput/SearchInput';
import ItemsList from './components/itemsList/ItemsList';
import { nanoid } from 'nanoid';
import cn from 'classnames';
import s from './Dropdown.module.css';

function Dropdown(props: TDropdown) {
  const {
    data,
    multiSelect,
    handleSelect,
    name,
    placeholder
  } = props;
  const [searchRequest, setSearchRequest] = useState('');
  const [isExpand, setIsExpand] = useState(false);
  const [disappearEffect, setDisappearEffect] = useState(true);

  const selectedItems = useMemo(() => {
    return data.filter(item => item.itemSelected);
  }, [data]);

  const handleMultiSelectItem = (clickedItem: TData): void => {
    handleSelect(prevState => {
      const itemIdx = prevState.findIndex(el => clickedItem === el);
      if (itemIdx === -1) return prevState;
      const newState = [...prevState];
      newState[itemIdx] = {...newState[itemIdx], itemSelected: !newState[itemIdx].itemSelected}
      return newState;
    });
  }

  const handleSelectItem = (clickedItem: TData): void => {
    handleSelect(prevState => {
      const itemIdx = prevState.findIndex(el => clickedItem === el);
      if (itemIdx === -1) return prevState;
      const newState = prevState.map(item => {
        return {
          ...item,
          itemSelected: false
        }
      });
      newState[itemIdx] = {...newState[itemIdx], itemSelected: !newState[itemIdx].itemSelected}
      return newState;
    });
  }

  const handleExpand = () => {
    if (isExpand) {
      setDisappearEffect(true);
      setTimeout(() => {
        setIsExpand(false);
        setSearchRequest('');
      }, 300)
    } else {
      setDisappearEffect(false);
      setIsExpand(true);
    }
  }

  return (
    <div className={ s['dropdown-wrapper'] }>
      { name && <div className={ s['dropdown__header'] }>{ name }</div> }

      <div
        className={ s.dropdown }
        onClick={ () => handleExpand() }
      >

        <div className={ s['dropdown__repletion'] }>
          { selectedItems.length > 0 ? selectedItems.map(item => {
            return <Chip
              key={ nanoid() }
              itemName={ item.itemName }
              handleDelete={() => handleMultiSelectItem(item)}
            />
          }) : <div className={s['dropdown__placeholder']}>{ placeholder }</div> }
        </div>

        <div className={ cn(
          s['dropdown__arrow'],
          { [s['dropdown__arrow_active']]: disappearEffect }
        ) }/>
      </div>

      { isExpand &&
        <div
          className={ cn(
            s['dropdown__dropped-list'],
            {[s['dropdown__dropped-list_disappear']]: disappearEffect}) }>
          <SearchInput searchRequest={ searchRequest } handleChange={ setSearchRequest }/>
          <ItemsList
            data={ data.filter(item => item.itemName.toLowerCase().includes(searchRequest.trim().toLowerCase())) }
            handleSelectItem={ multiSelect ? handleMultiSelectItem : handleSelectItem }
            multiSelect={multiSelect}
          />
        </div> }
    </div>
  );
}

export default Dropdown;
