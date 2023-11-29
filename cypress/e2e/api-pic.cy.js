describe('Testando API', () => {
    beforeEach(() => {cy.visit('')})
    it('Dados da API', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/user/login',
            body: Cypress.env()
      }).then((res) => {
        expect(res.status).to.br.equal(200),
        expect(res.body).is.not.empty
        expect(res.body)
     })
    })
  })