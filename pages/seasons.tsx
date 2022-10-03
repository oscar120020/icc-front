import { useQuery, useQueryClient } from "react-query";
import { rankingApi } from "../api/rankingApi";
import { DefaultLayout } from "../components/layouts";

const getSeasons = async() => {
  const response = await rankingApi.get('/season');
  return response.data
}

const Seasons = () => {

  const { data, error, isLoading } = useQuery(['seasons'], getSeasons);
  console.log(data);
  

  return (
    <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
        <pre>
          {
            JSON.stringify(data, null, 2)
          }
        </pre>
        
    </DefaultLayout>
  )
}

export default Seasons;