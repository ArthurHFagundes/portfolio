import styled from 'styled-components'

type BotaoProps = {
  // declaração de tipos de propriedades
  principal: boolean
  fontSize?: string // declarar atributo_variável tipo string (que é opcional)
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
// (props.principal ? 'green' : 'blue') == (props.principal: IF TRUE 'green' ELSE 'blue')
// props.fontSize || '16px' == (props.fontSize: IF DEFINED USE fontSize_Próprio ELSE '16px')

const BotaoPerigo = styled(Botao)`
  background-color: crimson;
  color: blue;

  span {
    text-decoration: line-through;
  }
`
// atributo do componente Botao é herdado pelo BotaoPerigo (componente extendido e mais específico)

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        {' '}
        Cancelar{' '}
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
