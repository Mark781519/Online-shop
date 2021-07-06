import React from "react";
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';
import ProductList from './components/ProductList';
import { AppStateProvider } from './context/AppContext'


const App = () => {
  return (
    <AppStateProvider>
      <div className="app">
        <Header />
        <Toolbar />
        <div className="width-limiter app__content">
            <aside className="app__sidebar">Sidebar (WIP)</aside>
            <div className="app__main">
              <ProductList />
            </div>
        </div>
        <Footer />
      </div>
    </AppStateProvider>
  )
}

export default App
