import React from 'react';
import './loading.scss';

export default function Loading() {

  return (
    <div className="columns__rigthInfoBlock">
      <div className="columns__rigthInfoItems">
        <div className="lds-facebook"><div /><div /><div /></div>
      </div>
		<div className="columns__rigthInfoItems">
        <div className="lds-facebook"><div /><div /><div /></div>
      </div>
		<div className="columns__rigthInfoItems">
        <div className="lds-facebook"><div /><div /><div /></div>
      </div>
		<div className="columns__rigthInfoItems">
        <div className="lds-facebook"><div /><div /><div /></div>
      </div>
		<div className="columns__rigthInfoItems">
        <div className="lds-facebook"><div /><div /><div /></div>
      </div>
    </div>
  );
}
