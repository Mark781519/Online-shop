import SignupPage from './components/SingupPage/SignupPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';
import ProductList from './components/ProductList';
import { AppStateProvider } from './context/AppContext';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';


const App = () => {
  return (
    <Router basename="/online_shop">
      <AppStateProvider>
        <div className="app">
          <Header />
              <Switch>
                <Route exact path="/">
                  <div>
                    <p>Home page</p>
                  </div>
                </Route>
                <Route path="/products">
                  <Toolbar />
                  <ProductList />
                </Route>
                <Route path="/singUp">
                  <SignupPage />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
              </Switch>
          <Footer />
        </div>
      </AppStateProvider>
    </Router>
  )
}

export default App

