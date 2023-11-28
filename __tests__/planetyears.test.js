import {
	Mercury, Venus, Mars, Jupiter, YearsSince, YearsSinceMerc, YearsSinceVenus, YearsSinceMars,
	YearsSinceJupiter, YearsUntil, YearsUntilMerc, YearsUntilVenus, YearsUntilMars, YearsUntilJupiter
} from './../src/js/planetyears.js'

// Tests for earth years converted to other planetary years

describe('Mercury', () => {
	test('should return the users input age in equivalent Mercury years', () => {
		const earthAge = 35;
		const mercury = new Mercury(earthAge);
		expect(mercury.getMercuryAge()).toBeCloseTo(145.83);
	});
});

describe('Venus', () => {
	test('should return the users input age in equivalent Venus years', () => {
		const earthAge = 35;
		const venus = new Venus(earthAge);
		expect(venus.getVenusAge()).toBeCloseTo(56.45);
	});
});

describe('Mars', () => {
	test('should return the users input age in equivalent Mars years', () => {
		const earthAge = 35;
		const mars = new Mars(earthAge);
		expect(mars.getMarsAge()).toBeCloseTo(18.62);
	});
});

describe('Jupiter', () => {
	test('should return the users input age in equivalent Jupiter years', () => {
		const earthAge = 35;
		const jupiter = new Jupiter(earthAge);
		expect(jupiter.getJupiterAge()).toBeCloseTo(2.95);
	});
});

// Tests for determining years passed (past date to current age)

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
  test('should return the number of years that have passed since a given age in Mercury years', () => {
    const previousAge = 21;
    const currentAge = 35;
    const yrsDelta = currentAge - previousAge;
    const mercConversion = 0.24;
    const yrsSinceMerc = new YearsSinceMerc(yrsDelta);
    const expectedMercYears = yrsSinceMerc.getDeltaAge() / mercConversion;
    expect(yrsSinceMerc.getDeltaAgeMerc()).toBeCloseTo(expectedMercYears);
  });
});

describe('YearsSinceVenus', () => {
	test('should return the number of years that have passed since a given age in Venus years', () => {
		const previousAge = 21;
		const currentAge = 35;
		const yrsDelta = currentAge - previousAge;
		const venusConversion = 0.62;
		const yrsSinceVenus = new YearsSinceVenus(yrsDelta);
		const expectedVenusYears = yrsSinceVenus.getDeltaAge() / venusConversion;
		expect(yrsSinceVenus.getDeltaAgeVenus()).toBeCloseTo(expectedVenusYears);
	});
});

describe('YearsSinceMars', () => {
	test('should return the number of years that have passed since a given age in Mars years', () => {
		const previousAge = 21;
		const currentAge = 35;
		const yrsDelta = currentAge - previousAge;
		const marsConversion = 1.88;
		const yrsSinceMars = new YearsSinceMars(yrsDelta);
		const expectedMarsYears = yrsSinceMars.getDeltaAge() / marsConversion;
		expect(yrsSinceMars.getDeltaAgeMars()).toBeCloseTo(expectedMarsYears);
	});
});

describe('YearsSinceJupiter', () => {
	test('should return the number of years that have passed since a given age in Jupiter years', () => {
		const previousAge = 21;
		const currentAge = 35;
		const yrsDelta = currentAge - previousAge;
		const jupiterConversion = 11.86;
		const yrsSinceJupiter = new YearsSinceJupiter(yrsDelta);
		const expectedJupiterYears = yrsSinceJupiter.getDeltaAge() / jupiterConversion;
		expect(yrsSinceJupiter.getDeltaAgeJupiter()).toBeCloseTo(expectedJupiterYears);
	});
});

// Tests for determining years until given age (current age to future)
describe('YearsUntil', () => {
	test('should return the number of earth years from the users current age until a future given age', () => {
		const currentAge = 35;
		const futureAge = 50;
		const yrsDelta = futureAge - currentAge;
		const yrsUntil = new YearsUntil(yrsDelta);
		expect(yrsUntil.getDeltaAge()).toBe(15);
	});
});

describe('YearsUntilMerc', () => {
  test('should return the number of Mercury years from the users current age until a future given age', () => {
    const currentAge = 35;
    const futureAge = 50;
    const yrsDelta = futureAge - currentAge;
    const yrsUntilMerc = new YearsUntilMerc(yrsDelta);
    const mercConversion = 0.24;
    const expectedMercYears = yrsUntilMerc.getDeltaAge() / mercConversion;
    expect(yrsUntilMerc.getDeltaUntilMerc()).toBeCloseTo(expectedMercYears);
  });
});

describe('YearsUntilVenus', () => {
  test('should return the number of Venus years from the users current age until a future given age', () => {
    const currentAge = 35;
    const futureAge = 50;
    const yrsDelta = futureAge - currentAge;
    const yrsUntilVenus = new YearsUntilVenus(yrsDelta);
    const venusConversion = 0.62;
    const expectedVenusYears = yrsUntilVenus.getDeltaAge() / venusConversion;
    expect(yrsUntilVenus.getDeltaUntilVenus()).toBeCloseTo(expectedVenusYears);
  });
});

describe('YearsUntilMars', () => {
  test('should return the number of Mars years from the users current age until a future given age', () => {
    const currentAge = 35;
    const futureAge = 50;
    const yrsDelta = futureAge - currentAge;
    const yrsUntilMars = new YearsUntilMars(yrsDelta);
    const marsConversion = 1.88;
    const expectedMarsYears = yrsUntilMars.getDeltaAge() / marsConversion;
    expect(yrsUntilMars.getDeltaUntilMars()).toBeCloseTo(expectedMarsYears);
  });
});

describe('YearsUntilJupiter', () => {
  test('should return the number of Jupiter years from the users current age until a future given age', () => {
    const currentAge = 35;
    const futureAge = 50;
    const yrsDelta = futureAge - currentAge;
    const yrsUntilJupiter = new YearsUntilJupiter(yrsDelta);
    const jupiterConversion = 11.86;
    const expectedJupiterYears = yrsUntilJupiter.getDeltaAge() / jupiterConversion;
    expect(yrsUntilJupiter.getDeltaUntilJupiter()).toBeCloseTo(expectedJupiterYears);
  });
});