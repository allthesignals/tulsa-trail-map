import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import layers from '../utils/map-layers';

const HOVERED = '__hover__';
const HOVERED_PAINT_STYLE = {
  'line-width': [
    'case',
    ['boolean', ['feature-state', HOVERED], false],
    layers['existing-trails'].paint['line-width'] * 2,
    layers['existing-trails'].paint['line-width'],
  ],
};

export default class HoverableLayerComponent extends Component {
  constructor(...args) {
    super(...args);

    const {
      map: { instance: map },
      layerId,
    } = this.args;

    Object.entries(HOVERED_PAINT_STYLE).forEach(([prop, value]) => {
      map.setPaintProperty(layerId, prop, value);
    });
  }

  @tracked
  hoveredFeature = null;

  @action
  onLayerHover(e) {
    const { instance: map } = this.args.map;

    if (hasFeatures(e.features)) {
      // reset the previously hovered feature to false
      if (this.hoveredFeature !== null) {
        map.setFeatureState(
          { source: this.args.sourceId, id: this.hoveredFeature.id },
          { [HOVERED]: false }
        );
      }

      this.hoveredFeature = e.features[0];

      map.setFeatureState(
        { source: this.args.sourceId, id: this.hoveredFeature.id },
        { [HOVERED]: true }
      );

      map.getCanvas().style.cursor = 'pointer';
    }
  }

  @action
  onLayerMouseOut() {
    const { instance: map } = this.args.map;

    if (this.hoveredFeature !== null) {
      map.setFeatureState(
        { source: this.args.sourceId, id: this.hoveredFeature.id },
        { [HOVERED]: false }
      );
    }

    this.hoveredFeature = null;

    map.getCanvas().style.cursor = '';
  }
}

const hasFeatures = (features) => {
  return features.length > 0;
};
