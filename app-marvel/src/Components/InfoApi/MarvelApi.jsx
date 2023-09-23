
import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import './marvel.scss';
import CardMarvel from '../Card/CardMarvel';
import Detail from '../Detail/Detail';
import Paginate from '../Paginado/Paginate';

const API_URL = 'https://gateway.marvel.com/v1/public/characters';
const API_KEY = '3f893c7e6bd8aab050dcbbe60eb5d6fe';
const TS = '1';
const HASH = 'ec10d52f15f3d0adea6086a93b22ba48';

export default function MarvelApi() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);


  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(9);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);


  useEffect(() => {
    let apiUrl = `${API_URL}?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`;

    if (searchQuery) {
      apiUrl += `&nameStartsWith=${searchQuery}`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.results) {
          setCharacters(data.data.results);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [searchQuery]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleCardClick = character => {
    setSelectedCharacter(character);
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='comics-api'>
      <Paginate
        totalPages={Math.ceil(characters.length / charactersPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className='search-container'>
        <TextField
          className='search'
          label="Name Comics"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>


      <Grid container direction="row" alignItems="center" justifyContent="center" spacing={8}>
        {currentCharacters.map((data) => (
          <Grid item key={data.id}>
            <CardMarvel character={data} onCardClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>

      {selectedCharacter && <Detail character={selectedCharacter} />}
    </div>
  );
}
