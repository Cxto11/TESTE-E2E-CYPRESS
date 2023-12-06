/// <reference types="cypress" />

Cypress.Commands.add('loginTrue', (email, password) => { 
    cy.get('[formcontrolname="userName"]').type('couto')
    cy.get('[formcontrolname="password"]').type('12345678')
    cy.contains('button', 'login').click();
 })
