export const smallerPolygon = {
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

export const largerPolygon = {
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