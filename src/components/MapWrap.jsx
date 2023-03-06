import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet'
import mark from './../assets/icon-location.svg';


const MapWrap = ({latLongTude}) => {


  
  const position = [Number(latLongTude[0]), Number(latLongTude[1])];
  const markerIcon = L.icon({
    iconUrl: mark,
    iconSize: [40, 52],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  })

  return (
    <div className='section mapwrap'>
      <MapContainer key={`${latLongTude[0]}-${latLongTude[1]}`} center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapWrap;