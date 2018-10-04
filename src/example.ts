'use strict'

const client = require('nahsh-hafas')

client.journeys('8000103', '8000199', {results: 2, when: new Date(2018, 8, 1, 8, 30, 0, 0)})
// client.departures('8000199', {duration: 10})
//client.journeyLeg('1|52176|1|100|1092018', 'RE72')
// client.locations('Schleswig', {results: 1})
// client.location('706990') // Kiel Holunderbusch
// client.nearby({type: 'location', latitude: 54.295691, longitude: 10.116424}, {distance: 60})


    .then((dataArr) => {
	console.log(require('util').inspect(dataArr, {depth: null}))
})
    .catch(console.error)
