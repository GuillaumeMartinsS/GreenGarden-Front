import {Button} from "semantic-ui-react";

import Plant from '../Cards/Plant';
import './styles.scss';

const Garden = () => (

  <main className='main__container'>
    <Button color="teal" size="mini" className='main__button'>Mettre à jour</Button>
    <div className='main__garden'>
      <Plant></Plant>
      <Plant></Plant>
      <Plant></Plant>
      <Plant></Plant>
      <Plant></Plant>
      <Plant></Plant>
    </div>

  </main>  

)
export default Garden