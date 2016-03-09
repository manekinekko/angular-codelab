import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';
import {APP_ROUTES} from './routes.config'
import {QuestionsStore} from './services/question-store/question-store'
import { FixScrolling } from './directives/fix-scrolling/fix-scrolling';

@Component({
  selector: 'app',
  host: {
    '(^updatetitle)': 'onUpdateTitle()'
  },
  providers: [QuestionsStore],
  templateUrl: 'app/components/toolbar/toolbar.html',
  directives: [ RouterOutlet, RouterLink, FixScrolling ]
})
@RouteConfig(APP_ROUTES)
export class Ng2CodelabApp {
  private title: string = 'Angular 2 Quiz App';
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  onUpdateTitle(title: string) {
    this.title = title;
  }

}
