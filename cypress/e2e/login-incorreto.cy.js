describe('Pagina de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400
    }).as('stubPost')
})
    it('verificar mensagem de campo obrigatório!', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })

    it('REQUISIÇÃO 400', () => {
      cy.loginTrue('couto', '12345678')
      cy.wait('@stubPost')
    })

  })