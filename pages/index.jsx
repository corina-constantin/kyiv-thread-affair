import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread affair</title>
      </Head>


<header className="header mt-5 text-warning">Hello
<img src="/images/logo.jpg" alt=""></img>
<i className="fa-solid fa-phone"></i>
</header>

<main className="content"></main>
<div className="badge">20%off</div>
  <div className="badge badge-secondary">secondary</div>
    <div className="badge badge-oversized">%</div>

<footer className="footer"></footer>


    </div>
  )
}
