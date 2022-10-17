import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useStyles } from './style';
interface Season {
    name: string,
    chanllenges: number,
    beginning: string,
    end: string
}

interface SeasonProps {
    season: Season
}

export default function SeasonCard({ season }: SeasonProps) {
    const classes = useStyles();

    return (
        <Box className={classes.seasonBox}>
            <Box className={classes.triangleBox}>
            </Box>
            <Card sx={{ height: '170px' }}>
                <CardContent sx={{ padding: '0' }}>
                    <Box className={classes.cardTitleBox}>
                        <Typography className={classes.titleStyles}>Intellisys Coding Chanlleges 1-2</Typography>
                    </Box>
                    <Box>
                        <Box className={classes.cardContentBox}>
                            <Box className={classes.typographyContent}>
                                <EmojiEventsIcon sx={{ marginRight: '7px', fontSize: '29px' }} />
                                <Typography className={classes.seasonText}>5 Challenges</Typography>
                            </Box>
                            <Box className={classes.typographyContent}>
                                <GroupsIcon sx={{ marginRight: '9px', fontSize: '29px' }} />
                                <Typography className={classes.seasonText}>Participantes</Typography>
                            </Box>
                            <Box className={classes.typographyContent}>
                                <CalendarMonthIcon sx={{ marginRight: '50px', fontSize: '29px' }} />
                                <Typography sx={{ whiteSpace: 'nowrap', marginLeft: '-45px' }} className={classes.seasonText}>Jan, 2022 - Jan, 2022</Typography>
                            </Box>
                            <Box className={classes.buttonBox}>
                                <Button className={classes.buttonStyles}>Ver Detalles</Button>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
