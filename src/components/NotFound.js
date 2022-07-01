import { Helmet } from 'react-helmet';

function NotFound() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Page Not Found</title>
			</Helmet>
			<h1>404 Not Found</h1>
		</>
	);
}

export default NotFound;
