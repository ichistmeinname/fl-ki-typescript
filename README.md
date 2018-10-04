# kifl-ts

This is a toy project on top of the
[nahsh-hafas-package](https://www.npmjs.com/package/nahsh-hafas) in
order to learn typescript.
The main functionality is to check if the route between Kiel and
Flensburg (and vice versa) has any delays or other disturbances.
**Client for the
[Nahverkehrsverbund Schleswig-Holstein (NAH.SH)](http://www.nah.sh)
HAFAS API.** It acts as a consistent and straightforward interface on
top of a verbose API.


## Installing

```shell
npm install nahsh-hafas
npm run tsc
```

## API

Since the nahsh-hafas project is actually a thin wrapper around
[`hafas-client`](https://github.com/derhuerst/hafas-client#hafas-client),
you need to consult
[its docs](https://github.com/derhuerst/hafas-client/tree/master/docs)
as well as [the NAH.SH-specific customisations](https://github.com/derhuerst/hafas-client/blob/master/p/nahsh/readme.md)
to get information about the overall API that this project relies on.

## Getting Started

```javascript
const hafas = require('nahsh-hafas')
```
