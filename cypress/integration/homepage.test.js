/// <reference types="cypress" />

describe('Homepage', () => {

    it('should display the homepage pixel-perfect in Google Chrome', () => {  
      // Prepare the homepage to look like the picture
      // Add 4 Products to cart
      cy.visit('http://automationpractice.com/index.php?id_category=7&controller=category'); 
      cy.addToCart();      
      cy.addToCart();      
      cy.addToCart();      
      cy.addToCart();
      cy.get('.ajax_cart_quantity').contains('4');
      // Move slide to the right      
      cy.visit('http://automationpractice.com/').get('body').should('be.visible');
      cy.get('.bx-next').click({force: true})
      .then(() => {
        cy.compareSnapshot('Home', {
          capture: 'fullPage',
          errorThreshold: 0.0
        });        
      });     
    });
    
});


