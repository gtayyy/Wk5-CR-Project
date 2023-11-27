// Business logic
// Mercury: .24 earth = 1 yr
// Venus: .62 earth = 1 yr
// Mars: 1.88 earth = 1 yr
// Jupiter: 11.86 earth  = 1 yr

export class Mercury {
  constructor(earthAge) {
    this.mercuryYears = earthAge * 0.24;
  }
  getMercuryAge() {
    return this.mercuryYears;
  }
}

export class Venus {
	constructor(earthAge) {
		this.venusYears = earthAge * 0.62;
	}
	getVenusAge() {
		return this.venusYears;
	}
}

export class Mars {
	constructor(earthAge) {
		this.marsYears = earthAge * 1.88;
	}
	getMarsAge() {
		return this.marsYears;
	}
}

export class Jupiter {
	constructor(earthAge) {
		this.jupiterYears = earthAge * 11.86;
	}
	getJupiterAge() {
		return this.jupiterYears;
	}
}

// describe('Jupiter', () => {
// 	test('should return the users input age in equivalent Jupiter years', () => {
// 		const earthAge = 35;
// 		const jupiter = new Jupiter(earthAge);
// 		expect(jupiter.getJupiterAge()).toBeCloseTo(415.1);
// 	});
// })

export class YearsSince {
	constructor(yrsDelta) {
		this.yrsSince = yrsDelta;  
	}
	getDeltaAge() {
		return this.yrsSince;
	}
}

// describe('YearsSince', () => {
// 	test('should return the number of years that have passed since a given age', () => {
// 	const previousAge = 21;
// 	const currentAge = 35;
// 	const yrsDelta = currentAge - previousAge;
	
// 		expect(yrsSince.getYearsSinceNum()).toBeCloseTo();
// 	});
// })