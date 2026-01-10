describe('Umbrella home test', function () {
  it('Home page can be opened', function () {
    cy.visit('http://localhost:5000');
    cy.contains('Welcome');
    cy.contains('Umbrella');
  });

  it('sign up page can be navigated to', function () {
    cy.visit('http://localhost:5000');
    cy.contains('Sign up').click();
    cy.contains('Password');
  });
});
