

import {Button} from "semantic-ui-react";
import './styles.scss';

const Plant = () => (

  <article className='article'>
    <div className="article__img" > </div>
      {/* Si une plante est présente, proposer d'arroser : */}
      <Button color="blue" size="mini" className='article__hydrate'>
            Arroser</Button>
      {/* Si pas de plante présente, proposer d'en planter une : */}
      <Button color="blue" size="mini" className='article__plant'>
            Planter</Button>
    
  </article>  

)
export default Plant