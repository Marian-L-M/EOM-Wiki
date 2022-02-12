import React from 'react';
import '../../../css/map.css';
import MapContainer from './components/MapContainer'

const MapArea = () => {
  return (
    <div className='map-area fx-col'>
      <h1>I am a map</h1>
      <MapContainer />
    </div>
  )
};

export default MapArea;
