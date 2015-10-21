/// <reference path="../../typings/_custom.d.ts" />

import {
  Component, 
  View
} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';

import {Home} from '../home/home';
import {APP_ROUTES, Routes} from '../../routes.config';
import {FixScrolling} from './fix-scrolling';

@Component({
  selector: 'toolbar'
})
@View({
  templateUrl: 'components/toolbar/toolbar.html',
  directives: [ ROUTER_DIRECTIVES, Home, FixScrolling ]
})
@RouteConfig(APP_ROUTES)
export class Toolbar {
  title: string = 'Toolbar';
  constructor(){
    
  }
}
