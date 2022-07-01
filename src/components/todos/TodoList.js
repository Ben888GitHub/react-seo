import { items } from '../../data';
import { useNavigate } from 'react-router-dom';

function TodoList() {
	let navigate = useNavigate();

	return (
		<>
			<h2>Todo List</h2>
			<br />
			{items &&
				items.map((item, idx) => (
					<div key={idx}>
						<h3 onClick={() => navigate(`/todo/${item.id}`)}>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				))}
		</>
	);
}

export default TodoList;
