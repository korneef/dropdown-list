import React from 'react';
import s from './LiIcon.module.css';
//todo refactor type
type Props = {
  src: string;
  alt: string;
}

function LiIcon({src, alt}: Props) {
  return (

    <div className={ s['icon-wrapper'] }>
      <img className={ s.icon } src={ src } alt={ alt }/>
    </div>

  );
}

export default LiIcon;
