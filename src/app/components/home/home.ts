/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgFor } from 'angular2/angular2';

import { ThemeCard } from '../card/theme-card';
import { TechnologiesStore, ITechnology } from '../../services/TechnologiesStore';

@Component({
  selector: 'home',
  bindings: [TechnologiesStore],
  templateUrl: './components/home/home.html',
  directives: [NgFor, ThemeCard]
})
export class Home {
  
  private themeCards: any[];
  
  constructor(technologiesStore: TechnologiesStore){
    this.themeCards = technologiesStore.fetch();
  }
  
}
