describe('the main view', () => {
  beforeEach(() => {
    cy
      .fixture('../fixtures/categories.json')
      .then(data => {
        cy.intercept('GET', 'https://api.quotable.io/tags', {
          statusCode: 200,
          body: data
        })
      })

    cy
      .fixture('../fixtures/quote.json')
      .then(data => {
        cy.intercept('GET', 'https://api.quotable.io/random?tags=wisdom', {
          statusCode: 200,
          body: data
        })
      })

    // we should have interecepts for each category?
    // may shorten to two categories
    
    cy
      .visit('http://localhost:3000')
  })

  it('should render a header with a greeting', () => {
    cy
      .get('header')
      .find('h1')
      .contains('QuickQuotes')

      .get('header')
      .find('h2')
      .contains('Welcome!')
  })

  it('should be able to search for quotes by category', () => {
  })

  it('should see an error message when the quotes don\'t load', () => {
  })
})
