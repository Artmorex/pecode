//login contains all steps
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('.btn.btn-success').contains('Login').click()
})

//setters' commands and command click
Cypress.Commands.add('setUser', (username) => {
    cy.get('input[name="username"]').type(username)
})

Cypress.Commands.add('setPassword', (password) => {
    cy.get('input[name="password"]').type(password)
})

Cypress.Commands.add('clickLogin', (password) => {
    cy.get('.btn.btn-success').contains('Login').click()
})

//getters' command
Cypress.Commands.add('getErrorMessage', () => {
    return cy.get('span.help-block').invoke('text')
})

Cypress.Commands.add('getErrorMessageForUser', () => {
    return cy.get('span.help-block').contains("Please enter username.").invoke('text')
})

Cypress.Commands.add('getErrorMessageForPassword', () => {
    return cy.get('span.help-block').contains("Please enter your password.").invoke('text')
})