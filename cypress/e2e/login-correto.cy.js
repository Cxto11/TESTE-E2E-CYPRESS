describe('Pagina de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
})

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário!', () => {
      cy.loginTrue('couto','12345678')
  })
})