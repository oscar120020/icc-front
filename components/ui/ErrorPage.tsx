import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ErrorImage } from '../SVG/Error'

export const ErrorPage = () => {
  return (
    <Box className="fadeIn" display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='calc(100vh - 150px)'>
        <ErrorImage width={700} />
        <Typography color="secondary" sx={{fontSize: 22}}>
          Problemas al obtener los datos del servidor. Intentelo más tarde
        </Typography>
    </Box>
  )
}
