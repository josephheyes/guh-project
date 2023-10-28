import { List } from '@mui/material'
import LeaderboardItem from './LeaderboardItem'
import { useEffect, useState } from 'react'
import { getAllCompanyData } from '../apiManager'

type Props = {
  purpose: string
}

function Leaderboard({purpose}: Props) {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function apiCall() {
      const res = await getAllCompanyData()
      console.log(res)
      setItems(res)
    }
    apiCall()
  }, [])

  return (
      <div style={{
        maxHeight: '78vh',
        overflow: 'auto'
      }}>
        <List>
          {items.map(item => {
            return <LeaderboardItem data={item} test={false}/>         
            }
          )}
        </List>
      </div>
  )
}

export default Leaderboard