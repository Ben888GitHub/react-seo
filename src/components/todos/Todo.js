import { useParams } from 'react-router-dom';
import { items } from '../../data';
import { Helmet } from 'react-helmet';

function Todo() {
	let { id } = useParams();

	const { title, description } =
		id && items?.find((item) => item.id === Number(id));

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
			</Helmet>

			<h2> {id}</h2>
			<h3>{title}</h3>
			<h3>{description}</h3>
		</>
	);
}

export default Todo;
