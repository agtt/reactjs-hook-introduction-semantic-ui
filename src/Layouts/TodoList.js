import React, { useState } from "react";
import { Image, List, Input, Button } from "semantic-ui-react";

const TodoList = () => {
  const [todos, addTodo] = useState(["Fenebahce"]);

  return (
    <div>
      <Input placeholder="You Text" />
      <Button onClick={() => addTodo([...todos, "Item Name"])}>Add Todo</Button>
      <Button onClick={() => addTodo([])}>Reset</Button>

      <List divided verticalAlign="middle">
        {todos.map(todo => {
          return (
            <List.Item>
              <Image
                avatar
                src="http://1.bp.blogspot.com/-clk_4IRJASs/Tt5NK2e7qcI/AAAAAAAAANk/c1zkUcv_FHk/s1600/fenerbahce_logosu.png"
              />
              <List.Content>
                <List.Header as="a">{todo}</List.Header>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default TodoList;
