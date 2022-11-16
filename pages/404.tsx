import NextLink from 'next/link';
import { Box, Button, Link, Typography } from "@mui/material";
import { DefaultLayout } from "../components/layouts";
import { Error404Image } from "../components/SVG/Error404";

const Page404 = () => {
  return (
    <DefaultLayout title={"Página no encontrada"} pageDescription={"Página no encontrada"}>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='calc(100vh - 150px)' >
          <Error404Image width={700} />
          <Box display='flex'>
              <Typography sx={{fontSize: 22}}>
                Página no encontrada, &nbsp;
              </Typography>
            <NextLink href={"/"} passHref>
              <Link underline='always'>
                <Typography sx={{fontSize: 22}}>
                  Ir al inicio
                </Typography>
              </Link>
            </NextLink>
          </Box>
        </Box>
    </DefaultLayout>
  )
}

export default Page404;