import Text from "@components/Text";
import { Container, DetailSection, Message, Section, RowOneColumDetail, RowTwoColumDetail, Column } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../theme";

export interface UserInterface {
    name?: string,
    id?: number,
    age?: number,
    email?: string
}
type Props = {
    userData?: UserInterface
}

export function Card({userData}: Props) {
    const { BLUE_500, GREEN} = theme.COLORS
    return(
        <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={[BLUE_500, GREEN]}
            style={{borderRadius: 15, margin: 8}}
        >
        <Container>
            <Text typeScale="big">{userData?.name}</Text>
            <Section/>
            <DetailSection>
                <RowOneColumDetail>
                <Text typeScale="small" weight="bold">Email</Text>
                <Text>{userData?.email}</Text>
                </RowOneColumDetail>

                <RowTwoColumDetail>
                <Column>
                <Text typeScale="small" weight="bold">Age</Text>
                <Text>{userData?.age}</Text>
                </Column>

                <Column>
                <Text typeScale="small" weight="bold">id</Text>
                <Text>{userData?.id}</Text>
                </Column>

                </RowTwoColumDetail>

            </DetailSection>

        </Container>
        </LinearGradient>
    )
}