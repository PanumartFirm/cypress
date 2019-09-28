describe('Cypress Getting Started',() => {
    it('Does not do much thing ',()=>{
        cy.visit('http://example.cypress.io')
        cy.contains('type').click()
        cy.url().should('include','commands/actions')
        cy.get('.action-email')
        .type('fake@gmail.com')
        .should('have.value','fake@gmail.com')

        cy.get('.action-div').dblclick().should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')

    })
})