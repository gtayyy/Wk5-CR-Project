// Mercury: .24 earth = 1 yr
// Venus: .62 earth = 1 yr
// Mars: 1.88 earth = 1 yr
// Jupiter: 11.86 earth  = 1 yr

import { Mercury, Venus, Mars } from './../src/js/planetyears.js'

describe('Mercury', () => {
	test('should return the users input age in equivalent Mercury years', () => {
		const earthAge = 35;
		const mercury = new Mercury(earthAge);
		expect(mercury.getMercuryAge()).toBeCloseTo(8.4);
	});
})

describe('Venus', () => {
	test('should return the users input age in equivalent Venus years', () => {
		const earthAge = 35;
		const venus = new Venus(earthAge);
		expect(venus.getVenusAge()).toBeCloseTo(21.7);
	});
})

describe('Mars', () => {
	test('Shold return the users input age in equivalent Mars years', () => {
		const earthAge = 35;
		const mars = new Mars(earthAge);
		expect(mars.getMarsAge()).toBeCloseTo(241.85);
	});
})
