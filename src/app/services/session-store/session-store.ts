import {Injectable} from 'angular2/core';

@Injectable()
export class SessionStore {
	static save(questions) {
		sessionStorage.setItem('session-store', JSON.stringify(questions));
	}

	static read() {
		return JSON.parse(sessionStorage.getItem('session-store'));
	}

	static clear() {
		sessionStorage.clear();
	}
}
