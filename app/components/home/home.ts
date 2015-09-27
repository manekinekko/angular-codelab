/// <reference path="../../typings/_custom.d.ts" />

import {Component, View, NgFor, ViewEncapsulation} from 'angular2/angular2';

import {ThemeCard} from '../card/card';
import {ThemesDataService} from '../../services/QuestionDataService';

@Component({
  selector: 'home',
  bindings: [ThemesDataService]
})
@View({
  templateUrl: './components/home/home.html',
  directives: [NgFor, ThemeCard]
})
export class Home {
  private themeCards: any[];
  
  constructor(themeService: ThemesDataService){
    this.themeCards = themeService.list();
  }
}
