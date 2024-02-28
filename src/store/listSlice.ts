import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IListState {
	value: string[]
}

const initialState: IListState = {
	value: []
};

export const listSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>)=>{
			if(action.payload === "") return;
			state.value = [...state.value, action.payload];
		},
		remove: (state, action: PayloadAction<int>)=>{
			state.value = [...state.value];
			state.value.splice(action.payload, 1);
		}
	}
});

export const {add, remove} = listSlice.actions;
export default listSlice.reducer;