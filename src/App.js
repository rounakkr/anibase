import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import Manga from './Pages/Manga/Manga';
import Character from './Pages/Character/Character'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
	const [topAiring, setTopAiring] = useState([]);
	const [type1, setType1] = useState('Anime');
	const [type2, setType2] = useState('Airing Anime');
	const [type, setType] = useState('Search an anime....');
	const [state, setState] = useState(0);


	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());
		SetTopAnime(temp.top.slice(0, 5));
	}
	const GetTopAiring = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`)
			.then(res => res.json());
		setTopAiring(temp.top.slice(0, 5));
	}

	const HandleSearch = e => {
		e.preventDefault();
		FetchAnime(search);
		setState(1);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
			.then(res => res.json());
		console.log(temp.results);
		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
		GetTopAiring();
	}, []);

	return (
		<Router>
			<Routes>
				<Route path='/' element={
					<div className='back'>

						<Navbar />

						<div className="content-wrap">
							<Sidebar
								topAnime={topAnime}
								topAiring={topAiring}
								type1={type1}
								type2={type2} />

							<MainContent
								HandleSearch={HandleSearch}
								search={search}
								SetSearch={SetSearch}
								animeList={animeList}
								type={type}
								state={state} />
						</div>
						<Footer />
					</div>
				} />
				<Route path='/manga' element={<Manga />} />
				<Route path='/character' element={<Character />} />
			</Routes>
		</Router>
	);
}

export default App;