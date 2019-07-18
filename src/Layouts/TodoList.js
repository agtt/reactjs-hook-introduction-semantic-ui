import React, { useState } from "react";
import { Image, List } from "semantic-ui-react";

const TodoList = () => {
  const [todos, addTodo] = useState([]);

  return (
    <List divided verticalAlign="middle">
      {todos.map(todo => {
        return (
          <List.Item>
            <Image
              avatar
              src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
            />
            <List.Content>
              <List.Header as="a">{todo}</List.Header>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};

export default TodoList;
