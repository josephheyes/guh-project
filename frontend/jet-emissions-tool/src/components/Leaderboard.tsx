import { List } from '@mui/material'
import LeaderboardItem from './LeaderboardItem'
import { useState } from 'react'

type Props = {
  purpose: string
}

function Leaderboard({purpose}: Props) {
  const [items, setItems] = useState()

  return (
        <List>
          {items}
        </List>
  )
}

export default Leaderboard