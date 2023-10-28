import { Box } from '@mui/material'
import React from 'react'
import jet from '../assets/jet.jpg'
import Panel from '../components/Panel'

function HomePage() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundImage: `url(${jet})`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Panel />
    </Box>
  )
}

export default HomePage