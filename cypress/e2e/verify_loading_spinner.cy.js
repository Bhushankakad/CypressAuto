describe('Spinner Interaction', () => {
  it('waits for spinner to disappear', () => {
    cy.visit('https://60620d422ffdf100216415b2-ijjoyxbatk.chromatic.com/?path=/docs/components-popover--focus-management')

    // Perform your actions that trigger the spinner

    // Wait for the spinner to disappear
    cy.get('.spinner-selector', { timeout: 50000 }).should('not.exist')

    // Continue with your assertions or further actions
  });
});