import { Component, ViewEncapsulation } from 'angular2/core';

import { ThemeCard } from '../theme-card/theme-card';
import { TechnologiesStore } from '../../services/technologies-store/technologies-store';

@Component({
  selector: 'home',
  providers: [ TechnologiesStore ],
  templateUrl: './app/components/home/home.html',
  directives: [ThemeCard],
  encapsulation: ViewEncapsulation.None
})
export class Home {

  private themeCards: any[];

  constructor(technologiesStore: TechnologiesStore){
    technologiesStore.fetch().then((themes) => this.themeCards = themes);
  }

}
