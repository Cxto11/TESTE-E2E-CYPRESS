describe('Pagina de Cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário!', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[formcontrolname="email"]').type('renan.couto@email.com.br')
    cy.get('[formcontrolname="fullName"]').type('renan couto')
    cy.get('[formcontrolname="userName"]').type('couto')
    cy.get('[formcontrolname="password"]').type('12345678')
    cy.contains('button', 'Register').click();
  })
})