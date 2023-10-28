import { Box } from '@mui/material'
import React from 'react'
import world from '../assets/world.jpg'
import Leaderboard from '../components/Leaderboard'

function HomePage() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Leaderboard />
    </Box>
  )
}

export default HomePage