import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, PathLocationStrategy, LocationStrategy} from 'angular2/router';

bootstrap(Ng2CodelabApp,[
  ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: PathLocationStrategy})
]);
