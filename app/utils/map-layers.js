const TRAIL_TYPES = [
  ['Multi-Use Trail', '#C6202E'],
  ['Bike Lane', '#EBAD21'],
  ['Buffered Bike Lane', '#EBAD21'],
  ['Unpaved Trail', 'green'],
  ['Sharrow', '#DFC2A5'],
  ['Signed Route', '#162B49'],
];

const EXISTING_TRAILS_PAINT = {
  'line-color': {
    property: 'TYPE',
    type: 'categorical',
    stops: [...TRAIL_TYPES],
  },
  'line-width': 2.5,
};

export default {
  'existing-trails': {
    type: 'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
    },
  },
  'existing-trails-labels': {
    type: 'symbol',
    paint: {
      'text-halo-color': 'white',
      'text-halo-width': 2,
    },
    layout: {
      'symbol-placement': 'line-center',
      'text-field': ['get', 'NAME'],
      'text-size': 12,
      'icon-allow-overlap': true,
    },
  },
  'proposed-trails': {
    type: 'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
      'line-width': EXISTING_TRAILS_PAINT['line-width'] - 1,
    },
  },
  'closed-trails': {
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': EXISTING_TRAILS_PAINT['line-width'] + 3,
      'line-opacity': 0.5,
      'line-dasharray': [1, 1],
    },
  },
  detours: {
    type: 'line',
    paint: {
      'line-width': EXISTING_TRAILS_PAINT['line-width'] + 3,
      'line-color': 'green',
      'line-dasharray': [1, 1],
    },
  },
};
