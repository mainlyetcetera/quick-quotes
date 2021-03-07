describe('quote errors', () => {
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
          statusCode: 404
        })
      })

    cy
      .fixture('../fixtures/biz-quote.json')
      .then(data => {
        cy.intercept('GET', 'https://api.quotable.io/random?tags=business', {
          statusCode: 501
        })
      })
    
    cy
      .visit('http://localhost:3000')
  })

  it('should render a 404 error', () => {
    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Wisdom').invoke('val')

      .get('select')
      .should('have.value', 'wisdom')

      .get('button')
      .click()

      .get('section')
      .children('article:first')
      .contains('Sorry!')

      .get('section')
      .children('article:nth-child(2)')
      .contains('Something went wrong!')

      .get('section')
      .children('article:nth-child(3)')
      .contains('404')

      .get('section')
      .children('article:nth-child(4)')
      .contains('Not Found')
  })

  it('should render a 501 error', () => {
    cy
      .get('h3')
      .contains('Something clever will go here soon...')

      .get('select')
      .select('Business').invoke('val')

      .get('select')
      .should('have.value', 'business')

      .get('button')
      .click()

      .get('section')
      .children('article:first')
      .contains('Sorry!')

      .get('section')
      .children('article:nth-child(2)')
      .contains('Something went wrong!')

      .get('section')
      .children('article:nth-child(3)')
      .contains('501')

      .get('section')
      .children('article:nth-child(4)')
      .contains('Not Implemented')
  })
})
