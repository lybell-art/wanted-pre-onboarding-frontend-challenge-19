import { useState } from 'react';
import ListAdder from "./components/ListAdder";
import List from "./components/List";
import './App.css';

function App() {
	return <>
		<ListAdder />
		<List />
	</>;
}

export default App;
