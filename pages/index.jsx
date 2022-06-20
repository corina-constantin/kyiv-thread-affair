import Head from 'next/head'
import Header from '../components/header';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread affair</title>
      </Head>

<Header></Header>


<main className="content"></main>


<footer className="footer"></footer>


    </div>
  )
}
