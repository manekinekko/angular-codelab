/// <reference path="../../typings/_custom.d.ts" />

import { Component, NgFor } from 'angular2/angular2';

import { QuestionCard } from '../card/card';

@Component({
  selector: 'technology',
  templateUrl: './components/technology/technology.html',
  directives: [NgFor, QuestionCard]
})
export class Technology {
}
