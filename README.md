# Typescript labb 1

## Starta projektet

- Packa upp zip-filen
- Ställ dig i frontend-mappen och kör npm install
- Ställ dig i backend-mappen och kör npm install

- Skapa en postgres-databas, tabeller och startdata finns i db.sql-filen i backend-mappen
- Skapa en .env-fil i backend-mappen och lägg in:
  PGURI=postgres://ANVÄNDARNAMN:LÖSENORD@localhost/DATABASNAMN
  där du ersätter användarnamn, lösenord och databasnamn med det du använde när du skapade databasen.

- Kör npm run dev i terminalen i backend-mappen
- Kör npm run dev i terminalen i frontend-mappen

## Mål

GET/SELECT görs för att hämta alla djuren från databasen. I index.ts i backend-mappen och i komponenten Animals i mappen Components i frontend-mappen.

Props används för att skicka types(djurtyper) från kompnenten Animals till componenten AddAnimals. Tillhörande interface importeras från shared-mappen som ligger i rot-mappen.

Min useState med tillhörande generics finns i komponenten Animals, rad 7, där useStaten animals har en generic som är typad till en array av Animal-object(som är ett interface importerat från shared-mappen).

Det går att ändra applikationens frontend via POST/INSERT, användaren kan lägga till ett djur som syns på webbsidan. Fetch-anrop görs i komponenten AddAnimal och Sql-fråga finns i index.ts i backend-mappen.

Koden är enhetligt formatterad.

Interface som beskriver JSON-strukturen som frontend-delen hämtar från backend-delen finns i mappen shared i rot-mappen. Där finns interface Animal och Type.

Det ska inte finnas några any i min kod.
