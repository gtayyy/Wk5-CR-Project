// Mercury: .24 earth = 1 yr
// Venus: .62 earth = 1 yr
// Mars: 1.88 earth = 1 yr
// Jupiter: 11.86 earth  = 1 yr

import { Mercury } from './../src/js/planetyears.js'


describe('Mercury', () => {
	test('should return the users input age in equivalent Mercury years', () => {
		const earthAge = 35;
		const mercury = new Mercury(earthAge);
		expect(mercury.getMercuryAge()).toBeCloseTo(8.4);
	});
})


// describe('Mercury class', () => {
//  test('should calculate Mercury age correctly', () => {
//    const earthAge = 25;
//    const mercury = new Mercury(earthAge);
//    expect(mercury.getMercuryAge()).toBeCloseTo(earthAge * 0.24, 10); // Using toBeCloseTo due to potential floating-point precision issues
//  });

