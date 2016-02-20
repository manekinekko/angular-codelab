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
import {MarkPipe} from './mark-pipe';


describe('MarkPipes Pipe', () => {

  beforeEachProviders(() => [MarkPipe]);


});
