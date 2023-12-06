describe('Página de cadastro', () => {
    beforeEach(() => {cy.visit('http://localhost:4200/#/home')})
    const usuarios = require('../fixtures/usuarios.json')
    usuarios.forEach(usuario => {
        it('cadastrar um novo usuário', () => {
            cy.get('[data-test="register"]').click();
            cy.get('input[data-test="email"]').type(usuario.email);
            cy.get('input[data-test="fullName"]').type(usuario.fullName);
            cy.get('input[data-test="registerUserName"]').type(usuario.userName);
            cy.get('input[data-test="registerPassword"]').type(usuario.password);
            cy.get('[data-test="btnRegister"]').click();
        })
    })

})