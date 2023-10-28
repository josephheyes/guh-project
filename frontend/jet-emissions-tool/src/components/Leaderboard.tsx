import { CardContent, CardHeader, Divider, List, Paper } from '@mui/material'
import LeaderboardItem from './LeaderboardItem'

type Props = {
  purpose: string
}

function Leaderboard({purpose}: Props) {
  return (
        <List>
          <LeaderboardItem test={false}/>
          <LeaderboardItem test={false}/>
          <LeaderboardItem test={false}/>
        </List>
  )
}

export default Leaderboard