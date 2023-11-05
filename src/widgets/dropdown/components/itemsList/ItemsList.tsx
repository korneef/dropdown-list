import React from 'react';
import s from './ItemsList.module.css';
import LiItem from '../liItem/LiItem';
import type { THandleSelectItem, TData, TDropdown } from 'Dropdown';
import { nanoid } from 'nanoid';

type TDropdownProps = {
  data: Array<TData>;
  handleSelectItem: THandleSelectItem;
} & Pick<TDropdown, 'multiSelect'>;

function ItemsList({data, handleSelectItem, multiSelect}: TDropdownProps ) {
  return (
    <ul className={ s['items-list'] }>
      { data.map(item => <LiItem
        key={ nanoid() }
        handleSelectItem={ handleSelectItem }
        item={ item }
        multiSelect={ multiSelect }
      />) }
    </ul>
  );
}

export default ItemsList;
