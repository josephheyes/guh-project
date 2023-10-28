import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Avatar, Card, Collapse, ListItemButton, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'

type Props = {
  test: boolean
}

function LeaderboardItem({test}: Props) {
  const [open, setOpen] = useState(false)
  const [company, setCompany] = useState("<Company Name>")
  const [c02Value, setC02Value] = useState(0)

  useEffect(() => {
    if(test) {
      setC02Value(Math.random() * (5000 - 1 + 1) + 1)
      setCompany("<Company Name>")
    }
  }, [test])

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <ListItemButton
          onClick={handleClick}
        >
          <Avatar alt={company} sx={{
            mr: '10px'
          }}/>
          <ListItemText
            sx={{
              color: (theme) => theme.palette.primary.main
            }}
            primary={company}
            secondary={"C02 Emissions: " + c02Value} 
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </div>
      <Collapse in={open} unmountOnExit>
        <Card elevation={0}>
          More info
        </Card>
      </Collapse>
    </div>
  )
}

export default LeaderboardItem