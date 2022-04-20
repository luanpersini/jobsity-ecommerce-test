/// <reference types="cypress" />

let id_contact = ''
let email = ''
let id_order = ''
let message = ''

describe('Contact Form', () => {
  
id_contact = '1'
email = 'any@mail.com'
id_order = '1234'
message = 'Any message'
  

  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=contact')
  })

const fillContactFormFields = () => {  
  cy.get('#id_contact').select(id_contact).should('have.value', id_contact);
  cy.get('#email').type(email).should('have.value', email);
  cy.get('#id_order').type(id_order).should('have.value', id_order);
  cy.get('#message').type(message).should('have.value', message);
}
const execSubmit = () => {  
  cy.get('#submitMessage').focus().type('{enter}');
  cy.wait(500)
}

    describe.only('Contact Form Validation', () => {
      ;['id_contact', 'email', 'id_order', 'message'].forEach((item) => {
        
        it('should not submit if (' + item + ') is empty', () => {
          fillContactFormFields();
          if(item === 'id_contact'){
            cy.get('#id_contact').select('0').should('have.value', 0);
          }else{
          cy.get('#' + item).clear().should('have.value', '');
        }
        
        execSubmit();
        cy.get('.alert-danger').should('be.visible').contains('error');
        })
      })

      it('should not submit if the given email is not a valid email', async () => {
        email = 'not a valid email'        
        
        fillContactFormFields();
        cy.get('#email').clear().type(email).should('have.value', email);
        cy.get('#message');
        
        execSubmit();
        cy.get('.alert-danger').should('be.visible').contains('error');
      })
    })    



})