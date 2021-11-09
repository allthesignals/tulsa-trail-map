import Popup from 'ember-mapbox-gl/components/mapbox-gl-popup';

export default class MapboxGlPopupComponent extends Popup {
  didReceiveAttrs() {
    const lngLat = this.lngLat;

    if (lngLat) {
      if (this.popup.isOpen()) {
        this.popup.setLngLat(lngLat);
      } else {
        this.popup.remove();
        this.popup.addTo(this.map);
        this.popup.setLngLat(lngLat);
      }
    }
  }
}
