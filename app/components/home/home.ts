/// <reference path="../../typings/_custom.d.ts" />

import {Component, View, NgFor, ViewEncapsulation} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {ThemeCard} from '../card/card';
import {ITechnology} from '../../services/TechnologiesDataService';
import {ThemesDataService} from '../../services/TechnologiesDataService';
import {Routes} from '../../routes.config';

@Component({
  selector: 'home',
  bindings: [ThemesDataService],
  templateUrl: './components/home/home.html',
  directives: [NgFor, ThemeCard]
})
export class Home {
  private themeCards: any[];
  private router: Router;
  
  constructor(themeService: ThemesDataService, router: Router){
    this.themeCards = themeService.list();
    this.router = router;
  }
  
  start(technology: ITechnology) {
    this.router.navigate(`/${Routes.technology.as}/${technology.slug}`);
  }
}
