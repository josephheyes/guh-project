import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Card, Collapse, ListItemButton, ListItemText, useTheme } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

function PlaneItem({}: Props) {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <ListItemButton divider
        sx={{
        }}
        onClick={handleClick}
      >
        <ListItemText primary="Plane name" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} unmountOnExit>
        <Card elevation={0}>
          More info
        </Card>
      </Collapse>
    </div>
  )
}

export default PlaneItem