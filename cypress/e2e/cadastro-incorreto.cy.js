import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Pagina de Cadastro', () => {
    it('verificação de mensagem de erro! Cadastro Vazio', () => {
      Cadastro.acessarPaginaDeCadastroIncorreto();
      Cadastro.verificaCamposIncorreto()
    })
  })