/// <reference types="cypress" />

import sigupPage from '../support/pages/Signup'

describe('Signup', () => {

    it('deve cadastrar um novo usuário', () => {

        const user = {
            name: 'Milena baggio',
            instagram: '@mibaggio',
            password: 'test3qa'
        }

        //  cy.deleteMany({ instagram: user.instagram}, {collection: 'users'}).then(res => {
        //      cy.log(res)
        // });

        cy.apiResetUser(user.instagram)

        sigupPage.go()
        sigupPage.form(user)
        sigupPage.submit()
        sigupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')

    })


    it('não deve cadastrar usuário duplicado', () => {

        const user = {
            name: 'Caio Martins',
            instagram: '@martins',
            password: 'test3qa'
        }        

        cy.apiCreateUser(user)

        sigupPage.go()
        sigupPage.form(user)
        sigupPage.submit()
        sigupPage.modal.haveText('Instagram já cadastrado!')

    })

})


