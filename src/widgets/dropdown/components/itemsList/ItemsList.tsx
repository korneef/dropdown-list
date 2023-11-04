import React from 'react';
import s from './ItemsList.module.css';
import LiItem from '../liItem/LiItem';
import italy from 'shared/icons/flags/italy.svg';
import russian from 'shared/icons/flags/russian.svg';
import deustch from 'shared/icons/flags/deustch.svg';
import poland from 'shared/icons/flags/poland.svg';

interface Props {

}

function ItemsList(props: Props) {
  return (
    <ul className={s['items-list']}>
      <LiItem itemIcon={italy} itemName={'Италия'} />
      <LiItem itemIcon={russian} itemName={'Россия'} />
      <LiItem itemIcon={deustch} itemName={'Германия'} />
      <LiItem itemIcon={poland} itemName={'Польша'} />

    </ul>
  );
}

export default ItemsList;
