import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Pagina de Cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário!', () => {
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.prencherFormulario();
    Cadastro.submeterCadastro()
  })
})