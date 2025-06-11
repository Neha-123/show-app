import React from 'react'
import { MovieDataType } from '../../assets/data'
import { Box, Grid, Paper } from '@mui/material'
import MovieCard from '../movie-card'

interface MovieListProps  {
    recommendList:MovieDataType[]
}
const MovieList = ({recommendList}:MovieListProps) => {
  return (
    <Box sx={{ display: "flex",  overflowX: "auto", gap: 2, px: 2 ,
     
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#555",
    },

    // Optional: Hide scrollbar in Firefox but keep scroll
    scrollbarWidth: "thin", // Firefox
    scrollbarColor: "#888 #171616", // Firefox
     }}>
        
            {recommendList.map((item) => (
            <Box
            key={item.id}
            sx={{
              minWidth: { xs: '80%', sm: '40%', md: '30%', lg: '19%' },
              width:"min-content",
              flexShrink: 0,
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

export default MovieList