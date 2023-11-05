import React from 'react';
import s from './Checkbox.module.css';
import cn from 'classnames';
import type { TData } from 'Dropdown';

function Checkbox({itemSelected}: Pick<TData, 'itemSelected'>) {

  return (
    <label className={ cn(
      s['checkbox-wrapper'],
      {[s['checkbox-wrapper_active']]: itemSelected}
    ) }
    >
      <input
        className={ s.checkbox }
        type={ 'checkbox' }
        defaultChecked={ itemSelected }
      />
    </label>
  );
}

export default React.memo(Checkbox);
