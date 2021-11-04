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
    '#DDF9C1',
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
    id: 'trails',
    type:'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
    },
  };

  proposedTrails = {
    type: 'line',
    paint: {
      ...EXISTING_TRAILS_PAINT,
      'line-width': 2,
    }
  };

  onMapLoad(map) {
    // this.setupHoverEffects(map);
  }

  // setupHoverEffects(map) {
  //   map.on('mousemove', 'state-fills', (e) => {
  //     if (e.features.length > 0) {
  //       if (hoveredStateId !== null) {
  //         map.setFeatureState({ source: 'states', id: hoveredStateId }, { hover: false });
  //       }

  //       hoveredStateId = e.features[0].id;

  //       map.setFeatureState({ source: 'states', id: hoveredStateId }, { hover: true });
  //     }
  //   });

  //   map.on('mouseleave', 'state-fills', () => {
  //     if (hoveredStateId !== null) {
  //     map.setFeatureState(
  //     { source: 'states', id: hoveredStateId },
  //     { hover: false }
  //     );
  //     }
  //     hoveredStateId = null;
  //   });
  // }
}
