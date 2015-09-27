/// <reference path="../../typings/_custom.d.ts" />

import {
	Component, 
	View, 
	NgFor, 
	ViewEncapsulation
} from 'angular2/angular2';

@Component({
	properties: ['content'],
	selector: 'card'
})
@View({
	templateUrl: './components/card/card.html',
	directives: [NgFor],
	encapsulation: ViewEncapsulation.None
})
export class QuestionCard {}

@Component({
	properties: ['theme'],
	selector: 'theme-card'
})
@View({
	templateUrl: './components/card/theme-card.html',
	styleUrls: ['./components/card/card.css'],
	directives: [NgFor]
})
export class ThemeCard {}