
export const QUESTIONS = Array.apply(null, {length: 5}).map((item, index) => {
	return {
		title: `Question #${index+1} : `,
		choices: [{
			label: 'response A',
			correct: true
		}, {
			label: 'response B',
			correct: false
		}, {
			label: 'response C',
			correct: false
		}, {
			label: 'response D',
			correct: false
		}]
	}
});