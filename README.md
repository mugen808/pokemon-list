# The Pokemon List
This project intends to consume and display a list of pokemons using the Pokeapi API. Pokemons are being displayed following their IDs in two different view types: rows and grid. Each list displays a total of 10 pokemons, being 10 pages in total. Those pages are accessible from the page buttons on the bottom.
Each pokemon entry on the list is also accessible on click to be seen in detail. When clicking back, user is taken back to the same page as before and with the same view type.

Technical details:
- useContext was used for managing the page and display type states between components
- react-query was used for fetching and caching the data
- Routes were created for each pokemon details page
- End to End testing with Cypress
- Responsive requirements applied
## How to Use
Clone repository and npm i

### Option 1 - Production like environment
* npm run build
* npm run preview
* should be running on http://localhost:4173/

### Option 2 - Development environment
* npm run dev
* should be running on http://localhost:5173/

## How to Test
* npm run dev
* npm run cypress:open (while the above one is running)
* choose "E2E Testing" option when Cypress opens
* choose a browser and click "Start E2E testing"
* click on "PokemonList.cy.js" specs to start the test
* results will be displayed on the left