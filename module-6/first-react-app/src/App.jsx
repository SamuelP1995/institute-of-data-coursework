import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Address from './address.jsx'

import MoviesList from './moviesList.jsx'

import BigCats from './BigCats'

import EmojiChanger from './Emoji'

import Calculator from './Calculator'

import BitcoinRates from './BitcoinRates'

import BitcoinRates2 from './BitcoinRates2';

import EmojiProvider from './EmojiContext'



//function App() {
  // return (
  //   <>
  //     <Address />
  //     <Address streetName="111 Church Street" zipCode='14152' />
  //     <Address streetName='100 Mckindly Road' state='Texas' country='Canada' zipCode='19999' />
  //   </>
  // )
//}

function App() {
  return (
    <>
    <EmojiProvider>
    {/* <Address /> */}
    {/* <MoviesList /> */}
    {/* <BigCats /> */}
    {/* <Calculator /> */}
    <EmojiChanger />
    <BitcoinRates />
    {/* <BitcoinRates2 /> */}
    </EmojiProvider>
    </>
  )
}

export default App
