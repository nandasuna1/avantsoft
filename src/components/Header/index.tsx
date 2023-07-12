import { Container, Logo } from "./styles";
import logoImg from '@assets/Logo.png'


type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props) {
    return (
        <Container>
            <Logo source={logoImg} />
        </Container>
    )
}