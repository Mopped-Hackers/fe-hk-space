import React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import { ACCESS_TOKEN, LAT, LONG, MAP_STYLE } from '../../constants';
import { smallerPolygon, largerPolygon } from './polygon';

function App(props) {
  const { setLongitude, setLatitude, setZoom, zoom, longitude, latitude } = props;

  const viewportHandler = (viewport) => {
    const _viewport = viewport.viewState;
    setLongitude(_viewport.longitude);
    setLatitude(_viewport.latitude);
    setZoom(_viewport.zoom);
  }

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', overflow: 'hidden'}} id="map">
      <Map
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: zoom,
        }}
        onViewportChange={viewportHandler}
        onMove={(e) => viewportHandler(e)}
        style={{ width: '90%', height: '700px' }}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={ACCESS_TOKEN}
      >
      </Map>
    </div>
  );
}

export default App;
