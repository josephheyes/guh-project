import { CircularProgress, List, Typography } from '@mui/material'
import LeaderboardItem from './LeaderboardItem'
import { useEffect, useState } from 'react'
import { getAllCompanyData } from '../apiManager'

type Props = {
  purpose: string
}

function Leaderboard({purpose}: Props) {
  const [items, setItems] = useState([])
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    async function apiCall() {
      const res = await getAllCompanyData()
      if(res == undefined) {
        setFailed(true)
      }
      setItems(res)
    }
    apiCall()
  }, [])

  if(failed) {
    return(
      <Typography variant='h4'>
        Internal Server Error
      </Typography>
    )
  }
  else if(items.length < 1) {
    return(
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <CircularProgress />
      </div>
    )
  }
  else {
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


}

export default Leaderboard