import React from 'react'
import Header from '../../components/Header';
import AnimeCard from './AnimeCard';


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
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className={(props.state===0)? 'view' : 'hidden'}>
				<Header/>
			</div>
			<div className='anime-list'>
				{props.animeList.map(anime => (
					<AnimeCard
						title={anime.name}
                        image={anime.image_url}
                        anime={anime.url}
						key={anime.mal_id}
						rating={anime.alternative_names} />
				))}
			</div>
		</main>
	)
}

export default MainContent