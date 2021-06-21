import React from "react";
import Footer from './components/Footer';
import Header from './components/Header';

import Toolbar from './components/Toolbar';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Toolbar />
      <div className="width-limiter app__content">
            <aside className="app__sidebar">Sidebar (WIP)</aside>
            <main className="app__main">
            </main>
      <Footer />
      </div>
    </div>
  )
}

export default App
