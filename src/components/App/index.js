import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// == IMPORT ASSETS
import {
  getGardenById,
} from '../../actions/garden';

import Header from '../Header';
import Garden from '../Garden';
import Footer from '../Footer';

import './styles.scss';

function App() {

  // const dispatch = useDispatch();

  // useEffect(
  //   () => {
  //     dispatch(getGardenById());
  //   },
  //   [dispatch],
  // );

  // const state = useSelector((state) => state.garden);
  // console.log('je lis le state');
  // console.log(state)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path='/garden/:id' element={<Garden/>}  />
      </Routes>
      <Footer />



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
          {console.log('lala')};
        </a>
      </header> */}
    </div>
  );
}

export default App;
