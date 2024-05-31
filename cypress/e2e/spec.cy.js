import LoginPage from './pages/LoginPage'

describe('Test suite: Pecode Login', () => {
  
  //Check that env variables exist with assertions
  before(()=>{
    assert.typeOf(Cypress.env("username"), 'string')
    assert.typeOf(Cypress.env("password"), 'string')
    assert.typeOf(Cypress.env("endpoint"), 'string')
    assert.equal(Cypress.env("endpoint"), Cypress.config().baseUrl)
  })

  //4. Use an assertion library and verify that all the elements are present on the page.
  it("Check that DOM elements presented", ()=>{
    cy.visit('/qa-portal/greet.php')
    cy.get('center').should('exist')
    cy.get('.form-group').should('exist')
    cy.get('input[name="username"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('.btn.btn-success').contains('Login').should('exist')
  })

  //Negative Login Scenario (Should Fail)
  it("Should fail: Pecode Login Page Test with commands", () => {
    cy.visit('/qa-portal/greet.php')
    cy.login('username', 'password')
    cy.screenshot("Login_fail")
    cy.getErrorMessage().should('eq', 'Successful login')
  })

  //Two Negative Scenarios (Should Pass): Page-Object pattern and with support actions
  it("Pecode Login Page. Test with Page-Object pattern", () => {
    const login = new LoginPage(); //7. Use a page-object pattern
    login.visit(); //Same as cy.visit(`${Cypress.env("endpoint")}/qa-portal/greet.php`)
    login.fillUser(Cypress.env('username'))
    login.fillPassword(Cypress.env('password'))
    login.submit()
    login.checkErrorMessageBlock('No account found with that username.')
  })

  it("Pecode Login Page. Test with commands: no username", () => {
    cy.visit('/qa-portal/greet.php') //7. Use support actions
    cy.setPassword('password') //verify we got "Please enter username." message
    cy.clickLogin()
    cy.getErrorMessageForUser().should('eq', 'Please enter username.')
  })

  it("Pecode Login Page. Test with commands: no password", () => {
    cy.visit('/qa-portal/greet.php') //7. Use support actions
    cy.setUser('username') //verify we got "Please enter password." message
    cy.clickLogin()
    cy.getErrorMessageForPassword().should('eq', 'Please enter your password.')
  })
});

