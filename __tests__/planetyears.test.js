import { Mercury, Venus, Mars, Jupiter } from './../src/js/planetyears.js'

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
	test('should return the users input age in equivalent Mars years', () => {
		const earthAge = 35;
		const mars = new Mars(earthAge);
		expect(mars.getMarsAge()).toBeCloseTo(241.85);
	});
})

describe('Jupiter', () => {
	test('should return the users input age in equivalent Jupiter years', () => {
		const earthAge = 35;
		const jupiter = new Jupiter(earthAge);
		expect(jupiter.getJupiterAge()).toBeCloseTo(415.1);
	});
})

describe('YearsSince', () => {
	test('should return the number of years that have passed since a given age', () => {
		expect(yrsSince.getYearsSinceNum()).toBeCloseTo();
	});
})
