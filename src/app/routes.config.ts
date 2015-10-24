/// <reference path="typings/_custom.d.ts" />

import { RouteDefinition } from 'angular2/router';
import { Home } from './components/home/home';
import { Technology } from './components/technology/technology';

export var Routes = {
	home: {
		path: '/home',
		component: Home,
		as: 'Home'
	},
	technology: {
		path: '/technology/:name',
		component: Technology,
		as: 'Technology'
	}
};

export const APP_ROUTES: RouteDefinition[] = Object.keys(Routes).map((route) => Routes[route]);