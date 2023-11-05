import React from 'react';
import { TData } from 'Dropdown';
import s from './LiIcon.module.css';

function LiIcon({itemIcon, itemName}: Pick<TData, 'itemIcon' | 'itemName'>) {
  return (

    <div className={ s['icon-wrapper'] }>
      <img className={ s.icon } src={ itemIcon } alt={ itemName }/>
    </div>

  );
}

export default LiIcon;
