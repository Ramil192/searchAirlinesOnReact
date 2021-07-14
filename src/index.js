import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './components/index.scss';
import AppHeader from './components/appHeader/appHeader';

import LetftColum from './components/leftColum/leftColum';
import RigthtColum from './components/RigthColum/rigthColum';

import Search from './components/Search/search';

const serch = new Search();
export default function App() {
  const [data, setData] = useState([]);
  const [dataFileter, setDataFileter] = useState([]);
  const [filterTransfer, setfilterTransfer] = useState('allTransfer');
  const [loadingData, setLoadingData] = useState(true)
  const [btnCheapFast, setBtnCheapFast] = useState(true)


  async function temp(k) {
    setTimeout(() => {
      serch
        .getTickets(k.searchId)
        .then((tic) => {
          console.log(tic.stop);
          if (tic.stop) {
            setData(tic.tickets);
            setLoadingData(false);
          } else {
            temp(k);
          }
        })
        .catch(() => temp(k));
    }, 300);
    return ' ';
  }

  function sortCheapFast(t) {
    if (btnCheapFast) {
      return t.sort((prev, next) => prev.price - next.price)
    }
    return t.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration)
  }

  function getDataFileter() {
    let temp = []
    if (filterTransfer === `allTransfer`) {
      setDataFileter(sortCheapFast(data).slice(0, 5))
    } else if (filterTransfer === `noTransfer`) {
      temp = data.filter((item) => item.segments[0].stops.length === 0)
      setDataFileter(sortCheapFast(temp).slice(0, 5))
    } else if (filterTransfer === `1Transfer`) {
      temp = data.filter((item) => item.segments[0].stops.length === 1)
      setDataFileter(sortCheapFast(temp).slice(0, 5))
    } else if (filterTransfer === `2Transfer`) {
      temp = data.filter((item) => item.segments[0].stops.length === 2)
      setDataFileter(sortCheapFast(temp).slice(0, 5))
    } else if (filterTransfer === `3Transfer`) {
      temp = data.filter((item) => item.segments[0].stops.length === 3)
      setDataFileter(sortCheapFast(temp).slice(0, 5))
    }
  }

  useEffect(() => {
    serch.getKey().then((key) => {
      temp(key);
    });
  }, []);

  useEffect(() => {
    getDataFileter()
  }, [filterTransfer, loadingData, btnCheapFast]);

  console.log('index.js');
  return (
    <div className="container">
      <AppHeader />
      <div className="columns">
        <LetftColum setfilterTransfer={setfilterTransfer} filterTransfer={filterTransfer} />
        <RigthtColum dataFileter={dataFileter} loadingData={loadingData} btnCheapFast={btnCheapFast} setBtnCheapFast={setBtnCheapFast} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
