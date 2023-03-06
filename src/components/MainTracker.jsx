import React, { useEffect, useState } from 'react';
import arrow from './../assets/icon-arrow.svg';
const MainTracker = ({setlatLongTude}) => {

  const apiKey = '0b9b8a567d7543b3acd98a814a0ba118';

  const getData = (e) => {
    e.preventDefault()
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${currentIp}`)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('current-data', JSON.stringify(data))
      console.log(data)
    })
    .catch(error => console.error(error));
    window.location.reload();
  }

  const currentData = JSON.parse(localStorage.getItem('current-data')) || {}; 
  const ipAddress = currentData.ip || '0.0.0.0';  
  const location = (currentData.city || 'City') + ', ' + (currentData.zipcode || 'postalcode');
  const offset = currentData.time_zone?.offset || 0;
  const isp = currentData.isp || 'ISP';
  const hours = Math.abs(Math.floor(offset));
  const minutes = Math.abs(Math.floor((offset % 1) * 60)).toString().padStart(2, "0");
  const utc = `UTC${offset < 0 ? '-' : '+'}${hours.toString().padStart(2, "0")}:${minutes}`;
  const [currentIp, setCurrentIp] = useState('');
  const latitude = JSON.parse(localStorage.getItem('current-data')).latitude;
  const longtitude = JSON.parse(localStorage.getItem('current-data')).longitude;
  
  useEffect(() => {
    setlatLongTude([latitude, longtitude])
  }, [latitude, longtitude, setlatLongTude])
  
  
  return (
    <div className='section bg__tracker'>
      <div className='container tracker'>
        <h1 className='tracker__title'>IP Addres Tracker</h1>
        <form className='tracker__input'>
          <input onChange={e => setCurrentIp(e.target.value)} value={currentIp} className='tracker__input-input' type="text" placeholder='Search for any IP addres or domain'/>
          <button onClick={e => getData(e)} className='tracker__input-button'><img src={arrow} alt="" /></button>
        </form>
      </div>
      <div className='container info'>
        <div className='info__wrapper'>
          <div className="info__section left">
            <span className='info__section-title'>Ip address</span>
            <span className='info__section-text'>{ipAddress}</span>
          </div>
          <div className="info__section border-left">
            <span className='info__section-title'>Location</span>
            <span className='info__section-text'>{location}</span>
          </div>
          <div className="info__section border-left">
            <span className='info__section-title'>Timezone</span>
            <span className='info__section-text'>{utc}</span>
          </div>
          <div className="info__section border-left">
            <span className='info__section-title'>Isp</span>
            <span className='info__section-text'>{isp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTracker;