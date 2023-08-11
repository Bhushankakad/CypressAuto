describe('Pop up disapper after click', () => {
    it('disapper pop up', () => {
      cy.visit('https://60620d422ffdf100216415b2-ijjoyxbatk.chromatic.com/?path=/docs/components-popover--focus-management');
  
       cy.wait(5000)
       cy.get('.css-1yxcvy1').contains('Canvas')
       cy.wait(5000)
       cy.get('.css-1yxcvy1').dblclick()
       cy.wait(5000)
       cy.get('span').should('be.visible')
       
       //verify that pop up shoud appear in single click
        cy.get('.nds-button-label').click();
        cy.interactWithPopup();

        //verify that after click pop up should disapper
        cy.get('.nds-typography nds-popover rounded--all bgColor--white').click().should('not.be.visible')
       
    });
  });