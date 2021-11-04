import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import sources from '../utils/map-sources';

export default helper(function getMapboxSource([path] /*, named*/) {
  return get(sources, path);
});
