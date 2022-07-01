import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoList from './components/todos/TodoList';
import Todo from './components/todos/Todo';
import NotFound from './components/NotFound';

function App() {
	return (
		<div className="App">
			<h1>React SEO Optimization</h1>

			<Routes>
				<Route path="/" element={<TodoList />} />
				<Route path="/todo/:id" element={<Todo />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
