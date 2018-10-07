import "bootstrap";
import "bootstrap-datepicker";
import TableBuilder from 'table-builder'
import * as client from "nahsh-hafas";
import {Journey, SimpleJourney, simplifyJourney} from "./Interfaces.ts";

const headers = {
    "origin": "Start",
    "destination": "Ziel",
    "stations": "Stationen",
    "departure": "Abfahrt",
    "arrival": "Ankunft",
    "cancelOnRoute": "Ausfall"
};

const kiToFl = (date: Date, resultCount: number): Promise<SimpleJourney[]> =>
    client.journeys('8000103', '8000199', {results: resultCount, when: date})
        .then((journeys: Journey[]) => journeys.map(journey => simplifyJourney(journey)))
        .catch(console.error);

const render = (journeys: SimpleJourney[]) =>
    (new TableBuilder({'class': 'some-table'}))
        .setHeaders(headers)
        .setData(journeys)
        .render();

const date = new Date(2018, 8, 7, 8, 30, 0, 0);
const resultCount = 2;

kiToFl(date, resultCount)
    .then((journeys: SimpleJourney[]) => {
        console.log(require('util').inspect(journeys, {depth: null}));

        document.querySelector(".content").innerHTML = render(journeys);
    });
