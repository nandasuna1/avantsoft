import styled, { css } from "styled-components/native";
import { TextInterface } from "./interface";
import { RFValue } from "react-native-responsive-fontsize";

export const TextComponent = styled.Text<TextInterface>`
  color: ${({theme}) => theme.COLORS.GRAY_DEFAULT};
  font-weight: ${props => props.weight};
  ${({ typeScale }) => (typeScale ? typeScaleStyle[typeScale] : typeScaleStyle['normal'])}
`;

const typeScaleStyle = {
  small: css`
    font-size: ${props => props.theme.FONT_SIZE.SM}px;
    font-family:  ${props => props.theme.FONT_FAMILY.REGULAR};
  `,
  normal: css`
    font-size:  ${props => props.theme.FONT_SIZE.MD}px;
    font-family:  ${props => props.theme.FONT_FAMILY.REGULAR};
`,
  big: css`
    font-size:  ${props => props.theme.FONT_SIZE.LG}px;
    font-family:  ${props => props.theme.FONT_FAMILY.BOLD};
  `
}