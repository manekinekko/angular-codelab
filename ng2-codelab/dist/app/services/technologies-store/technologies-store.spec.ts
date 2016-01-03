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
import {TechnologiesStore} from './technologies-store';


describe('TechnologiesStore Service', () => {

  beforeEachProviders(() => [TechnologiesStore]);


  it('should ...', inject([TechnologiesStore], (service:TechnologiesStore) => {

  }));

});
