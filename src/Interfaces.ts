interface Location {
    type: string;
    latitude: number;
    longitude: number;
}

interface ProductBools {
    suburban: boolean;
    subway: boolean;
    tram: boolean;
    bus: boolean;
    ferry: boolean;
    express?: boolean;
    nationalExp: boolean;
    national: boolean;
    interregional: boolean;
    regional: boolean;
    onCall?: boolean;
}

interface Station {
    type: string;
    id: number;
    name: string;
    location: Location;
    products: ProductBools;
}

interface StationOnRoute {
    station: Station;
    arrival: Date;
    departure: Date;
    cancelled: boolean;
}

interface Operator {
    id: string;
    name: string;
}
interface Line {
    id: number;
    name: string;
    public: boolean;
    mode: string;
    product: string;
    productCode: number;
    operator: Operator
    nr?: number;
    class?: number;
    symbol?: string;
    metro?: boolean;
    express?: boolean;
    night?: boolean;
}

interface Cycle {
    max: number;
    min: number;
}

export interface Leg {
    id: string
    origin: Station;
    departure : Date;
    departurePlatform: number;
    destination : Station;
    arrival : Date;
    arrivalPlatform : number;
    arrivalDelay? : number;
    line: Line;
    direction : string;
    passed? : StationOnRoute[];
    cycle?: Cycle;
}


export interface Journey {
    type: string
    legs: Leg[];
    origin: Station;
    departure: Date;
    destination: Station;
    arrival: Date;
    arrivalDelay?: number;
}

export interface SimpleJourney {
    origin: SimpleStation,
    destination: SimpleStation,
    stations: SimpleStation[],
    delay?: number,
    departure: Date,
    arrival: Date,
    cancelOnRoute: boolean
}

type SimpleStation = string;

export function simplifyJourney(j : Journey) : SimpleJourney {
    //let passedStations : Partial<StationOnRoute>[] = [].concat(j.legs.map(leg => leg.passed));
    let journey : SimpleJourney = {
	origin: simplifyStation(j.origin),
	destination: simplifyStation(j.destination),
	stations: j.legs.map(leg => simplifyLeg(leg)),
	departure: j.departure,
	arrival: j.arrival,
	cancelOnRoute: false //passedStations && passedStations.some(station => station.cancelled)
    }
    if (j.arrivalDelay) { journey.delay = j.arrivalDelay };
    return journey;
}

export function simplifyStation(s : Station) : SimpleStation {
    return s.name;
}

export function simplifyLeg (l : Leg) : SimpleStation {
    return l.origin.name;
}


export function isRegionalTransport(s : Station) : boolean {
    return s.products.regional;
}
