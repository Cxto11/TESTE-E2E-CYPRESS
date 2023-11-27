describe('Pagina de Cadastro', () => {
  beforeEach(() => {cy.visit('http://localhost:4200/#/home')})
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário!', () => {
    cy.contains('a', 'Register now').click();
    cy.get('[formcontrolname="email"]').type('renan.couto@email.com.br')
    cy.get('[formcontrolname="fullName"]').type('renan couto')
    cy.get('[formcontrolname="userName"]').type('couto')
    cy.get('[formcontrolname="password"]').type('12345678')
    cy.contains('button', 'Register').click();
  })
})