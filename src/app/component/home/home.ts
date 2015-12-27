import { Component, ViewEncapsulation } from 'angular2/core';

import { ThemeCard } from './theme-card/theme-card';
import { TechnologiesStore, ITechnology } from '../../services/TechnologiesStore';

@Component({
  selector: 'home',
  providers: [ TechnologiesStore ],
  templateUrl: './app/component/home/home.html',
  directives: [ThemeCard],
  encapsulation: ViewEncapsulation.None
})
export class Home {
  
  private themeCards: any[];
  
  constructor(technologiesStore: TechnologiesStore){
    technologiesStore.fetch().then((themes) => {
      this.themeCards = themes;
    });
  }
  
  updateTitle() {
    //console.log(arguments);
  }
  
}
