const TRAIL_TYPES = [
  ['Bike Lane', '#162B49'],
  ['Buffered Bike Lane', '#EBAD21'],
  ['Sharrow', '#DFC2A5'],
  ['Signed Route', '#E18A89'],
  ['Multi-Use Trail', '#C6202E'],
  ['Unpaved Trail', '#DDF9C1'],
];

const EXISTING_TRAILS_PAINT = {
  'line-color': {
    property: 'TYPE',
    type: 'categorical',
    stops: [...TRAIL_TYPES],
  },
  'line-width': 3,
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
};
