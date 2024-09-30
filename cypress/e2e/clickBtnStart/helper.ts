// helpers/dynamicLoadingHelper.ts
/// <reference types="cypress" />

const visitPage = () => {
  cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
};

const clickBtnStart = () => {
  cy.get('#start button').click();
};

const checkLoadingVisible = () => {
  cy.get('#loading').should('be.visible');
};

const checkLoadingHidden = () => {
  cy.get('#loading', { timeout: 10000 }).should('not.be.visible');
};

const assertValidateText = () => {
  cy.get('#finish h4').should('contain', 'Hello World!');
};

export default {
  visitPage,
  clickBtnStart,
  assertValidateText,
  checkLoadingVisible,
  checkLoadingHidden,
};
