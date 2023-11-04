import React from 'react';
import s from './Chip.module.css'


type Props = {
  children: string;
}

function Chip({ children }: Props) {
  return (
    <div className={ s['chip'] }>
      <div className={ s['chip__flex-wrapper'] }>
        <div className={ s['text'] }>{ children }</div>
        <div className={ s['delete__button'] }></div>
      </div>
    </div>

  );
}

export default Chip;
