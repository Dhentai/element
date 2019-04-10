import Moments from './src/main';

/* istanbul ignore next */
Moments.install = function(Vue) {
  Vue.component(Moments.name, Moments);
};

export default Moments;
