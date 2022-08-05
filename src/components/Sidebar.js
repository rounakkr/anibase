import React from 'react'

function Sidebar({ topAnime, topAiring, type1, type2 }) {
    return (
        <aside>
            <nav>
                <div className='side-content1'>
                    <div className='side-menu'>
                        <h3>Top {type1}</h3>
                    </div>
                    {topAnime.map(anime => (
                        <a
                            href={anime.url}
                            target="_blank"
                            rel="noreferrer"
                            key={anime.mal_id}>
                            {anime.title}
                        </a>
                    ))}
                </div>
                <div className='side-content2'>
                    <div className='side-menu'>
                        <h3>Top {type2}</h3>
                    </div>
                    {topAiring.map(anime => (
                        <a
                            href={anime.url}
                            target="_blank"
                            rel="noreferrer"
                            key={anime.mal_id}>
                            {anime.title}
                        </a>
                    ))}
                </div>

            </nav>
        </aside>
    )
}

export default Sidebar