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

export const APP_ROUTES = [
	this.Routes.home,
	this.Routes.technology
];