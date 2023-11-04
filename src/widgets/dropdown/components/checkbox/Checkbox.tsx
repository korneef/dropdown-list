import React, { useState } from 'react';
import s from './Checkbox.module.css';
import cn from 'classnames';

type Props = {}

function Checkbox(props: Props) {
  const [checked, setChecked] = useState(false)

  return (
    <label className={ cn(
      s['checkbox-wrapper'],
      {[s['checkbox-wrapper_active']]: checked }
    ) }
    >
      <input
        className={ s.checkbox }
        type={ 'checkbox' }
        checked={ checked }
        onClick={ () => setChecked(!checked) }
      />
    </label>
  );
}

export default Checkbox;
