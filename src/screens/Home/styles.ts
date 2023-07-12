import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const CardListContainer = styled.ScrollView`
    background: ${props => props.theme.COLORS.WHITE}
`