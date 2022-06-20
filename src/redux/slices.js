import { createSlice } from "@reduxjs/toolkit";

export const reducerSlice = createSlice({
  name: "playerSelect",
  initialState: {
      question_category: "",
      question_difficulty: "",
      question_type: "",
      amount_of_questions: 10,
      score: 0
  
  },
  reducers: {
    setValue: ( state, action ) => {
      state.searchInputValue = action.payload;
    }
  }
})

export const { setValue } = reducerSlice.actions;

export default reducerSlice.reducer;