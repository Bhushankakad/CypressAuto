describe('Popup Dimensions Test', () => {
    it('should have correct dimensions', () => {
      cy.visit('https://60620d422ffdf100216415b2-ijjoyxbatk.chromatic.com/?path=/story/components-popover--focus-management'); // Replace with your actual URL
  
      // Trigger the action to open the popup (click a button, link, etc.)
      cy.get('.nds-button-label').click(); 
  
      // Wait for the popup to appear
      cy.get('.nds-typography nds-popover rounded--all bgColor--white').should('be.visible'); // Replace with your popup selector
  
      // Get the dimensions of the popup
      cy.get('.nds-typography nds-popover rounded--all bgColor--white').should('have.css', 'width', '300px'); 
      cy.get('.nds-typography nds-popover rounded--all bgColor--white').should('have.css', 'height', '200px'); 
    });
  });
  