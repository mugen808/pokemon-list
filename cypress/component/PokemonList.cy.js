
describe('PokemonList.cy.ts', () => {
  it('Mounts List correctly', () => {
    cy.visit('http://localhost:5173/')
    cy.contais('Bulbasaur')
  })
})