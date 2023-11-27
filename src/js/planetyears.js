//business logic

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
		this.marsYears = earthAge * 6.91;
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