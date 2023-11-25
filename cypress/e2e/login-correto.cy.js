describe('Pagina de Login', () => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário!', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.get('[formcontrolname="userName"]').type('couto')
      cy.get('[formcontrolname="password"]').type('12345678')
      cy.contains('button', 'login').click();
  })
})