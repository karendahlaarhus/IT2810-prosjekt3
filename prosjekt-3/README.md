# Oppsett av prosjektet

# Recipe search - IT2810 Prosjekt 3

Recipebase er en nettapplikasjon som gir mulighet til å søke blant tusenvis av oppskrifter. For å finne oppskriften man vil ha kan man søke, sortere og filtrere. Oppskriftene presenteres navn i listeform, og kan trykkes på for å se ingredienser, fremgangsmåte og antall porsjoner. Her har også brukeren mulighet til å legge til en "rating" av oppskriften, og som oppdaterer dette i databasen.

Prosjektet bruker den populære MERN-stacken: MongoDB, Express, React og Node.
Brukergrensesnitt er basert på React med Typescript, og prosjektet er initialisert med create-react-app --typescript. 

Serversiden (backend) er

Applikasjonen støtter søk etter oppskrifts-navn, filtrering basert på type, samt alfabetisk sortering etter navn. 

Det er også implementert funksjonalitet for brukergenererte vurderinger av oppskriftene, dette blir gjort på en intuitiv måte ved å klikke på det antallet stjerner brukeren mener oppskriften fortjener. Vurderingen lagres deretter persistent i databasen, og blir presentert fra og med neste innlasting.

# Kjøre prosjektet

For å kunne kjøre prosjektet, må server og klient startes hver for seg. 

### Server
Prosjektet er implementert med `nodemon` som er et verktøy som gjør det enklere å utvikle node.js baserte applikasjoner  ved å automatisk restarte serveren ved eventuelle endringer i koden. For å kunne kjøre server-siden av prosjektet må man altså gjøre følgende: 
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

- `store/actions/actions.ts` ligger det funksjoner for de ulike handlingene en applikasjonen støtter, altså *hva* som endrer seg. 
- `store/reducer/index.ts` kombinerer reducers
- `store/reducer/searchReducer.ts` spesifieres *hvordan* applikasjonens state endrer seg i henhold til spesifisere handlinger (actions).
- `store/store.ts` holder kontroll på nåværende state, og gjør at man kan oppdatere state eller hente state fra andre steder i applikasjonen. 


## Material UI

# Backend
## Endepunkt
## MongoDB
## Nodemon

# Testing
## Enhetstesting
### Hvordan kjøre testene
## Automatisert end-to-end testing
### Hvordan kjøre testene

# Dokumentasjon
