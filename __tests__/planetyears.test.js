import { Mercury, Venus, Mars, Jupiter, YearsSince } from './../src/js/planetyears.js'

describe('Mercury', () => {
	test('should return the users input age in equivalent Mercury years', () => {
		const earthAge = 35;
		const mercury = new Mercury(earthAge);
		expect(mercury.getMercuryAge()).toBeCloseTo(145.83);
	});
})

describe('Venus', () => {
	test('should return the users input age in equivalent Venus years', () => {
		const earthAge = 35;
		const venus = new Venus(earthAge);
		expect(venus.getVenusAge()).toBeCloseTo(56.45);
	});
})

describe('Mars', () => {
	test('should return the users input age in equivalent Mars years', () => {
		const earthAge = 35;
		const mars = new Mars(earthAge);
		expect(mars.getMarsAge()).toBeCloseTo(18.62);
	});
})

describe('Jupiter', () => {
	test('should return the users input age in equivalent Jupiter years', () => {
		const earthAge = 35;
		const jupiter = new Jupiter(earthAge);
		expect(jupiter.getJupiterAge()).toBeCloseTo(2.95);
	});
})

describe('YearsSince', () => {
  test('should return the number of years that have passed since a given age in earth years', () => {
    const previousAge = 21;
    const currentAge = 35;
    const yrsDelta = currentAge - previousAge;
    const yrsSince = new YearsSince(yrsDelta);
    expect(yrsSince.getDeltaAge()).toBe(14);
  });
});


describe('YearsSinceMerc', () => {
	test('should return the number of year that have passed since a given age in Mercury years', () => {
		const previousAge = ();
		const currentAge = ();
		const yrsDelta = currentAge - previousAge;
		const yrsSinceMerc = new YearsSinceMerc(yrsDelta);
		const mercConversion = 0.24;
		const mercYears = yrsSinceMerc.getDeltaAge() / mercConversion;
		const yrsSinceMercury = new YearsSinceMerc(yrsSinceMerc.getDeltaAge());
		expect(yrsSinceMercury.getMercuryAge()).toBe(mercYears);
	});
});

// describe('YearsSinceMerc', () => {
//   test('should return the number of years that have passed since a given age in Mercury years', () => {
//     const previousAge = 21;
//     const currentAge = 35;
//     const yrsDelta = currentAge - previousAge;
//     const yrsSince = new YearsSinceMerc(yrsDelta);
//     const mercuryConversion = 0.24;
//     const mercuryYears = yrsSince.getDeltaAge() / mercuryConversion;
//     const yrsSinceMercury = new YearsSinceMerc(yrsSince.getDeltaAge());
//     expect(yrsSinceMercury.getMercuryAge()).toBe(mercuryYears);
//   });
// });

// describe('YearsSinceVinus', () => {
//   test('should return the number of years that have passed since a given age in Venus years', () => {
//     const previousAge = 21;
//     const currentAge = 35;
//     const yrsDelta = currentAge - previousAge;
//     const yrsSince = new YearsSinceVinus(yrsDelta);
//     const venusConversion = 0.62;
//     const venusYears = yrsSince.getDeltaAge() / venusConversion;
//     const yrsSinceVenus = new YearsSinceVinus(yrsSince.getDeltaAge());
//     expect(yrsSinceVenus.getVinusAge()).toBe(venusYears);
//   });
// });