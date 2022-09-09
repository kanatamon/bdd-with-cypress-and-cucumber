import {
  When,
  Then,
  Given,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

Given('An user opens the login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('An user enter the username {string}', (username: string) => {
  cy.get('#user-name').type(username);
});

And('An user enter the password {string}', (password: string) => {
  cy.get('#password').type(password);
});

And('An user clicks on the login button', () => {
  cy.get('#login-button').click();
});

Then('An user will be logged in', () => {
  cy.url().should('contain', 'inventory');
});

Then('An user will be receiving a failed message', () => {
  cy.get('[data-test="error"]').should('be.visible');
});
