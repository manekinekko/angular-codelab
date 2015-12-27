import { RouteDefinition } from 'angular2/router';
import { Home } from './component/home/home';
import { Summary } from './component/summary/summary';
import { Technology } from './component/technology/technology';

export var Routes = {
	home: {
		path: '/home',
		component: Home,
		as: 'Home'
	},
	technology: {
		path: '/technology/:name/:id',
		component: Technology,
		as: 'Technology'
	},
	summary: {
		path: '/summary',
		component: Summary,
		as: 'Summary'
	},
	otherwise: {
		path: '/',
		redirectTo: ['/Home']
	}
};




export const APP_ROUTES: RouteDefinition[] = Object.keys(Routes).map((route) => Routes[route]);