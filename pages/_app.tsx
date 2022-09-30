import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { defaultTheme } from '../themes/defaultTheme'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={defaultTheme} >
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
