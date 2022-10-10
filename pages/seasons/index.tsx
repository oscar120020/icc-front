import { useQuery } from "react-query";
import { rankingApi } from "../../api/rankingApi";
import { DefaultLayout } from "../../components/layouts";
import { Loading } from "../../components/ui";
import { ErrorPage } from "../../components/ui/ErrorPage";

const getSeasons = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rankingApi.get('/season')
      .then(response => {
        res(response.data)
      })
      .catch(err => {
        console.log(err);
        rej(err)
      })
    }, 3000)
  })
}

const Seasons = () => {

  const { data, error, isLoading } = useQuery(['seasons'], getSeasons, {
    retry: 1
  });

  if(error){
    return (
      <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
        <ErrorPage/>
      </DefaultLayout>
    )
  }

  if(isLoading){
    return (
      <DefaultLayout title={"Seasons | ICC"} pageDescription={"Seasons details"}>
        <Loading/>
      </DefaultLayout>
    )
  }
  

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