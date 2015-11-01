import { Component, EventEmitter } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/core/facade/async';

interface ITitleObservableWrapper {
	subscribe(callback: any): void;
	callNext(args: any): void;
}

export class TitleObservableWrapper implements ITitleObservableWrapper {
	
	private bus: EventEmitter;
	
	constructor() {
		this.bus = new EventEmitter();
	}
	
	subscribe(callback: any) {
		ObservableWrapper.subscribe(this.bus, callback, console.error);
	}
	
	callNext(args: any) {
		ObservableWrapper.callNext(this.bus, args);
	}
}