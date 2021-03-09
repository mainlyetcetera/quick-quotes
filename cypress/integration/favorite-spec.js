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
    
    cy
      .visit('http://localhost:3000')
  })

  it('should be able to favorite from the main view', () => {
    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Wisdom').invoke('val')

      .get('select')
      .should('have.value', 'wisdom')

      .get('form > button')
      .click()

      .get('h3')
      .should('not.contain', 'Something clever will go here soon...')
      .contains('Silence is the sleep that nourishes wisdom.')

      .get('section > button')
      .click()

      .get('header')
      .children('a:first')
      .click()

      .get('section')
      .children('article:first')
      .contains('Quote: Silence is the sleep that nourishes wisdom.')

      .get('section > button')
      .contains('Remove from Favorites')
  })

  it('should be able to favorite from the details view', () => {
    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Wisdom').invoke('val')

      .get('select')
      .should('have.value', 'wisdom')

      .get('form > button')
      .click()

      .get('h3')
      .should('not.contain', 'Something clever will go here soon...')
      .contains('Silence is the sleep that nourishes wisdom.')

      .get('section > a')
      .click()

      .get('section > button')
      .click()

      .get('header')
      .children('a:first')
      .click()

      .get('section')
      .children('article:first')
      .contains('Quote: Silence is the sleep that nourishes wisdom.')

      .get('section > button')
      .contains('Remove from Favorites')
  })

  it.only('should be able to delete a favorite', () => {
    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Wisdom').invoke('val')

      .get('select')
      .should('have.value', 'wisdom')

      .get('form > button')
      .click()

      .get('h3')
      .should('not.contain', 'Something clever will go here soon...')
      .contains('Silence is the sleep that nourishes wisdom.')

      .get('section > a')
      .click()

      .get('section > button')
      .click()

      .get('header')
      .children('a:first')
      .click()

      .get('section')
      .children('article:first')
      .contains('Quote: Silence is the sleep that nourishes wisdom.')

      .get('section > button')
      .contains('Remove from Favorites')
      .click()

    .get('section > article')
    .should('not.exist')
  })
})
