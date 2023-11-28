// Business logic
// Mercury: .24 earth = 1 yr
// Venus: .62 earth = 1 yr
// Mars: 1.88 earth = 1 yr
// Jupiter: 11.86 earth  = 1 yr

// Earth years converted to other planetary years
export class Mercury {
  constructor(earthAge) {
    this.mercuryYears = earthAge / 0.24;
  }
  getMercuryAge() {
    return this.mercuryYears;
  }
};

export class Venus {
	constructor(earthAge) {
		this.venusYears = earthAge / 0.62;
	}
	getVenusAge() {
		return this.venusYears;
	}
};

export class Mars {
	constructor(earthAge) {
		this.marsYears = earthAge / 1.88;
	}
	getMarsAge() {
		return this.marsYears;
	}
};

export class Jupiter {
	constructor(earthAge) {
		this.jupiterYears = earthAge / 11.86;
	}
	getJupiterAge() {
		return this.jupiterYears;
	}
};

// Determining years passed (past date to current age)
export class YearsSince {
	constructor(yrsDelta) {
		this.yrsSince = yrsDelta;  
	}
	getDeltaAge() {
		return this.yrsSince;
	}
};

export class YearsSinceMerc {
  constructor(yrsDelta) {
    this.yrsSinceEarth = yrsDelta;
  }
  getDeltaAge() {
    return this.yrsSinceEarth;
  }
  getDeltaAgeMerc() {
    const mercConversion = 0.24;
    return this.yrsSinceEarth / mercConversion;
  }
}; 

export class YearsSinceVenus {
	constructor(yrsDelta) {
		this.yrsSinceEarth = yrsDelta;
	}
	getDeltaAge() {
		return this.yrsSinceEarth;
	}
	getDeltaAgeVenus() {
		const venusConversion = 0.62;
		return this.yrsSinceEarth / venusConversion;
	}
};

export class YearsSinceMars {
	constructor(yrsDelta) {
		this.yrsSinceEarth = yrsDelta;
	}
	getDeltaAge() {
		return this.yrsSinceEarth;
	}
	getDeltaAgeMars() {
    const marsConversion = 1.88;
    const marsYears = this.yrsSinceEarth / marsConversion;
    return parseFloat(marsYears.toFixed(2));
  }
};

export class YearsSinceJupiter {
	constructor(yrsDelta) {
		this.yrsSinceEarth = yrsDelta;
	}
	getDeltaAge() {
		return this.yrsSinceEarth;
	}
	getDeltaAgeJupiter() {
    const jupiterConversion = 11.86;
    const jupiterYears = this.yrsSinceEarth / jupiterConversion;
    return parseFloat(jupiterYears.toFixed(2));
  }
};

// Determining years until given age (current age to future)
export class YearsUntil {
	constructor(yrsDelta) {
		this.yrsUntil = yrsDelta;
	}
	getDeltaAge() {
		return this.yrsUntil;
	}
};

export class YearsUntilMerc {
  constructor(yrsDelta) {
    this.yrsUntil = yrsDelta;
  }
  getDeltaAge() {
    return this.yrsUntil;
  }
  getDeltaUntilMerc() {
    const mercConversion = 0.24;
    const yrsUntilMerc = this.yrsUntil / mercConversion;
    return parseFloat(yrsUntilMerc.toFixed(2));
  }
};

export class YearsUntilVenus {
  constructor(yrsDelta) {
    this.yrsUntil = yrsDelta;
  }
  getDeltaAge() {
    return this.yrsUntil;
  }
  getDeltaUntilVenus() {
    const venusConversion = 0.62;
    const yrsUntilVenus = this.yrsUntil / venusConversion;
    return parseFloat(yrsUntilVenus.toFixed(2));
  }
};

export class YearsUntilMars {
  constructor(yrsDelta) {
    this.yrsUntil = yrsDelta;
  }
  getDeltaAge() {
    return this.yrsUntil;
  }
  getDeltaUntilMars() {
    const marsConversion = 1.88;
    const yrsUntilMars = this.yrsUntil / marsConversion;
    return parseFloat(yrsUntilMars.toFixed(2));
  }
};