import './BasicDatePanelComponent.html';

Ext.require('Ext.panel.Date');

export default class BasicDatePanelComponent {

  constructor () {
    console.log('in BasicDatePanelComponent constructor');
  }

  readycontainer1(event) {
    debugger;
    this.containerCmp = event.detail.cmp;
    const padding = Ext.os.is.Phone ? 0 : 10;
    this.containerCmp.setPadding(padding);
  }
}
