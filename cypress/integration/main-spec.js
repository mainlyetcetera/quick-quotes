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

    cy
      .visit('http://localhost:3000')
  })

  it('should render a header with a greeting', () => {
    expect(true).to.eql(true)
  })

  it('should be able to search for quotes by category', () => {
  })

  it('should see an error message when the quotes don\'t load', () => {
  })
})
