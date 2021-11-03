import Controller from '@ember/controller';

const TRAIL_TYPES = [
  [
    'Bike Lane',
    'purple',
  ],[
    'Buffered Bike Lane',
    'darkgreen',
  ],[
    'Sharrow',
    'lightblue',
  ],[
    'Signed Route',
    'yellow',
  ],[
    'Multi-Use Trail',
    'red',
  ],[
    'Unpaved Trail',
    'green',
  ],
];

const EXISTING_TRAILS_PAINT = {
  'line-color': {
    property: 'TYPE',
    type: 'categorical',
    stops: [...TRAIL_TYPES],
  },
  'line-width': 1.5,
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
