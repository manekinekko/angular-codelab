/// <reference path="../../typings/_custom.d.ts" />

import {Component, NgFor} from 'angular2/angular2';

import {ThemeCard} from '../card/card';
import {ITechnology} from '../../services/TechnologiesDataService';
import {ThemesDataService} from '../../services/TechnologiesDataService';

@Component({
  selector: 'home',
  bindings: [ThemesDataService],
  templateUrl: './components/home/home.html',
  directives: [NgFor, ThemeCard]
})
export class Home {
  private themeCards: any[];
  
  constructor(themeService: ThemesDataService){
    this.themeCards = themeService.list();
  }
  
  
  start(technology: ITechnology) {
    
  }
}
