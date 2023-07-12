import { CardListContainer, Container } from "./styles";
import { CardList } from "@components/CardList";
import { usersMock } from "../../mockup/users";
import { FlatList } from "react-native";
import { Card, UserInterface } from "@components/Card";

interface CardI {
  item: UserInterface;
}
export function Home() {
    const chunkSize = 10;

    const renderUserCard = ({ item } : CardI) => {
      // Renderizar o componente do card do usuário
      return (
        <Card userData={item} />
      );
    };
  
    const renderUserList = () => {
        // Dividir os usuários em listas horizontais
        const userList = [];
        for (let i = 0; i < usersMock.length; i += chunkSize) {
          const chunk : UserInterface[] = usersMock.slice(i, i + chunkSize);
          userList.push(
            <FlatList
              key={`list-${i}`}
              data={chunk}
              renderItem={renderUserCard}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          );
        }
        return userList;
      };
    return(
        <Container>
            <CardListContainer>
                {renderUserList()}
            </CardListContainer>
        </Container>
    )
}