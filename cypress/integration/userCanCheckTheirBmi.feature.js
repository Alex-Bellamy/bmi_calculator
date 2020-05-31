describe('User can check their bmi', () => {
    it('User can enter weight ad height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('90')
        cy.get('#height').type('186')
        cy.get('#Calculate').click()
    })

    it ('displays a BMI value of 26.01', () => {
        cy.get('#results').should('contain', '26.01')
    })

})