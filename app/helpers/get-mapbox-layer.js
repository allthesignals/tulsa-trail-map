import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import layers from '../utils/map-layers';

export default helper(function getMapboxLayer([path] /*, named*/) {
  return get(layers, path);
});
