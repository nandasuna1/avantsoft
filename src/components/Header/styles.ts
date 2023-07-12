import styled from "styled-components/native"

export const Container = styled.View`
    width: 100%;
    height: 10%;
    padding: 15% 0 10% 0;
    background-color: ${props => props.theme.COLORS.GRAY_DEFAULT};

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
`
