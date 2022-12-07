import Head from 'next/head'
import Image from 'next/image'



export default function Home() {


  return (


    <div className="">

      <Head>
        <title>COARAMAUSE WEBPAGE</title>
        <meta name="description" content="This is COARAMAUSE WEBPAGE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <div className="flex flex-col min-h-screen text-sky-300 bg-sky-800">

        <h1 className="text-2xl bg-sky-800">
          This is COARAMAUSE WEBPAGE
        </h1>

        





      </div>
         

      <footer className="mt-auto text-sky-300 bg-sky-900 text-center">
        <a
          href=""
          target="_self"
          rel="noopener noreferrer"
        >
          2022 COARAMAUSE
        </a>
      </footer>


    </div>


  )
}
