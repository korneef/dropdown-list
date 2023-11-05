import React from 'react';
import s from './Chip.module.css'
import type { TData } from 'Dropdown';

type Props = {
  handleDelete: () => void;
}

function Chip({ itemName, handleDelete }: Pick<TData, 'itemName'> & Props) {

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) =>{
    evt.stopPropagation();
    handleDelete();
  }

  return (
    <div className={ s['chip'] }>
      <div className={ s['chip__flex-wrapper'] }>
        <div className={ s['text'] } onClick={(evt) => evt.stopPropagation()}>{ itemName }</div>
        <div className={ s['delete__button'] } onClick={(evt) => handleClick(evt)}></div>
      </div>
    </div>

  );
}

export default Chip;
