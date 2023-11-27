// Mercury: .24 earth = 1 yr
// Venus: .62 earth = 1 yr
// Mars: 1.88 earth = 1 yr
// Jupiter: 11.86 earth  = 1 yr

import Mercury from './../src/js/planetyears.js'


describe('Mercury', () => {
	test('should return the users input age in equivalent Mercury years',() => {
		const mercury = new Mercury(35);
		expect(mercury.years).toEqual(8.4);
	});
})

