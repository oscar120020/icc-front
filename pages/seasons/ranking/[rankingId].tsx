import { Box, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import React, { useRef } from 'react'
import { getAllRanking, getRankingById } from '../../../api/rankingApi'
import { DefaultLayout } from '../../../components/layouts'
import Ranking from '../../../components/ranking/Ranking'
import { getDateFormat } from '../../../helpers/getDateFormat'
import { RankingProps } from '../../../interfaces/seasonResponse'

export default function RankingId({ ranking }: RankingProps) {
  
  const {current} = useRef(getDateFormat(ranking.created_at));
  return (
    <DefaultLayout title={"Calendario | ICC"} pageDescription={"Calendario de eventos"}>
      <Box
        sx={{
          margin: "20px auto",
          maxWidth: 1440,
          padding: "0px 30px",
        }}
        className="fadeIn"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
          <Typography variant="h2" sx={{fontSize:'24px'}}>Ranking del mes de {current}</Typography>
        </Box>
        <Ranking globalRanking={ranking.scores} />
      </Box>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  const rankings = await getAllRanking()
  const paths = rankings.map((ranking) => ({
    params: { rankingId: ranking.id }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const { rankingId } = params as { rankingId: string }
  try {
    const ranking = await getRankingById(rankingId)
    return {
      props: { ranking },
    }

  } catch (error) {
    return { redirect: { permanent: false, destination: '/seasons' } }
  }

}