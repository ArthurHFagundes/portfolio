import styled from 'styled-components'
import { Paragraph } from '../../components/Paragraph/styles'

export const Description = styled(Paragraph)`
    margin-top: 24px;
    margin-bottom: 40px;
`

export const ThemeButton = styled.button`
    font-size: 10px;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    padding: 8px;
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.firstColor};
    cursor: pointer;
`

export const SideBarContainer = styled.div`
    position: sticky;
    top: 70px;
    left 0;

    @media (max-width: 768px) {
        position: static;
        margin-bottom: 40px;
        text-align: center;
        width: 100%;
    }
`
