import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { Competitor } from '../../interfaces/ranking'
import { useStyles } from './style'
import StarsIcon from '@mui/icons-material/Stars';
import CancelIcon from '@mui/icons-material/Cancel';

export default function RankingSecondaryCard({competitor, index=4}: {competitor: Competitor, index: number}) {
    const classes = useStyles()
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
            <Card sx={{ background: '#FFFFF', width: '95%', height: '5.5vh', borderRadius: '5px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', marginTop: '20px' }}>
                <CardContent sx={{ padding: '0' }}>
                    <Container className={classes.secondaryContainer}>
                        <Box className={classes.secondaryLeftContainer}>
                            <Typography>{index}th</Typography>
                            <CardMedia
                                component="img"
                                height="42"
                                sx={{ maxWidth: 44, borderRadius: '50%', margin: '2px' }}
                                image='profile.png'
                                alt="Paella dish"
                            />
                            <Typography sx={{ fontSize: 18.5 }}>
                                {competitor.username}
                            </Typography>
                        </Box>
                        <Box className={classes.secondaryRightContainer}>
                            <StarsIcon sx={{marginBottom: '-10px'}}/>
                            <Typography className={classes.text}>
                                {competitor.score}</Typography>
                                <CancelIcon sx={{marginBottom: '-10px', marginLeft: '4px'}}/>
                            <Typography className={classes.text}>
                                
                                {competitor.penalty}
                            </Typography>
                        </Box>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    )
}
