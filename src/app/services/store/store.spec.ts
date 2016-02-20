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
import {Store} from './store';


describe('Store Service', () => {

  beforeEachProviders(() => [Store]);


  it('should ...', inject([Store], (service:Store) => {

  }));

});
