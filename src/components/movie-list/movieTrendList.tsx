import React from 'react'
import { MovieDataType } from '../../assets/data'
import { Box, Grid, Paper } from '@mui/material'
import MovieTrendCard from '../movie-card/movieTrend'

interface MovieTrendListProps  {
    trendingList:MovieDataType[]
}
const MovieTrendList = ({trendingList}:MovieTrendListProps) => {
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "auto",px: 2, py: 2,
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
    {trendingList.map((movie) => (
      <Grid  key={movie.id} sx={{minWidth:"fit-content"}}>
        <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
          <MovieTrendCard movie={movie} />
        </Paper>
      </Grid>
    ))}
  </Box>
  )
}

export default MovieTrendList