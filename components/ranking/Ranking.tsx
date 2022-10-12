import { Box, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
import React from 'react'
import { RankingProps } from '../../interfaces/ranking'
import { useStyles } from './styles';
const RankingSecondaryCard = dynamic(() => import('../cards/RankingSecondaryCard'), { ssr: false });
const RankingCard = dynamic(() => import('../cards/RankingCard'), { ssr: false });

export default function Ranking({ competitors }: RankingProps) {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ width: '100', display: 'flex', flexDirection: 'row' }}>
                {competitors.map((competitor, index) => {
                    {
                        if (index < 3) {
                            return (
                                <RankingCard competitor={competitor} index={index + 1} />
                            )
                        }
                    }
                })}
            </Box>
           
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx= {{display: 'flex', justifyContent: 'flex-end'}}>
                        <Box className={classes.containerParams}>
                        <Typography className={classes.text}>Puntos</Typography>
                        <Typography className={classes.text}>Penalty</Typography>
                        </Box>
                    </Box>
                    {competitors.map((competitor, index) => {
                        {
                            if (index > 2) {
                                return (
                                    <RankingSecondaryCard competitor={competitor} index={index + 1} />
                                )
                            }
                        }
                    })}
            </Box>
        </>
    )
}