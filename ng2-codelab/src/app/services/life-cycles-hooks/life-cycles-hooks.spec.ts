import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {LifeCyclesHooks} from './life-cycles-hooks';


describe('LifeCyclesHooks Service', () => {

  beforeEachProviders(() => [LifeCyclesHooks]);


  it('should ...', inject([LifeCyclesHooks], (service:LifeCyclesHooks) => {

  }));

});
