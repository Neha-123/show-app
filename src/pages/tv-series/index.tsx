import React, { SetStateAction, useContext, useState } from 'react'
import Layout from '../../Layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '../../assets/icons/icon-search.svg'
import { MovieContext } from '../../context/movie-context';
import { MovieDataType } from '../../assets/data';
import CompleteMovieList from '../../components/movie-list/CompleteMovieList';

 const TvSeries = () => {
   const [search, setSearch] = useState('');
      const [searchList, setSearchList] = useState<MovieDataType[]>([]);
      const {state} = useContext(MovieContext);
      const {movies} = state;
      const tvSeries = movies.filter(movie => movie.category === 'TV Series')
      const handleSearch = (e:{target:{value:SetStateAction<string>}}) => {
        setSearch(e.target.value)
        const newList = tvSeries.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
        setSearchList(newList)
      }
  return (
    <Layout>
    <Box>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          p: 1,
          backgroundColor: "#10141f",
          border: "none",
        }}
      >
        <InputBase
          placeholder="Search for movies or TV series"
          sx={{
            ml: 1,
            flex: 1,
            color: "white",
            border: "none",
          }}
          value={search}
          onChange={handleSearch}
          startAdornment={
            <InputAdornment position="start">
              <img
                src={SearchIcon}
                alt="search icon"
                width={20}
                height={20}
              />
            </InputAdornment>
          }
        />
      </Paper>
    </Box>
    <Box py={2} px={4} >
      {search === "" ? (
        <Box width="100%" >
            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              TV Series
            </Typography>
            <CompleteMovieList movieList={search === '' ? tvSeries : searchList} />
        </Box>
      ) : (
        <Box width="100%">
          <Typography>
            Found {searchList.length} results for "{search}"{""}
          </Typography>
          <CompleteMovieList movieList={searchList} />
        </Box>
      )}
    </Box>
  </Layout>
  )
}

export default TvSeries