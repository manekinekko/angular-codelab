import { Component, Input, Output, EventEmitter, ViewEncapsulation } from 'angular2/core';
import { RouterLink } from 'angular2/router';
import { ITechnology } from '../../../services/TechnologiesStore';

@Component({
	selector: 'theme-card',
	templateUrl: './app/component/home/theme-card/theme-card.html',
	styleUrls: ['./styles/card.css'],
	directives: [RouterLink],
	encapsulation: ViewEncapsulation.None
})
export class ThemeCard {
	@Input() theme : ITechnology;
	
	constructor() {
		this.theme = <ITechnology>{};
	}
}