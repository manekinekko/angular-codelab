/// <reference path="typings/_custom.d.ts" />

import {bind, bootstrap} from 'angular2/angular2';
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {Devfest} from './app';

bootstrap(Devfest, [
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);