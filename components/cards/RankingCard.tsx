import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Competitor } from '../../interfaces/ranking'
import RankingSecondaryCard from './RankingSecondaryCard'
import { useStyles } from './style'
import StarsIcon from '@mui/icons-material/Stars';
import CancelIcon from '@mui/icons-material/Cancel';



const data: Competitor[] = [
    {
        username: 'Vladimir',
        fullname: '',
        score: 25,
        penalty: 560
    },
    {
        username: 'Juan',
        fullname: '',
        score: 25,
        penalty: 560
    },
    {
        username: 'Pedro',
        fullname: '',
        score: 25,
        penalty: 560
    },

]


export default function RankingCard() {
    const classes = useStyles()
    return (
        <Box>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {data.map((competitor, index) => {
                    if (index < 3) {
                        return (
                            <Box key={competitor.username} sx={{ width: 345, height: 250, position: 'relative', display: 'flex', marginLeft: '2px' }} >
                                <Box sx={{ position: 'absolute', left: '-40px', top: '-14px', zIndex: '1000' }}>
                                    <Image
                                        src={`/top${index + 1}.png`}
                                        alt="Picture of the author"
                                        width={90}
                                        height={140}
                                    />
                                </Box>
                                <Card sx={{ background: '#FFFFF', width: '95%', height: '250px', borderRadius: '15px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' }}>
                                    <CardContent sx={{ padding: '0' }}>
                                        <Container className={classes.contentContainer}>
                                            <Box className={classes.centerContainer}>
                                                <CardMedia
                                                    component="img"
                                                    height="70"
                                                    sx={{ maxWidth: 81, borderRadius: '50%', marginBottom: 1 }}
                                                    image='profile.png'
                                                    alt="Paella dish"
                                                />
                                                <Typography sx={{ fontSize: 18.5 }}>
                                                    {competitor.fullname ? competitor.fullname : competitor.username}
                                                </Typography>
                                            </Box>
                                            <Container className={classes.downContainer}>
                                                <Typography className={classes.text} sx={{ flex: 1 }} >
                                                    <StarsIcon sx={{marginBottom: '-3px', marginRight: '1.5px'}}/>
                                                    {competitor.score}</Typography>
                                                <Typography className={classes.text} sx={{ flex: 1, borderLeft: '1px solid #C6C6C6' }}>
                                                    <CancelIcon sx={{marginBottom: '-3px', marginRight: '1.5px'}}/>
                                                    {competitor.penalty}</Typography>
                                            </Container>
                                        </Container>
                                    </CardContent>
                                </Card>
                            </Box>
                        )
                    }
                })}
            </Container>
            <RankingSecondaryCard competitor={data[0]} index={4}/>
        </Box>
    )
}


