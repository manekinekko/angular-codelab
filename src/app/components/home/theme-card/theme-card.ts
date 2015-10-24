/// <reference path="../../../typings/_custom.d.ts" />

import { Component, Input } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { ITechnology } from '../../../services/TechnologiesStore';

@Component({
	selector: 'theme-card',
	templateUrl: './components/home/theme-card/theme-card.html',
	styleUrls: ['./styles/card.css'],
	directives: [RouterLink]
})
export class ThemeCard {
	@Input() private theme : ITechnology;
}