describe('PokemonList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
    cy.wait(1000)
  })

  it('Main component is painted', () => {
    cy.contains('POKEMON')
  })
  it('Pokemon List mounts correctly', () => {
    cy.get('.pokemon-name').should('have.length', 10);
  })
  it('Click on the list opens pokemon details', () => {
    cy.get('.pokemon-name').contains('bulbasaur').click()
    cy.wait(1000)
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/pokemon/1')
    })
  })

  it('User comes back to same page if back from details', () => {
    cy.get('.pagination-button').contains(3).click()
    cy.wait(1000)
    cy.contains('vulpix').click()
    cy.wait(1000)
    cy.contains('Back').click()
    cy.wait(1000)
    cy.contains('vulpix')
  })
})

describe('PokemonDetails', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/pokemon/1')
    cy.wait(1000)
  })

  it('Component is painted', () => {
    cy.contains('bulbasaur')
  })
  it('Back button takes user back', () => {
    cy.contains('Back').click()
    cy.wait(1000)
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })
  }) 
})