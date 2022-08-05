import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';


function Character() {

  const [charList, SetCharList] = useState([]);
  const [Char, SetChar] = useState([]);
  const [search, SetSearch] = useState("");
  const [type1, setType1] = useState('Characters');
  const [type, setType] = useState('Search a character....');
  const [state, setState] = useState(0);

  const GetChar = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/characters/1`)
      .then(res => res.json());
    SetChar(temp.top.slice(0, 5));
  }

  const HandleSearch = e => {
    e.preventDefault();
    FetchChar(search);
    setState(1);
  }

  const FetchChar = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/character?q=${query}&order_by=title&sort=asc&limit=12`)
      .then(res => res.json());
    console.log(temp.results);
    SetCharList(temp.results);
  }

  useEffect(() => {
    GetChar();
    GetChar();
  }, []);

  if(charList == null)
  {
    SetCharList([{name : "SUMIMASEN! No search results found.."}]);
  }

  return (
    <div className='back'>
      <Navbar />
        <div className="content-wrap">
          <Sidebar
            topAnime={Char}
            type1={type1} />
          <MainContent
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={charList}
            type={type}
            state={state} />
        </div>
      <Footer />
    </div>
  )
}

export default Character