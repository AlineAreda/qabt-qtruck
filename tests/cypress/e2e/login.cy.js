/// <reference types="cypress" />

import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Login', () => {

  it('deve logar com sucesso', () => {
    const user = {
      name: 'Aline',
      instagram: '@alineareda',
      password: 'test3qa'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name) 

  })

  it('não deve logar com senha incorreta', () => {
    const user = {
      instagram: '@alineareda',
      password: 'test123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  })

  it('não deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@areda',
      password: 'test123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () => {
    const user = { password: 'test3qa' }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')

  })

  it('senha deve ser obrigatório', () => {
    const user = {
      instagram: '@alineareda'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')

  })

  it('todos os campos devem ser obrigatórios', () => {
    loginPage.go()
    loginPage.submit()
    
    loginPage.modal.haveText('Por favor, informe suas credenciais!')

  })
})



  