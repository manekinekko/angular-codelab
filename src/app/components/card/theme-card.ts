/// <reference path="../../typings/_custom.d.ts" />

import { Component } from 'angular2/angular2';
import { RouteConfig, RouterLink } from 'angular2/router';

@Component({
	properties: ['theme'],
	selector: 'theme-card',
	templateUrl: './components/card/theme-card.html',
	styleUrls: ['./components/card/card.css'],
	directives: [RouterLink]
})
export class ThemeCard {}