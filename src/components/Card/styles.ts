import styled, {css} from 'styled-components/native'

    // TO-DO configurar layout para somar tamanhos

export const Container = styled.View`
    width: 260px;
    height: 280px;
    justify-content: center;
    align-content: center;

    padding: 16px;
    margin: 2px;
    gap: 8px;
    border-radius: 14px;

    background: ${props => props.theme.COLORS.WHITE};
`

export const Message = styled.Text`
    text-align: center;
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
`

export const Section = styled.View`
    height: 2px;
    background-color: ${props => props.theme.COLORS.GRAY_DEFAULT};
`

export const DetailSection = styled.View``;

export const RowOneColumDetail = styled.View`
    gap: 2px;
`;

export const RowTwoColumDetail = styled.View`
    display: flex;
    flex-direction: row;

    gap: 8px;
`;

export const Column = styled.View``;
