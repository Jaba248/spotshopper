import React from 'react'
import Signuppage from './pages/Signuppage'
import Loadingpage from './pages/Loadingpage';
import Homepage from './pages/Homepage';
import Signinpage from './pages/Signinpage';
import ShoppingCentreMainPage from './pages/ShoppingCentreMainPage';
import StoreMainPage from './pages/StoreMainPage';
import CategoryMainPage from './pages/categoryMainPage';
import ItemMainPage from './pages/ItemMainPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function App() {
    return (
        <div>
            
            <Router>
            <nav>
                <Link to="/signin">Sign Ins</Link>
            </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/signin" element={<Signinpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/category"  element={<CategoryMainPage />} />
            
          <Route path="/item/:id" element={<ItemMainPage />} />
            
          <Route path="/shop" element={<ShoppingCentreMainPage />} />
            
          <Route path="/store" element={<StoreMainPage />} />
            
          <Route path="/" element={<Homepage />} />
            
        </Routes>
    </Router>
        </div>
    )
}

export default App