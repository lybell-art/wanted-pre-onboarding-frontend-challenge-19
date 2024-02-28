import { configureStore } from '@reduxjs/toolkit';
import todo from "./listSlice.ts";

export default configureStore({
	reducer: {todo}
});