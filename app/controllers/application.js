import Controller from '@ember/controller';
import { action } from '@ember/object';
import mapboxgl from 'mapbox-gl';

export default class ApplicationController extends Controller {
  queryParams = ['proposed'];

  proposed = true;

  onLoad(map) {
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      }),
      'bottom-right'
    );
  }
}
