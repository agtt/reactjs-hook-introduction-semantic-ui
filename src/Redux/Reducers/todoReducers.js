import uuidv4 from "uuid/v4";
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DEL_TODO":
      console.log(action);
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
