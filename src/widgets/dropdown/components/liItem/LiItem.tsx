import React from 'react';
import Checkbox from '../checkbox/Checkbox';
import LiIcon from '../liIcon/LiIcon';
import type { TData, TDropdown, THandleSelectItem } from 'Dropdown';
import cn from 'classnames';
import s from './LiItem.module.css';

type Props = {
  item: TData,
  handleSelectItem: THandleSelectItem,
} & Pick<TDropdown, 'multiSelect'>;

function LiItem({item, handleSelectItem, multiSelect}: Props) {
  const {itemName, itemIcon, itemSelected} = item;
  return (
    <li
      className={ cn(
        s.li,
        {
          [s['li-selected_non-multiselect']]: !multiSelect && itemSelected,
        }
      ) }
      onClick={ () => handleSelectItem(item) }
    >
      { itemIcon && <LiIcon itemIcon={ itemIcon } itemName={ itemName }/> }
      <div className={ s['li__text'] }>{ itemName }</div>
      { multiSelect && <Checkbox itemSelected={ itemSelected }/> }
    </li>
  );
}

export default LiItem;
