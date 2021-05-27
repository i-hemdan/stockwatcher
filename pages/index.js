import Head from 'next/head'
import fetch from 'node-fetch'
import {SearchBar, TrashButton} from './client/components'
import { CandleStickChart } from './client/components'
import { useState } from 'react'

export default function Home({chartData}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Head>
        <title>Stock Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-wrap items-center justify-between bg-green-900 bg-opacity-60 w-screen">
        <div className="block text-xl w-1/3 p-2"><b>Stock Watch</b></div>
        <div className="block p-2 w-1/3"><SearchBar onSearchClick = {() => console.log("testsearch")}/></div>
      </nav>
      <main className="flex w-full flex-grow px-20 text-center divide-x-2">
          {/* watch list */}
          <div className="block w-1/4 flex-col">
            <span className="block m-auto p-4 my-4 text-lg border-b w-1/2"><b>Watch List</b></span>
            <div className="flex flex-row align-center justify-center m-auto">
              <div className="flex flex-row justify-around w-1/2">
                <span className="block">SPY</span>
                <TrashButton/>
              </div>
            </div>
          </div>
          {/* vertical line */}
          <div className="block w-5/6 flex-grow">
            <span className="block m-auto p-4 my-4 text-lg border-b w-1/2"><b>Stats</b></span>
            <div className="block w-5/6"><CandleStickChart  data={chartData}/></div>
          </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.alphavantage.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by <b className="text-gray-500">ALPHA VANTAGE</b></span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/stocks/spy")
  const data = await res.json()
  console.log(data)
  if (!data){
      return {notfound:true}
  }
  return {props:{chartData:{data}}}
}