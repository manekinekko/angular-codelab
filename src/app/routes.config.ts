import { RouteDefinition } from 'angular2/router';
import { Home } from './components/home/home';
import { Summary } from './components/summary/summary';
import { Technology } from './components/technology/technology';

export var Routes = {
	home: {
		path: '/home',
		component: Home,
		name: 'Home',
		useAsDefault: true
	},
	technology: {
		path: '/technology/:name/:id',
		component: Technology,
		name: 'Technology'
	},
	summary: {
		path: '/summary',
		component: Summary,
		name: 'Summary'
	}
};

export const APP_ROUTES: RouteDefinition[] = Object.keys(Routes).map((route) => Routes[route]);
