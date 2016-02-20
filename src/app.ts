import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser'
import { QUESTIONS } from './app/data/questions';
import { ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy } from 'angular2/router';
import {Ng2CodelabApp} from './app/ng2-codelab';


bootstrap(Ng2CodelabApp, [
	ROUTER_PROVIDERS,
	provide(Array, {useValue: QUESTIONS}),
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
