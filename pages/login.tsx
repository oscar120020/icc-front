import { Box } from "@mui/material";
import Head from "next/head";
import { LoginForm } from "../components/form";

const Login = () => {
  return (
    <>
      <Head>
        <title>Acceder al panel de administración</title>
        <meta name="description" content="login para el panel de administración" />
      </Head>
      <Box sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#cddce26a"
      }} >
        <Box sx={{
          width: '90%',
          maxWidth: '400px',
          backgroundColor: "#fff",
          borderRadius: "5px",
          overflow: 'hidden'
        }}>
          <LoginForm/>
        </Box>
      </Box>
    </>
  )
}

export default Login;