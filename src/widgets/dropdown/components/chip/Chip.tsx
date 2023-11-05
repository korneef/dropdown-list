import React from 'react';
import type { TData, TDropdown } from 'Dropdown';
import cn from 'classnames';
import s from './Chip.module.css';

type Props = {
  handleDelete: () => void;
} & Pick<TDropdown, 'multiSelect'>

function Chip({itemName, handleDelete, multiSelect}: Pick<TData, 'itemName'> & Props) {

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    handleDelete();
  }

  return (
    <div className={ cn(
      s['chip'],
      {[s['chip_non-multiselect']]: !multiSelect}
    ) }
         onClick={ (evt) => handleClick(evt) }
    >
      <div className={ s['chip__flex-wrapper'] }>
        <div className={ s['text'] }>{ itemName }</div>
        <div className={ s['delete__button'] }></div>
      </div>
    </div>

  );
}

export default Chip;
