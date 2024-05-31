class LoginPage {
    visit() {
        cy.visit('/qa-portal/greet.php')
    }

    getUser() {
        return cy.get('input[name="username"]')
    }

    getPassword() {
        return cy.get('input[name="password"]')
    }

    getHelpMessageBlock() {
        return cy.get('.help-block')
    }

    checkErrorMessageBlock(value) {
        return cy.get('span.help-block').should('have.text', `${value}`)
    }

    fillUser(value) {
        const field = cy.get('input[name="username"]')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value) {
        const field = cy.get('input[name="password"]')
        field.clear()
        field.type(value)
        return this
    }

    submit() {
        cy.get('.btn.btn-success').contains('Login').click()
    }
}

export default LoginPage;