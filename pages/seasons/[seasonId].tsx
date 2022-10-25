import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import dynamic from "next/dynamic"
import { getGlobalRaking, getSeasonById } from "../../api/rankingApi"
import { DefaultLayout } from "../../components/layouts"
import { Params, SeasonProps } from "../../interfaces/seasonResponse"
const Ranking = dynamic(() => import('../../components/ranking/Ranking'), {
  ssr: true
})

const seasonId = ({ seasonData,globalRanking}: SeasonProps) => {
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
        <Ranking globalRanking={globalRanking}/>
      </Box>
    </DefaultLayout>
  )
}


export async function getServerSideProps({ params }: Params) {
  try {
    const response = await getSeasonById(params.seasonId)
    const globalRanking = await getGlobalRaking(params.seasonId)
    return {
      props: {
        seasonData: response,
        globalRanking
      }
    }

  } catch (error) {
    return { redirect: { permanent: false, destination: '/seasons' } }

  }

}

export default seasonId;