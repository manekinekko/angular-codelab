

export class Store {
	static save(questions) {
		debugger;
		sessionStorage.setItem('store', JSON.stringify(questions));
	}
	
	static read() {
		return JSON.parse(sessionStorage.getItem('store'));
	}
	
	static clear() {
		sessionStorage.clear();
	}
}