import Controller from '@ember/controller';

const TRAIL_TYPES = [
  [
    'Bike Lane',
    '#162B49',
  ],[
    'Buffered Bike Lane',
    '#EBAD21',
  ],[
    'Sharrow',
    '#C6202E',
  ],[
    'Signed Route',
    '#E18A89',
  ],[
    'Multi-Use Trail',
    '#DFC2A5',
  ],[
    'Unpaved Trail',
    '#ECAE1D',
  ],
];

const EXISTING_TRAILS_PAINT = {
  'line-color': {
    property: 'TYPE',
    type: 'categorical',
    stops: [...TRAIL_TYPES],
  },
  'line-width': 3,
};

export default class ApplicationController extends Controller {
  TRAIL_TYPES = TRAIL_TYPES;

  queryParams = ['proposed'];

  proposed = true;

  trailStyle = {
    type:'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
    },
  };

  proposedTrails = {
    type: 'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
      'line-dasharray': [3, 3]
    }
  };
}
