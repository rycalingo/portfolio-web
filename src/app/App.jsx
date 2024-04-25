import Header from "../components/Header";

function App() {
	return (
		<>
		<Header />
		<main>
			<h1>My Portfolio</h1>
		</main>
		<footer><p>&copy; {(new Date).getFullYear()} Gabriel Ryan Calingo</p></footer>
		</>
	);
}

export default App;
