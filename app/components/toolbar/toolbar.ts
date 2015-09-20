/// <reference path="../../typings/_custom.d.ts" />

import {Component, View, bootstrap, ViewEncapsulation} from 'angular2/angular2';

import {Home} from 'components/home/home';

@Component({
  selector: 'toolbar'
})
@View({
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ Home ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['vendor/material.css']
})
export class Toolbar {
  title: string = 'Toolbar';
}