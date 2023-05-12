import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType, sortSelector } from '../redux/slices/filter-slice';

export const sortList = [
  { name: 'популярности (DESC)', sortProperty: 'rating' },
  { name: 'популярности (ASC)', sortProperty: '-rating' },
  { name: 'цене (DESC)', sortProperty: 'price' },
  { name: 'цене (ASC)', sortProperty: '-price' },
  { name: 'алфавиту (DESC)', sortProperty: 'title' },
  { name: 'алфавиту (ASC)', sortProperty: '-title' },
];

const Sort = () => {
  const value = useSelector(sortSelector);
  const dispatch = useDispatch();

  const [listValid, setListValid] = useState(false);

  const onCloseListItem = (obj) => {
    dispatch(setSortType(obj));
    setListValid(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span
          onClick={() => {
            setListValid(!listValid);
          }}>
          {value.name}
        </span>
      </div>
      {listValid && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, index) => (
              <li
                key={index}
                onClick={() => onCloseListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
