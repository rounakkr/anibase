import React from 'react';

function AnimeCard({title, image, anime, rating}) {
  return (
    <article className="anime-card">
        <a href={anime} target="_blank" rel="noreferrer">
            <figure>
                <img src={image} alt=""/>
            </figure>
            <h3>{title}</h3>
            <h4>Average Rating - {rating}</h4>
        </a>
    </article>
  )
}

export default AnimeCard