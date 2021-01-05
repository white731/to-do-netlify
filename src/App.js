import React, { useState } from "react";
import {
  Form,
  Header,
  Container,
  List,
  Input,
  Segment,
} from "semantic-ui-react";
const App = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([name, ...todos]);
    setName("");
  };
  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h3" textAlign="center">
          Todo List
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
        <List>
          {todos.map((t, i) => (
            <List.Item key={i}>{t}</List.Item>
          ))}
        </List>
      </Segment>
    </Container>
  );
};
export default App;