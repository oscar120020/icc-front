import { Box, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import { getGlobalRaking, getSeasonById } from "../../api/rankingApi"
import { DefaultLayout } from "../../components/layouts"
import { SeasonProps } from "../../interfaces/seasonResponse"
const Ranking = dynamic(() => import('../../components/ranking/Ranking'), {
  ssr: false
})
const IndivualRankingCard = dynamic(() => import('../../components/cards/IndivualRankingCard'), {
  ssr: false
})

const seasonId = ({ individualRanking, globalRanking }: SeasonProps) => {

  if (!globalRanking.length) {
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
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
            <Typography
              variant="h5">Aun no hay Rankings para esta temporada</Typography>
          </Box>
        </Box>
      </DefaultLayout>
    )
  }
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
          <Typography variant="h2" sx={{fontSize:'24px'}}>Ranking Global</Typography>
        </Box>
        <Ranking globalRanking={globalRanking} />
        <Box sx={{ display: 'flex', justifyContent: 'space-evening' }}>
          {individualRanking.rankings.map((ranking, index) => (
            <IndivualRankingCard key={ranking.id} individualRanking={ranking} index={index + 1} />
          ))}
        </Box>
      </Box>
    </DefaultLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { seasonId } = params as { seasonId: string }
  try {
    const response = await getSeasonById(seasonId)
    const globalRanking = await getGlobalRaking(seasonId)
    return {
      props: {
        individualRanking: response,
        globalRanking
      }
    }
  } catch (error) {
    return { redirect: { permanent: false, destination: '/seasons' } }

  }
}

export default seasonId;