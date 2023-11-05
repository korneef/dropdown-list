declare module 'Dropdown' {
  import { Dispatch, SetStateAction } from 'react';
  //todo update types description
  /** Тип согласно которому передаются данные в dropdown */
  export type TDropdown = {
    /** Исходные данные, которые необходимо отобразить в dropdown из useState */
    data: Array<TData>,
    /** Имя dropdown отображаемое в заголовке */
    name?: string,
    /** Placeholder */
    placeholder?: string,
    /** Включение и выключение мультиселекта */
    multiSelect: boolean,
    /** функция изменения data (из useState) */
    handleSelect: Dispatch<SetStateAction<TData[]>>,
  }

  /** Описание типа данных передаваемых в data */
  export type TData = {
    /** Имя элемента списка */
    itemName: string,
    /** Иконка элемента списка */
    itemIcon?: string,
    /** Поле для определения выбран элемент или нет */
    itemSelected: boolean;
  }

  /** Описание типов для searchInput */
  export type TSearchRequest = {
    /** Поисковый запрос */
    searchRequest: string,
    /** Функция изменения поискового запроса */
    handleChange: Dispatch<SetStateAction<string>>,
  }
  //todo update type
  /** функция, которая меняет состояние элемента в списке с выбранного на не выбранный и наоборот
   * @param item - элемент списка по которому происходит событие
   * */
  export type THandleSelectItem = (item: TData) => void;
}
