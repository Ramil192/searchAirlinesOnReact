import React from 'react';
import PropTypes from 'prop-types'
import './rigthButtom.scss';

export default function RigthButtom({btnCheapFast,setBtnCheapFast}) {
  const btnCheap = btnCheapFast ? 'columns__rigthButtomCheap activ':'columns__rigthButtomCheap'
  const btnFast = btnCheapFast ? 'columns__rigthButtomFast':'columns__rigthButtomFast activ'
  return (
    <div className="columns__rigthButtom">
      <button onClick={()=>setBtnCheapFast(true)} type="button" className={btnCheap}>Самый дешевый</button>
      <button onClick={()=>setBtnCheapFast(false)} type="button" className={btnFast}>Самый быстрый</button>
    </div>
  );
}
RigthButtom.propTypes={
  btnCheapFast:PropTypes.bool.isRequired,
  setBtnCheapFast:PropTypes.func.isRequired
}