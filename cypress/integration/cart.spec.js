/// <reference types="cypress" />

let id_contact = ''
let email = ''
let id_order = ''
let message = ''

describe('Cart Actions', () => {
  
  id_contact = '1'
  email = 'any@mail.com'
  id_order = '1234'
  message = 'Any message'
  

  beforeEach(() => {
    
  })

  const fillContactFormFields = () => {  
    cy.get('#id_contact').select(id_contact).should('have.value', id_contact);
    cy.get('#email').type(email).should('have.value', email);
    cy.get('#id_order').type(id_order).should('have.value', id_order);
    cy.get('#message').type(message).should('have.value', message);
  }
  const checkBlouseIsOnCart = () => {
    cy.get('.shopping_cart').contains('1 Product')
    cy.get('.cart_block').invoke('show').contains('Blouse');
  }
  const removeFromHeaderCart = () => {   
    cy.get('.cart_block').invoke('show')
    cy.get('.ajax_cart_block_remove_link').click({force: true})
    cy.get('.ajax_cart_no_product').should('be.visible').contains('empty');
  }

  it('should add an product to cart from the search result page', async () => {
    cy.visit('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=blouse');
    cy.addToCart();
    checkBlouseIsOnCart();       
  })
  
  it('should add an product to cart from the category page', async () => {
    cy.visit('http://automationpractice.com/index.php?id_category=7&controller=category');
    cy.addToCart();
    checkBlouseIsOnCart();       
  })

  it('should remove a product from the header cart', async () => {
    cy.visit('http://automationpractice.com/index.php?id_category=7&controller=category');
    cy.addToCart();
    checkBlouseIsOnCart();     
    removeFromHeaderCart();  
  })
  
  it('should access the checkout form when clicking in the "checkout" button on the header cart', async () => {
    cy.visit('http://automationpractice.com/index.php?id_category=7&controller=category');
    cy.addToCart();
    checkBlouseIsOnCart(); 
    cy.get('.cart_block').invoke('show').contains('Blouse');
    cy.get('#button_order_cart').should('be.visible').click();
    cy.get('#cart_title').should('be.visible')        
  })

})    



