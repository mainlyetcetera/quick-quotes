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
      .fixture('../fixtures/wisdom-quote.json')
      .then(data => {
        cy.intercept('GET', 'https://api.quotable.io/random?tags=wisdom', {
          statusCode: 200,
          body: data
        })
      })

    cy
      .fixture('../fixtures/biz-quote.json')
      .then(data => {
        cy.intercept('GET', 'https://api.quotable.io/random?tags=business', {
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

  it('should have drop-down to select categories', () => { 
    cy
      .get('select')
      .select('Business').invoke('val')

    cy
      .get('select')
      .should('have.value', 'business')

    cy
      .get('select')
      .select('Wisdom').invoke('val')

    cy
      .get('select')
      .should('have.value', 'wisdom')
  })

  it.only('should be able to search for a quote by category', () => {
    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Wisdom').invoke('val')

      .get('select')
      .should('have.value', 'wisdom')

      .get('button')
      .click()

      .get('h3')
      .should('not.contain', 'Something clever will go here soon...')
      .contains('Silence is the sleep that nourishes wisdom.')
  })

  it('should be able to search for quotes in two categories', () => {
  })

  it('should see an error message when the quotes don\'t load', () => {
  })
})
