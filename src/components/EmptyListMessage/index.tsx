import { Container, Message } from "./styles";

type Props = {
  message?: string;
};

export function ListEmptyMessage({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
