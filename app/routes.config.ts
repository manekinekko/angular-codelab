import {QuestionCard} from './components/card/card';

export var Routes = {
	technology: {
		path: '/technology/:name',
		as: 'tchnology',
		component: QuestionCard
	}
};

export const APP_ROUTES = [
	this.Routes.technology
];