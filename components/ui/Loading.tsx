import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const Loading = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 150px)' >
        <CircularProgress size={100} color='primary'/>
    </Box>
  )
}
