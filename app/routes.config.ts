import {QuestionCard} from './components/card/card';

export var Routes = {
	technology: {
		path: '/Technology',
		as: 'Technology',
		component: QuestionCard
	}
};

export const APP_ROUTES = [
	this.Routes.technology
];