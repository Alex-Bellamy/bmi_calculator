describe('User can check their bmi', () => {
    it('User can enter weight ad height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
    })
})