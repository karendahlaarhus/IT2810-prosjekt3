# Oppsett av prosjektet

# Recipe search - IT2810 Prosjekt 3

## Funksjonalitet

Recipebase er en nettapplikasjon som gir mulighet til å søke blant hundrevis av oppskrifter. For å finne oppskriften man vil ha kan man søke, sortere og filtrere. Oppskriftene presenteres med navn i listeform, og kan trykkes på for å se ingredienser, fremgangsmåte og antall porsjoner. Her har også brukeren mulighet til å legge til en "rating" av oppskriften.

Prosjektet bruker den populære MERN-stacken: MongoDB, Express(.js), React(.js) og Node(.js).
Brukergrensesnitt er basert på React med Typescript, og prosjektet er initialisert med `create-react-app --typescript`.

Serversiden (backend) er

Applikasjonen støtter søk etter oppskrifts-navn, filtrering basert på type, samt alfabetisk sortering etter navn.

Det er også implementert funksjonalitet for brukergenerert rating av oppskriftene, dette blir gjort på en intuitiv måte ved å klikke på det antallet stjerner brukeren mener oppskriften fortjener. Vurderingen lagres deretter persistent i databasen og hentes opp igjen. Den ratingen som vises er siste rating som er lagt inn av en bruker. Dersom en oppskrift ikke har noen rating betyr det at ingen har ratet oppskriften enda.

# Kjøre prosjektet

For å kunne kjøre prosjektet og hente data må man være koblet til NTNU-nett, enten gjennom eduroam eller VPN.

Server og klient startes hver for seg.

### Server

Prosjektet er implementert med `nodemon` som er et verktøy som gjør det enklere å utvikle node.js baserte applikasjoner ved å automatisk restarte serveren ved eventuelle endringer i koden. For å kunne kjøre server-siden av prosjektet må man altså gjøre følgende:
`npm install -g nodemon` vil installere nodemon
`npm install ts-node` er nødvendig for å kunne bruke nodemon

Fra filen `server/server.ts` skriv `nodemon server` i kommandolinjen, og serveren vil kjøre på port 4000.

### Klient

Nå serveren kjører kan man starte klientsiden ved å skrive `npm start`

# Frontend

Brukergrensesnittet vårt er basert på React, Typescript og Redux. React og Typescript er valgt på bakgrunn av kravspesifikasjonene, mens Redux ble valgt da ingen av gruppemedlemmene hadde erfaring med noen form for state management, og undersøkelser på internett ga oss inntrykk av at det var lettere å komme i gang med.

## React

## Redux

For state management i prosjektet har vi valgt å implementere prosjektet med Redux. Siden applikasjonen skal støtte ulike former for brukerintegrasjon, samt at vi har valgt å dele applikasjonen inn i mange ulike komponenter, så vi det hensiktsmessig å benytte oss av en state manager. Ved bruk av Redux er det enkelt å håndtere forandringer av tilstand når brukeren interagerer med applikasjonen, og sende dette rundt i applikasjonen til de komponentene som har bruk for informasjonen til enhver tid.

I `src/components/store/types/types.ts` kan man se de ulike handlingene som kan utføres. Dette er henholdvis handlinger tilknyttet søk, filtrering og sortering av datasettet. Ved hjelp av Redux kan vi enkelt sende nåværende tilstand rundt i applikasjonen, og igjen hente dette ut på serversiden.

Redux-komponentene ligger alle plassert i mappen `store`.

- `src/store/actions/actions.ts` ligger det funksjoner for de ulike handlingene en applikasjonen støtter, altså _hva_ som endrer seg.
- `src/store/reducer/index.ts` kombinerer reducers
- `src/store/reducer/searchReducer.ts` spesifieres _hvordan_ applikasjonens state endrer seg i henhold til spesifisere handlinger (actions).
- `src/store/store.ts` holder kontroll på nåværende state, og gjør at man kan oppdatere state eller hente state fra andre steder i applikasjonen.

## Material UI

Vi har benyttet Material UI rammeverket til design av nettsiden. Dette har vi brukt for å effektivt kunne sette opp et design og spare tid på denne delen av utviklingen. Dessuten kommer Material UI rammeverket med stilrene komponenter. Vi har brukt material UI for søkefelt, ulike knapper, pop-up bokser og rating.

# Backend

## Endepunkt

## Express

## MongoDB

For database benyttet vi oss av MongoDB som er en del av MERN stacken. MongoDB strukturerer og lagrer data i json-format. Dataen i databasen vår har vi hentet fra et api på json-format, det kan finnes her: https://github.com/tabatkins/recipe-db/blob/master/db-recipes.json

MongoDB installerte vi på den virutelle maskinen. Etter vi hadde gjort dette brukte vi MongoDB compass på lokal maskin for å sjekke data, legge inn nye data osv.

## Nodemon

# Testing

Vi har benyttet ulike metoder for testing, blant annet enhetstesing og ende-til-ende testing.

I tillegg har vi brukt cross-browser testing for å sikre at nettsiden har lik funksjonalitet på tvers av nettlesere. Vi har da testet i Google Chrome og Safari. I Google Chrome har vi også sjekket sidens funksjonalitet på ulike mobile enheter.

Det vi fant ut var at all ønsket funksjonalitet (beskrevet tidligere) fungerte likt i de ulike nettleserne og enhetene, i tillegg til at siden er responsiv.

## Hvordan kjøre testene

## Enhetstesting

Enhetstesting brukes for å teste individuelle komponenter i software. Enhetstester skrives for å sikre at koden virker som den skal. Dette hjelper med å detektere og beskytte mot bugs i fremtiden.

For enhetstesning har vi brukt [Jest](https://jestjs.io/).

## Automatisert end-to-end testing

End-to-end testing brukes for å teste hvorvidt flyten til en applikasjon fra start til slutt oppfører seg som den skal. At riktig data blir sendt fra databasen, gjennom apiet og hele veien til det brukeren ser.

Vi har benyttet [cypress](https://www.cypress.io/) for å lage automatiserte end-to-end testing.

### Hvordan kjøre testene

# Dokumentasjon
