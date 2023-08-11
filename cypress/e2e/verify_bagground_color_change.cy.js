// cypress/integration/backgroundColorChange.spec.js

describe('Background Color Change Test', () => {
    it('should change background color on hover', () => {
      // Visit the page where the hover interaction exists
      cy.visit('https://60620d422ffdf100216415b2-ijjoyxbatk.chromatic.com/?path=/story/components-popover--focus-management');
  
      // Identify the element to hover over
      cy.get('.nds-typography nds-button nds-button--primary resetButton')
        .trigger('mouseover')
        .should('have.css', 'background-color', 'rgb(26, 66, 40)'); // Change this to the expected color
  
    });
  });
  