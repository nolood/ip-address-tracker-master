import React, { useState } from 'react';
import MainTracker from './components/MainTracker';
import MapWrap from './components/MapWrap';

const App = () => {
  const [latLongTude, setlatLongTude] = useState([51.508530, -0.076132])
  return (
    <div className='App'>
      <MainTracker setlatLongTude={setlatLongTude}/>
      <MapWrap latLongTude={latLongTude}/>
    </div>
  );
};

export default App;