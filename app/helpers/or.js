import { helper } from '@ember/component/helper';

export default helper(function or([a, b] /*, named*/) {
  return a ?? b;
});
