describe('Pagina de Login', () => {
  beforeEach(() => {cy.visit('http://localhost:4200/#/home')})
    it('verificar mensagem de campo obrigatório!', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })