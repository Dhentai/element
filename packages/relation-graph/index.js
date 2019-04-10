import RelationGraph from '../relation-graph/src/main';

/* istanbul ignore next */
RelationGraph.install = function(Vue) {
  Vue.component(RelationGraph.name, RelationGraph);
};

export default RelationGraph;
