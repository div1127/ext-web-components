//import { Route } from '@sencha/ext-web-components';

import  { getRoutes } from '@sencha/ext-web-components-router/lib/ext-router.component';
import '@sencha/ext-web-components/lib/ext-audio.component';
import '@sencha/ext-web-components/lib/ext-container.component';
import '@sencha/ext-web-components/lib/ext-menu.component';
import '@sencha/ext-web-components/lib/ext-menuitem.component';
import '@sencha/ext-web-components/lib/ext-carousel.component';
import '@sencha/ext-web-components/lib/ext-button.component';
import '@sencha/ext-web-components/lib/ext-checkboxfield.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-comboboxfield.component';
import '@sencha/ext-web-components/lib/ext-container.component';
import '@sencha/ext-web-components/lib/ext-containerfield.component';
import '@sencha/ext-web-components/lib/ext-splitbutton.component';
import '@sencha/ext-web-components/lib/ext-dataview.component';
import '@sencha/ext-web-components/lib/ext-dialog.component';
import '@sencha/ext-web-components/lib/ext-datepickerfield.component';
import '@sencha/ext-web-components/lib/ext-datepickernativefield.component';
import '@sencha/ext-web-components/lib/ext-emailfield.component';
import '@sencha/ext-web-components/lib/ext-fieldset.component';
import '@sencha/ext-web-components/lib/ext-filefield.component';
import '@sencha/ext-web-components/lib/ext-formpanel.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-numberfield.component';
import '@sencha/ext-web-components/lib/ext-panel.component';
import '@sencha/ext-web-components/lib/ext-passwordfield.component';
import '@sencha/ext-web-components/lib/ext-radiofield.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';
import '@sencha/ext-web-components/lib/ext-selectfield.component';
import '@sencha/ext-web-components/lib/ext-sliderfield.component';
import '@sencha/ext-web-components/lib/ext-spinnerfield.component';
import '@sencha/ext-web-components/lib/ext-spacer.component';
import '@sencha/ext-web-components/lib/ext-selectfield.component';
import '@sencha/ext-web-components/lib/ext-sliderfield.component';
import '@sencha/ext-web-components/lib/ext-spinnerfield.component';
import '@sencha/ext-web-components/lib/ext-treelist.component';
import '@sencha/ext-web-components/lib/ext-panel.component';
import '@sencha/ext-web-components/lib/ext-segmentedbutton.component';
import '@sencha/ext-web-components/lib/ext-tabbar.component';
import '@sencha/ext-web-components/lib/ext-tab.component';
import '@sencha/ext-web-components/lib/ext-tabpanel.component';
import '@sencha/ext-web-components/lib/ext-textareafield.component';
import '@sencha/ext-web-components/lib/ext-textfield.component';
import '@sencha/ext-web-components/lib/ext-timefield.component';
import '@sencha/ext-web-components/lib/ext-titlebar.component';
import '@sencha/ext-web-components/lib/ext-togglefield.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-urlfield.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-formpanel.component';
import '@sencha/ext-web-components/lib/ext-textfield.component';
import '@sencha/ext-web-components/lib/ext-sliderfield.component';
import '@sencha/ext-web-components/lib/ext-gauge.component';
import '@sencha/ext-web-components/lib/ext-colorselector.component';
import '@sencha/ext-web-components/lib/ext-draw.component';
import '@sencha/ext-web-components/lib/ext-progress.component';
import '@sencha/ext-web-components/lib/ext-sheet.component';
import '@sencha/ext-web-components/lib/ext-video.component';
import '@sencha/ext-web-components/lib/ext-datepanel.component';
import '@sencha/ext-web-components/lib/ext-tooltip.component';
import '@sencha/ext-web-components/lib/ext-timepanel.component';
import '@sencha/ext-web-components/lib/ext-segmentedbutton.component';
import '@sencha/ext-web-components/lib/ext-indicator.component';
import '@sencha/ext-web-components/lib/ext-calendar.component';
import '@sencha/ext-web-components/lib/ext-pivotgrid.component';
import '@sencha/ext-web-components/lib/ext-calendar.component';
import '@sencha/ext-web-components/lib/ext-calendar-list.component';
import '@sencha/ext-web-components/lib/ext-calendar-day.component';
import '@sencha/ext-web-components/lib/ext-calendar-days.component';
import '@sencha/ext-web-components/lib/ext-calendar-weeks.component';
import '@sencha/ext-web-components/lib/ext-cartesian.component';
import '@sencha/ext-web-components/lib/ext-segmentedbutton.component';
import '@sencha/ext-web-components/lib/ext-indicator.component';
import '@sencha/ext-web-components/lib/ext-polar.component';
import '@sencha/ext-web-components/lib/ext-chart.component';
import '@sencha/ext-web-components/lib/ext-d3.component';
import '@sencha/ext-web-components/lib/ext-d3-horizontal-tree.component';
import '@sencha/ext-web-components/lib/ext-d3-heatmap.component';
import '@sencha/ext-web-components/lib/ext-pivotheatmap.component';
import '@sencha/ext-web-components/lib/ext-pivotd3container.component';

import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

Ext.require([
  'Ext.layout.*',
  'Ext.data.TreeStore'
]);

function init() {
  window.d3 = d3;
  window.menu = getMenu();
  window.routes = getRoutes(window.menu);
  window.main = new MainComponent()
  document.body.innerHTML = window._code['main']['MainComponent.html']
}

init();
