// describe('Testando API', () => {
//   it('Dados da API', () => {
//     cy.request({
//       method: 'POST',
//       url: 'http://localhost:3000/user/login',
//       body: Cypress.env()
//     }).then((res) => {
//       expect(res.status).to.be.equal(200),
//       expect(res.body).is.not.empty
//       expect(res.body).to.have.property('id')
//       expect(res.body.id).to.be.equal(3)
//     })
//   })
// })

describe('ft user', () => {
  it('Dados da API', () => {
    const tempoEsperado = Math.random() * 50
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/couto/photos',
      
    }).then((res) => {
      expect(res.status).to.be.equal(200),
      expect(res.body).is.not.empty
      expect(res.body[0]).to.have.property('description')
      expect(res.body[0].description).to.be.equal('mesa 2')
      expect(res.duration).to.be.lte(tempoEsperado)
    })
  })
})