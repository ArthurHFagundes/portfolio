import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
    color: ${(props) => props.theme.firstColor};
    font-size: ${(props) =>
        props.fontSize
            ? props.fontSize + 'px'
            : '14px'}; // aqui está sendo usado o valor da propriedade fontSize que vem do componente
    font-weight: bold;
    margin-bottom: 16px;
`
