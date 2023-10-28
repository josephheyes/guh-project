import { List, Paper } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material'
import PlaneItem from './PlaneItem'

type Props = {}

function Leaderboard({}: Props) {
  const theme = useTheme()

  return (
    <Paper
      sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '80vh',
          width: '65vh',
      }}
    >
      <List sx={{
        width: '95%'
      }}>
        <PlaneItem />
        <PlaneItem />
      </List>
    </Paper>
  )
}

export default Leaderboard