import React, { useState } from "react";
import { Image, List, Input, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector(state => state.todoReducers);
  const dispatch = useDispatch();

  const onChange = e => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <Input onChange={onChange} placeholder="You Text" />
      <Button onClick={() => dispatch({ type: "ADD_TODO", text: todo })}>
        Add Todo
      </Button>
      <Button onClick={() => setTodo([])}>Reset</Button>

      <List divided verticalAlign="middle">
        {todos.map(todo => {
          return (
            <List.Item key={todo.id}>
              <Image
                avatar
                src="http://1.bp.blogspot.com/-clk_4IRJASs/Tt5NK2e7qcI/AAAAAAAAANk/c1zkUcv_FHk/s1600/fenerbahce_logosu.png"
              />
              <List.Content>
                <List.Header as="a">{todo.text}</List.Header>
              </List.Content>
              <Button
                onClick={() => dispatch({ type: "DEL_TODO", id: todo.id })}
              >
                x
              </Button>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default TodoList;
