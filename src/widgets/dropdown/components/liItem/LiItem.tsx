import React from 'react';
import s from './LiItem.module.css';
import Checkbox from '../checkbox/Checkbox';
import LiIcon from '../liIcon/LiIcon';

type Props = {
  itemName: string;
  itemIcon?: string;
}

function LiItem({itemName, itemIcon}: Props) {
  return (
    <li className={ s.li }>
      { itemIcon && <LiIcon src={ itemIcon } alt={ itemName }/> }
      <div className={ s['li__text'] }>{ itemName }</div>
      <Checkbox/>
    </li>
  );
}

export default LiItem;
