/// <reference types="cypress" />


describe('Recomendação', () => {


    it('deve recomendar um foodtruck', () => {

        const user = {
            name: 'Lara',
            instagram: '@lara',
            password: 'test3qa'
        }

        const foodtruck = {
            name: 'Maria Paleta',
            description: 'O melhor Guacamole e Maria Paleta da região',
            opening_hours: 'das 14h ás 21h'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)
        
        cy.get('a' , '.create-foodtruck')
      
    })
})