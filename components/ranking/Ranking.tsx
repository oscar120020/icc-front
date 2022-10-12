import { Box } from '@mui/material'
import React from 'react'
import { RankingProps } from '../../interfaces/ranking'
import RankingCard from '../cards/RankingCard'
import RankingSecondaryCard from '../cards/RankingSecondaryCard'

export default function Ranking({ competitors }: RankingProps) {

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
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
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
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
