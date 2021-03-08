describe('the details view', () => {
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
      .visit('http://localhost:3000')

    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Wisdom').invoke('val')

      .get('button')
      .click()

      .get('section > a')
      .click()
  })

  it('should still have a header', () => {
    cy
      .get('header')
      .find('h1')
      .contains('QuickQuotes')

      .get('header')
      .find('h2')
      .contains('Welcome!')
  })

  it('should show the details of the quote', () => {
    cy
      .get('section')
      .children('article:first')
      .contains('Silence is the sleep that nourishes wisdom.')

      .get('section')
      .children('article:nth-child(2)')
      .contains('Francis Bacon')

      .get('section')
      .children('article:nth-child(3)')
      .contains('wisdom')

      .get('section a')
      .contains('Return')
  })

  it('should be able to return to the main view', () => {
    cy
      .get('section')
      .children('article:nth-child(2)')
      .contains('Francis Bacon')

      .get('section a')
      .contains('Return')
      .click()

      .get('h3')
      .should('not.contain', 'Something clever will go here soon...')
      .contains('Silence is the sleep that nourishes wisdom.')
  })
})
