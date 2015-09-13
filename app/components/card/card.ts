/// <reference path="../../typings/_custom.d.ts" />

import {Component, View, NgFor, ViewEncapsulation} from 'angular2/angular2';

@Component({
	properties: ['content'],
	selector: 'card'
})
@View({
	templateUrl: './components/card/card.html',
	directives: [NgFor],
	styleUrls: ['./components/card/card.css'],
	encapsulation: ViewEncapsulation.NONE
})
export class Card {
	content: any;
	
	constructor(){}
}