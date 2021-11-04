import Controller from '@ember/controller';
import { action } from '@ember/object';

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

const EXISTING_TRAILS_URL = "https://map8.incog.org/arcgis8wa/rest/services/Trails_existing/FeatureServer/0/query?f=geojson&where=1=1&outFields=TYPE,OBJECTID"
const PROPOSED_TRAILS_URL = "https://map8.incog.org/arcgis8wa/rest/services/Trails_GOPlan/FeatureServer/0/query?f=geojson&where=1=1&outFields=Fac_Catego"

export default class ApplicationController extends Controller {
  CONSTANTS = {
    EXISTING_TRAILS_URL,
    PROPOSED_TRAILS_URL,
    TRAIL_TYPES
  }

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
      'line-width': 2,
    }
  };
}
