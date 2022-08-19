import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import HomeSingleProduct from './Home/HomeSingleProduct';
import Login from './Login/Login';
import './App.css';
import { useEffect } from 'react';
import { auth} from './firebase'


function App() {

  //will create listener to always keep track on who's sign in
  useEffect(()=>{
    // [] will only run once when the app component loads.....
    auth.onAuthStateChanged(authUser => {
      console.log(`The user is ${{...authUser}}`);
      if(authUser){
        // the user just logged in ||  the use was logged in
        
      }else {
        // the user is logged out
      }
    })
  },[]);
  return (
    //BEM

    <div className="app">
      <Routes>

        <Route
          exact
          path='/login'
          element={<Login/>}
        />
        <Route
          exact
          path='/homeproduct'
          
          element={<><Header /><HomeSingleProduct/></>}
        />
        <Route
          exact
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />{' '}
            </>
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        {/* <Route
          path="/"
          render={(props) => (
            <div>
              <Header />
              <Home />
            </div>
          )}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
