import {Component, View, bootstrap} from 'angular2/angular2';

import {Home} from 'components/home/home';

@Component({
  selector: 'toolbar'
})
@View({
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ Home ]
})
export class Toolbar {
  title: string = 'Toolbar';
}