const TRAIL_TYPES = [
  ['Multi-Use Trail', '#C6202E'],
  ['Bike Lane', '#EBAD21'],
  ['Buffered Bike Lane', '#EBAD21'],
  ['Unpaved Trail', '#162B49'],
  ['Sharrow', '#DFC2A5'],
  ['Signed Route', 'green'],
];

const EXISTING_TRAILS_PAINT = {
  'line-color': {
    property: 'TYPE',
    type: 'categorical',
    stops: [...TRAIL_TYPES],
  },
  'line-width': 2,
};

export default {
  'existing-trails': {
    type: 'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
    },
  },
  'proposed-trails': {
    type: 'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
      'line-width': 2,
    },
  },
  'closed-trails': {
    type: 'line',
    paint: {
      'line-color': 'black',
      'line-width': EXISTING_TRAILS_PAINT['line-width'] + 1,
    },
  },
  'detours': {
    type: 'line',
    paint: {
      'line-color': 'black',
    },
  },
};
