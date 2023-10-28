import { CardContent, CardHeader, Divider, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import Leaderboard from './Leaderboard'
import LeaderboardTabs from './LeaderboardTabs'

type Props = {}

function Panel({}: Props) {
  return (
    <Paper
        sx={{
            height: '90vh',
            width: '70vh',
        }}
        elevation={3}
      > 
        <Divider variant='middle'/>
        <CardContent>
          <LeaderboardTabs />
        </CardContent>
    </Paper>
  )
}

export default Panel