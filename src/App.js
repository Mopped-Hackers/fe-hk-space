import React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import { access_token, lat, long, style } from './constants';

function App() {
  const lineLayerStyle = {
    id: 'route',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#888',
      'line-width': 8,
    },
  };

  const smallerFirePolygonLayerStyle = {
    id: 'smaller-fire-polygon',
    type: 'fill',
    paint: {
      'fill-color': 'red',
      'fill-opacity': 0.5,
    },
  };

  const largerFirePolygonLayerStyle = {
    id: 'larger-fire-polygon',
    type: 'fill',
    paint: {
      'fill-color': 'red',
      'fill-opacity': 0.5,
    },
  };

  const smallerPolygon = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [19.3600, 43.3569],
          [19.3620, 43.3580],
          [19.3630, 43.3570],
          [19.3620, 43.3560],
          [19.3600, 43.3569], // Closing the polygon
        ],
      ],
    },
  };

  const largerPolygon = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [19.3600, 43.3569],
          [19.3620, 43.3580],
          [19.3650, 43.3570],
          [19.3630, 43.3540],
          [19.3600, 43.3569], // Closing the polygon
        ],
      ],
    },
  };

  const pljevlaLine = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [19.3600, 43.3569],
        [19.3700, 43.3669],
      ],
    },
  };

  // const fireSpreadData = {
  //   type: 'FeatureCollection',
  //   features: [
  //     {
  //       type: 'Feature',
  //       properties: { dbh: 30 },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [19.365, 43.361],
  //       },
  //     },
  //     {
  //       type: 'Feature',
  //       properties: { dbh: 40 },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [19.367, 43.363],
  //       },
  //     },
  //     {
  //       type: 'Feature',
  //       properties: { dbh: 35 },
  //       geometry: {
  //         type: 'Point',
  //         coordinates: [19.368, 43.360],
  //       },
  //     },
  //   ],
  // };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Map
        initialViewState={{
          longitude: long,
          latitude: lat,
          zoom: 14,
        }}
        style={{ width: '70%', height: '700px' }}
        mapStyle={style}
        mapboxAccessToken={access_token}
      >
        <Source id='smaller-fire-polygon' type='geojson' data={smallerPolygon}>
          <Layer {...smallerFirePolygonLayerStyle} />
        </Source>

        <Source id='larger-fire-polygon' type='geojson' data={largerPolygon}>
          <Layer {...largerFirePolygonLayerStyle} />
        </Source>


        <Source id='pljevla-line' type='geojson' data={pljevlaLine}>
          <Layer {...lineLayerStyle} />
        </Source>
      </Map>
    </div>
  );
}

export default App;
