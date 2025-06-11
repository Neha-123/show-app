import React from 'react'
import { MovieDataType } from '../../assets/data'
import { Box, Grid, Paper } from '@mui/material'
import MovieCard from '../movie-card'

interface CompleteMovieListProps  {
    movieList:MovieDataType[]
}
const CompleteMovieList = ({movieList}:CompleteMovieListProps) => {
  return (
    <Box sx={{ display: "flex", flexWrap:"wrap",  gap: 2, px: 2 , justifyContent:"space-evenly"
     }}>
        
            {movieList.map((item) => (
            <Box
            key={item.id}
            sx={{
              width:{ xs: '15rem', sm: '18rem', md: '30%', lg: '20rem' },
            }}
          >
            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
              <MovieCard movie={item} />
            </Paper>
          </Box>
            ))}
          
    </Box>
   
  )
}

export default CompleteMovieList