// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addToCart', () => {  
    cy.get('.product-container').should('be.visible');
    cy.get('.button-container').invoke('show');
    cy.get('.ajax_add_to_cart_button').click({force: true});
    cy.wait(500)
    cy.get('.layer_cart_cart').should('be.visible');
    cy.get('.cross').should('be.visible').should("have.attr", "title", "Close window").click({force: true});
    cy.wait(500)
  })

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand();