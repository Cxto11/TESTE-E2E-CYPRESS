describe('Pagina de Login', () => {
    it('verificar mensagem de campo obrigatório!', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })