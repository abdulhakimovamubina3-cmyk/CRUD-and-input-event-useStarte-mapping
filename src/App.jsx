import React from 'react';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Main from './assets/components/Main';

function App() {
  return (
    <>
    <header className='bg-green-800'>
      <Navbar />
    </header>
    <Main></Main>
    <Footer />
    </>
  )
}

export default App;