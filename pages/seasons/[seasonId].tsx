import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { getGlobalRaking, getSeasonById } from "../../api/rankingApi"
import { DefaultLayout } from "../../components/layouts"
import { Params, SeasonProps } from "../../interfaces/seasonResponse"

const seasonId = ({ seasonData,globalRanking}: SeasonProps) => {
  console.log(globalRanking)
  return (
    <DefaultLayout title={"Calendario | ICC"} pageDescription={"Calendario de eventos"}>
        <Box>
          
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