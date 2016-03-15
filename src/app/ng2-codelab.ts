import {Component} from 'angular2/core';
import {Home} from './components/home/home';

@Component({
  selector: 'app',
  templateUrl: 'app/ng2codelab.html',
  directives : [Home]
})
export class Ng2CodelabApp {
  private title: string;

  constructor() {
    this.title = 'Angular 2 Quiz App';
  }

}
