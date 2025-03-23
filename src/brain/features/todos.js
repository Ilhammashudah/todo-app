import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("getTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const todos = await response.json();
  console.log(todos);
  return todos;
});

export const todoReducer = createSlice({
  name: "todoReducer",
  initialState: { todos: [], isLoading: false },
  reducers: {
    addTodo: (state, action) => {
      const { title, id } = action.payload;
      const newTask = { id, title };
      state.todos.push(newTask);
    },
    deleteTodo: (state, action) => {
      //  state.todos.filter(todo => todoReducer.id === action.payload.id);

      const index = state.todos.findIndex(
        (todo) => todoReducer.id === action.payload.id
      );
      if (index == index) {
        state.todos.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      // const { id, newTitle } = action.payload;

      // return {
      //   ...state,
      //   todos: state.todos.map((todo) =>
      //     todo.id === id ? { ...todo, title: newTitle } : todo
      //   ),
      // };

      const { id, newTitle } = action.payload;
      const editedTask = state.todos.find((todo) => todo.id === id);

      if (editedTask) {
        editedTask.title = newTitle;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state, action) => {
      state.isLoading=true;
      // state.todos = action.payload;
    });

    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading=false;
    });
  },
});

export const { addTodo, deleteTodo, editTodo } = todoReducer.actions;

export default todoReducer.reducer;
