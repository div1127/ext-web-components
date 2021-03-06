import './BasicGridComponent.scss';
import './BasicGridComponent.html';
import model from '../../data/CompanyModel';
import '../../data/Companies.js';
export default class BasicGridComponent {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/Companies'
    }
  });

  readyGrid = (event) => {
    this.gridCmp = event.detail.cmp
    this.gridCmp.setStore(this.store)
  }

  renderSign = (value, format) =>  {
    var formattedValue = Ext.util.Format.number(value, '0.00');
    var col = ''
    if(value > 0) {col = 'green'}
    else if(value < 0 ) {col = 'red'}
    return `<span style='color:${col}'>${formattedValue}</span>`
  }
}
