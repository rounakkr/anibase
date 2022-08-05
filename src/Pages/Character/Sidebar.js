import React from 'react'

function Sidebar({ topAnime, type1 }) {
    return (
        <aside>
            <nav>
                <div className='side-content3'>
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

            </nav>
        </aside>
    )
}

export default Sidebar