import React from 'react';
import PropTypes from 'prop-types';
import './rigthInfoBlock.scss';

export default function RigthtColum({ item }) {
  console.log(item);
  const { price, carrier, segments, } = { ...item }

  const img = `//pics.avs.io/99/36/${carrier}.png`
  const countStopThere = segments[0].stops.length;
  const cityStopThere = segments[0].stops.join(',');
  const { destination } = segments[0];
  const { origin } = segments[0];
  const dateThere = new Date(segments[0].date)
  const hours = dateThere.getHours()
  const minuts = dateThere.getUTCMinutes()

  let durationClockThere = (segments[0].duration / 60).toFixed(2);
  const durationMinutsThere = Math.floor((durationClockThere - Math.floor(durationClockThere)) * 60)
  durationClockThere = Math.floor(durationClockThere)

  function hoursThere(d, startTime) {
    if (d <= 12 && startTime <= 12) {
      return startTime + d
    }
    const temp = startTime + d
    return temp < 24 ? d + startTime : temp - 24


  }

  function minutsThere() {
    let temp = minuts + durationMinutsThere
    if (temp > 60) {
      temp -= 60;
    }
    return temp < 10 ? `0${temp}` : temp
  }

  const countStopTere = segments[1].stops.length;
  const cityStopTere = segments[1].stops.join(',');

  const dateTere = new Date(segments[1].date)
  const hoursTere = dateTere.getHours()
  const minutsTere = dateTere.getUTCMinutes()

  let durationClockTere = (segments[1].duration / 60).toFixed(2);
  const durationMinutsTere = Math.floor((durationClockTere - Math.floor(durationClockTere)) * 60)
  durationClockTere = Math.floor(durationClockTere)

  function hoursTereFn(d, startTime) {
    if (d <= 12 && startTime <= 12) {
      console.log("+");
      return startTime + d
    }
    const temp = startTime + d
    return temp < 24 ? d + startTime : temp - 24

  }
  function minutsTereFn() {
    let temp = minutsTere + durationMinutsTere
    if (temp > 60) {
      temp -= 60;
    }
    return temp < 10 ? `0${temp}` : temp
  }
  return (
    <div className="columns__rigthInfoBlock">
      <div className="columns__rigthInfoItems">
        <div className="columns__rigthInfoPriseAndLogo">
          <div className="columns__rigthInfoPrise">{price} р</div>
          <div className="columns__rigthInfoLogo">
            <img className="columns__rigthInfoImg" src={img} alt="" />
          </div>
        </div>
        <div className="columns__rigthInfoFlight fs12">
          <div className="columns__rigthInfoCity">{destination} - {origin}</div>
          <div className="columns__rigthInfoInTransit">В ПУТИ</div>
          <div className="columns__rigthInfoInTransfer">{countStopThere || ''} ПЕРЕСАДКИ</div>
        </div>
        <div className="columns__rigthInfoFlight">
          <div className="columns__rigthInfoTimer">
            {hours}:{minuts}-{hoursThere(durationClockThere, hours)}:{minutsThere()}</div>
          <div className="columns__rigthInfoTotalTime">{durationClockThere}ч {durationMinutsThere || '00'}м</div>
          <div className="columns__rigthInfoInTransferCitiy">{cityStopThere || '-----------'} </div>
        </div>
        <div className="columns__rigthInfoFlight fs12">
          <div className="columns__rigthInfoCity">{origin} - {destination}</div>
          <div className="columns__rigthInfoInTransit">В ПУТИ</div>
          <div className="columns__rigthInfoInTransfer">{countStopTere || ''} ПЕРЕСАДКИ</div>
        </div>
        <div className="columns__rigthInfoFlight">
          <div className="columns__rigthInfoTimer">
            {hoursTere}:{minutsTere}-{hoursTereFn(durationClockTere, hoursTere)}:{minutsTereFn()}</div>
          <div className="columns__rigthInfoTotalTime">{durationClockTere}ч {durationMinutsTere || '00'}м</div>
          <div className="columns__rigthInfoInTransferCitiy">{cityStopTere || '-----------'}</div>
        </div>
      </div>

    </div>
  );
}
RigthtColum.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments:PropTypes.shape([{
      origin:PropTypes.string,
      destination:PropTypes.string,
      date:PropTypes.string,
      stops:PropTypes.arrayOf(PropTypes.string),
      duration:PropTypes.number
    }])
  }
  )
}
