describe('valid login', () => {
  it('passes', () => {
    cy.visit('https://shooppar.vercel.app/')
    cy.get('#email').type('abiodun@sharklasers.com')
    cy.get('input[name="password"]').type('Test1234@'); // Example to type into the field
    cy.get('button[type="submit"]').click()
    cy.wait(10000)
    cy.contains('h1', 'Hello, Ogechi').should('be.visible');



  })
})