import React, { SetStateAction, useContext, useState } from 'react'
import Layout from '../../Layout'
import { Box, InputAdornment, InputBase, Paper, Typography } from '@mui/material';
import SearchIcon from '../../assets/icons/icon-search.svg'
import MovieList from '../../components/movie-list';
import MovieTrendList from '../../components/movie-list/movieTrendList';
import { MovieContext } from '../../context/movie-context';
import { MovieDataType } from '../../assets/data';

 const Home = () => {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const {state} = useContext(MovieContext);
  const {movies} = state;
  const trendingList = movies.filter(movie => movie.isTrending === true);
  const recommendList = movies.filter(movie => movie.isTrending === false);

  const handleSearch = (e:{target:{value:SetStateAction<string>}}) => {
    setSearch(e.target.value)
    const newList = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
    setSearchList(newList)
  }
  return (<Layout>
      <Box>
        <Paper component="form"
              sx={{
                display:"flex",
                alignItems:"center",
                borderRadius:"default",
                p:1,
                backgroundColor:"#10141f",
                border:"none"
              }}>
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
        {search === '' 
        ? (
          <Box width="100%">
            <Box width="100%">
              <Typography>
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
            <Box width="100%">
              <Typography>
                Recommended for you
              </Typography>
              <MovieList recommendList={recommendList} />
            </Box>
          </Box>
        )
        : <Box width="100%">
        <Typography>
          Found
        </Typography>
      </Box>}
      </Box>
  </Layout>)
}

export default Home