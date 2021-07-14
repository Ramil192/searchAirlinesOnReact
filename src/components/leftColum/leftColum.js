import React from 'react';
import PropTypes from 'prop-types'
import './leftColum.scss';

export default function LetftColum({ setfilterTransfer, filterTransfer}) {

  return (
    <div className="columns__left">
      <div className="columns__leftItems">
        <span>Количество пересадок</span>
        <label className="check" >
          <input onClick={() => { setfilterTransfer('allTransfer')} } className="check__input" type="radio" name="selected"
            defaultChecked={filterTransfer === `allTransfer`} />
          <span className="check__box" />
          Все
        </label>
        <label className="check ">
          <input onClick={() => { setfilterTransfer('noTransfer')  }} className="check__input" type="radio" name="selected" />
          <span className="check__box" />
          Без пересадок
        </label>
        <label className="check ">
          <input onClick={() => {setfilterTransfer('1Transfer'); }} className="check__input" type="radio" name="selected" />
          <span className="check__box" />1 пересадка
        </label>
        <label className="check ">
          <input onClick={() => { setfilterTransfer('2Transfer')}} className="check__input" type="radio" name="selected" />
          <span className="check__box" />2 пересадки
        </label>
        <label className="check ">
          <input onClick={() => { setfilterTransfer('3Transfer') }} className="check__input" type="radio" name="selected" />
          <span className="check__box" />3 пересадки
        </label>
      </div>
    </div>
  );
}

LetftColum.propTypes={
  setfilterTransfer:PropTypes.func.isRequired,
  filterTransfer:PropTypes.string.isRequired
}