import bundle from './dev/the-lynched-hate-crime.min.js';
var x = new ProtoGraph.Card.toMaps()
x.init({
  selector: document.querySelector('#card-list-div'),
  dataURL: 'https://cdn.protograph.pykih.com/49a045aea2b71456f5d04f4a/index.json',
  topoURL: '../src/data/india-topo.json',
  chartOptions: {
    chartTitle: 'Mob Justice in India',
    height: 600,
    defaultCircleColor: '#F02E2E'
  }
})
x.renderLaptop();