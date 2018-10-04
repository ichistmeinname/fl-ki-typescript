import TableBuilder from 'table-builder'

import {Journey, SimpleJourney, simplifyJourney} from "./Interfaces";

'use strict'

const client = require('nahsh-hafas')

function kiToFl(date : Date, results : number) : Promise<SimpleJourney[]> {

    return client.journeys('8000103', '8000199', {results : results, when : date})
	.then((journeys : Journey[]) => {
	    return journeys.map(journey => simplifyJourney(journey));
	})
	.catch(console.error);
}

console.log(new Date());
var data = kiToFl(new Date(2018, 8, 7, 8, 30, 0, 0),2);
data.then((journeys : SimpleJourney[]) => {
    console.log(require('util').inspect(journeys, {depth: null}))
    // You can put key-value pairs if you strongly want keep headers order:
    var headers = { "origin" : "Start", "destination": "Ziel", "stations": "Stationen", "departure": "Abfahrt", "arrival": "Ankunft", "cancelOnRoute": "Ausfall" };
 
    var Table = require('table-builder');
    var html = (new Table({'class': 'some-table'}))
	.setHeaders(headers) // see above json headers section
	.setData(journeys) // see above json data section
	.render();
    console.log(html);
    this.htmlToAdd = html;
});
 
