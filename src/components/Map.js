import React from 'react';
import ReactMapGL from 'react-map-gl';
import { lat } from '../constants';

const Map = () => {
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: 400,
    latitude: lat,
    longitude: -4,
    zoom: 12,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoibm9wMTIzIiwiYSI6ImNscHg3YTBzcjBvZXgycms3c25paXZyNjgifQ.GjmBSH9tV7LbsH9pwTC2hQ"
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default Map;
