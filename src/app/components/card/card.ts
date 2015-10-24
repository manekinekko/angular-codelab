/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgFor } from 'angular2/angular2';
import {RouteConfig, RouterLink } from 'angular2/router';

@Component({
	properties: ['content'],
	selector: 'question-card',
	templateUrl: './components/card/card.html',
	directives: [NgFor]
})
export class QuestionCard {}