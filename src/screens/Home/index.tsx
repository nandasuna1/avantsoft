import { CardListContainer, Container } from "./styles";
import { FlatList } from "react-native";
import { Card, UserInterface } from "@components/Card";
import { useGetUsersQuery } from "@services/usersApi";
import { useState } from "react";
interface CardI {
  item: UserInterface;
}
export function Home() {
  const { data } = useGetUsersQuery(0);

  const chunkSize = 10;

  const renderUserList = () => {
    // Dividir os usuários em listas horizontais
    const userList = [];
    for (let i = 0; i < data?.users?.length; i += chunkSize) {
      const chunk: UserInterface[] = data?.users.slice(i, i + chunkSize);
      userList.push(
        <FlatList
          key={`list-${i}`}
          keyExtractor={(item) => `list-${item?.id}`}
          renderItem={({ item }) => <Card userData={item} />}
          data={chunk}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      );
    }
    return userList;
  };
  return (
    <Container>
      <CardListContainer>{renderUserList()}</CardListContainer>
    </Container>
  );
}
