import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children: JSX.Element | JSX.Element[];
}

export const DefaultLayout = ({title, children, pageDescription, imageFullUrl}: Props) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={pageDescription} />

            <meta name="og:title" content={title} />
            <meta name="og:description" content={pageDescription} />

            {
                imageFullUrl && <meta name="og:image" content={imageFullUrl} />
            }
        </Head>

        <nav>
            <Navbar/>
        </nav>

        <main style={{
            margin: "70px auto",
            maxWidth: 1440,
            padding: "0px 30px"
        }} >
            { children }
        </main>

        <footer>
            {/* footer */}
        </footer>
        
    </>
  )
}