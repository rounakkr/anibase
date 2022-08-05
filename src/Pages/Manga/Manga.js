import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MainContent from '../../components/MainContent';
import { useState, useEffect } from 'react';


function Manga() {

  const [mangaList, SetMangaList] = useState([]);
  const [Manga, SetManga] = useState([]);
  const [search, SetSearch] = useState("");
  const [Novel, setNovel] = useState([]);
  const [type1, setType1] = useState('Manga');
  const [type2, setType2] = useState('Novel');
  const [type, setType] = useState('Search a manga....');
  const [state, setState] = useState(0);


  const GetManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
      .then(res => res.json());
    SetManga(temp.top.slice(0, 5));
  }
  const GetNovel = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/novels`)
      .then(res => res.json());
    setNovel(temp.top.slice(0, 5));
  }

  const HandleSearch = e => {
    e.preventDefault();
    FetchManga(search);
    setState(1);
  }
  const FetchManga = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=12`)
      .then(res => res.json());
    console.log(temp.results);
    SetMangaList(temp.results);
  }

  useEffect(() => {
    GetManga();
    GetNovel();
  }, []);

  return (

    

    <div className='back'>
      <Navbar/>
								
								<div className="content-wrap">
									<Sidebar
										topAnime={Manga}
										topAiring={Novel} 
                    type1={type1}
                    type2={type2}/>
									<MainContent
										HandleSearch={HandleSearch}
										search={search}
										SetSearch={SetSearch}
										animeList={mangaList}
                    type={type} 
                    state={state}/>
								</div>
      <Footer/>
    </div>
  )
}

export default Manga