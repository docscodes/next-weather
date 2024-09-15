import SearchBox from '@/components/SearchBox'
import Head from 'next/head'

export default function Search() {
  return (
    <>
      <Head>
        <title>WeatherWise</title>
      </Head>
      <main>
        <h1>WeatherWise</h1>
        <form >
          <h2>Search for local weather</h2>
          <SearchBox />
        </form>
      </main>
    </>
  )
}