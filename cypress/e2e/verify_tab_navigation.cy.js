describe('Keyboard Navigation Test', () => {
    it('should navigate through the popover using keyboard', () => {
      cy.visit('https://60620d422ffdf100216415b2-ijjoyxbatk.chromatic.com/?path=/story/components-popover--focus-management');
        
      cy.wait(1000)
       cy.get('.css-14n52cj').contains('Canvas')
       cy.wait(5000)
       cy.get('.css-14n52cj').dblclick()
       cy.wait(8000)

       // Assuming you want to navigate through the popover items using the Tab key
       //cy.get('nds-row').get('nds-row-item').dblclick()

        cy.get('.nds-button-label').click(); 
        cy.interactWithPopup();
  
      
    });
  });
  