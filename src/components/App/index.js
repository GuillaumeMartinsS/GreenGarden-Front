import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

// == IMPORT ASSETS
import {
  getGardenById,
} from '../../actions/gardens';

import Header from '../Header';

function App() {

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getGardenById());
    },
    [dispatch],
  );

  const state = useSelector((state) => state.garden);
  console.log('je lis le state');
  console.log(state)

  return (
    <div className="App">
      <Header />



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
