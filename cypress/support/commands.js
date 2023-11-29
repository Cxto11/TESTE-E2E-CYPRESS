/// <reference types="cypress" />

Cypress.Commands.add('loginTrue', (email, password) => { 
    cy.get('[formcontrolname="userName"]').type('email')
    cy.get('[formcontrolname="password"]').type('pass')
    cy.contains('button', 'login').click();
 })
