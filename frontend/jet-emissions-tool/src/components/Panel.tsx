import { CardContent, CardHeader, Divider, Paper, Tab, Tabs, useTheme } from '@mui/material'
import LeaderboardTabs from './LeaderboardTabs'

type Props = {}

function Panel({}: Props) {
  const theme = useTheme()

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