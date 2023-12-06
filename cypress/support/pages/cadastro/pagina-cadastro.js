const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
    }

    prencherFormulario(){
        cy.get('[data-test="email"]').type('renan.couto@email.com.br');
        cy.get('[data-test="fullName"]').type('renan couto');
        cy.get('[data-test="registerUserName"]').type('couto');
        cy.get('[data-test="registerPassword"]').type('12345678');
    }
    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }

    //cadastro incorreto

    acessarPaginaDeCadastroIncorreto(){
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
        cy.get('[data-test="btnRegister"]').click();
        cy.get('[data-test="btnRegister"]').click();
        
    }

    verificaCamposIncorreto(){
        cy.contains('Email is required!').should('be.visible');
        cy.contains('Full name is required!').should('be.visible');
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    }
    
}

export default new Cadastro();