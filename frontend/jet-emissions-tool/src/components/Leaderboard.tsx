import { List, Paper } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material'

type Props = {}

function Leaderboard({}: Props) {
  const theme = useTheme()

  return (
    <Paper
      sx={{
          height: '80vh',
          width: '65vh',
      }}
    >
      <List>
        
      </List>
    </Paper>
  )
}

export default Leaderboard