import { Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import React from 'react'
import { ErrorImage } from '../SVG/Error'

export const ErrorPage = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='calc(100vh - 150px)'>
        <ErrorImage width={700} />
        <Typography color="secondary" sx={{fontSize: 22}}>
          Problemas al obtener los datos del servidor. Intentelo más tarde
        </Typography>
    </Box>
  )
}
