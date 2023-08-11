import 'cypress-xpath'


Cypress.Commands.add('interactWithPopup', () => {
    cy.get('.nds-button-label').type('Click to show Popover');
    cy.get('.nds-typography nds-button nds-button--primary resetButton').click();
  });