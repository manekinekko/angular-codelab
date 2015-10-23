/// <reference path="../../typings/_custom.d.ts" />

import {
	Component,  
	NgFor
} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	properties: ['content'],
	selector: 'question-card',
	templateUrl: './components/card/card.html',
	directives: [NgFor]
})
export class QuestionCard {}

@Component({
	properties: ['theme'],
	selector: 'theme-card',
	templateUrl: './components/card/theme-card.html',
	styleUrls: ['./components/card/card.css'],
	directives: [NgFor, ROUTER_DIRECTIVES]
})
export class ThemeCard {}