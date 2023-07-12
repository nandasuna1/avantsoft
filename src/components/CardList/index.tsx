import { Card, UserInterface } from "@components/Card";
import { ListEmptyMessage } from "@components/EmptyListMessage";
import { FlatList } from "react-native";
import { usersMock } from "../../mockup/users";

interface Props {
    data: UserInterface[]
}
export function CardList({data}: Props) {
    return(
        <FlatList
                data={data}
                keyExtractor={item => item.name}
                renderItem={({item}) => (
                    <Card userData={item} />
                )}
                ListEmptyComponent={() => (
                    <ListEmptyMessage
                        message='There are no records of enrolled people'
                    />
                )}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={[
                    {paddingBottom: 100 },
                    data.length === 0 && {flex: 1}
                ]}
            />
    )
}