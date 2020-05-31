describe('User can check their bmi', () => {
    it('User can enter weight ad height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('90')
        cy.get('#height').type('186')
        cy.get('#Calculate').click()
    })
})