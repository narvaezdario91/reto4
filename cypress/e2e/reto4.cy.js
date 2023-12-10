/// <reference types='Cypress' />

describe('Reto 4', () => {
  it('Registro Reclamo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('li').contains('Claim').click();
    cy.get('li').contains('Submit Claim').click();
    cy.get('label ').contains('Event').parent().siblings("div").click();
    cy.get('div').contains('Accommodation').click();
    cy.get('label ').contains('Currency').parent().siblings("div").click();
    cy.get('div').contains('Colombian Peso').click();
    cy.get('label ').contains('Remarks').parent().siblings("div").children("textarea").type("Prueba Automatizacion");
    cy.get('button[type="submit"]').contains("Create").click()
    cy.get('div').contains("Success").should('be.visible');
    cy.screenshot();
    cy.get('li').contains("My Claims").click();
    cy.get('div .oxd-table-row').contains("Prueba Automatizacion");
    cy.screenshot();

  })
})