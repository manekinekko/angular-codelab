import { Component, EventEmitter } from 'angular2/core';
import { Router, RouterOutlet, RouterLink } from 'angular2/router';
import { FixScrolling } from '../fix-scrolling/fix-scrolling';

@Component({
  selector: 'toolbar',
  host: {
    '(^updatetitle)': 'onUpdateTitle()'
  },
  templateUrl: 'app/components/toolbar/toolbar.html',
  directives: [ RouterOutlet, RouterLink, FixScrolling ]
})
export class Toolbar {

  private title: string = 'Angular 2 Quiz App';
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  onUpdateTitle(title: string) {
    this.title = title;
  }

}
