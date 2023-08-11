describe('Popover Automation Test', () => {
    it('Clicks the "Click to show Popover" button', () => {
      cy.visit('https://60620d422ffdf100216415b2-ijjoyxbatk.chromatic.com/?path=/docs/components-popover--focus-management');
  
       cy.wait(5000)
       cy.get('.css-1yxcvy1').contains('Canvas')
       cy.wait(5000)
       cy.get('.css-1yxcvy1').dblclick()
       cy.wait(5000)
       cy.get('span').should('be.visible')
       
      // Click the button to show the popover
      //cy.contains('Click to show Popover')
      
      // Wait for the popover to appear
      
    });
  });