import React from 'react';
import PropTypes from 'prop-types';
import './rigthColum.scss';
import RigthInfoBlock from '../RigthInfoBlock/rigthInfoBlock';
import RigthButtom from '../RigthButtom/rigthButtom';
import Loading from '../Loading/loading';

export default function RigthtColum({ dataFileter, loadingData ,btnCheapFast,setBtnCheapFast,}) {

  const element = dataFileter.map((item, i) => {
    return (
      <React.Fragment key={i}>
        <RigthInfoBlock item={item} />
      </React.Fragment>
    )
  })

  console.log(dataFileter);
  return (
    <div className="columns__rigth">
      <RigthButtom btnCheapFast={btnCheapFast}setBtnCheapFast={setBtnCheapFast}/>
      {loadingData ? <Loading /> : element}
    </div>
  );
}

RigthtColum.propTypes={
  loadingData:PropTypes.bool.isRequired,
  btnCheapFast:PropTypes.bool.isRequired,
  setBtnCheapFast:PropTypes.func.isRequired,
}