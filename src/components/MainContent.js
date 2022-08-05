import React from 'react'
import AnimeCard from './AnimeCard';
import Header from './Header';


function MainContent(props) {

	return (
		<main>
			<div className="main-head">
				<form
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input
						type="search"
						placeholder={props.type}
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)} />
				</form>
			</div>
			<div className={(props.state === 0) ? 'view' : 'hidden'}>
				<Header />
			</div>
			<div className='anime-list'>
				{props.animeList.map(anime => (
					<AnimeCard
						title={anime.title}
						image={anime.image_url}
						anime={anime.url}
						key={anime.mal_id}
						rating={anime.score} />
				))}
			</div>
		</main>

	)
}

export default MainContent