

import {Button} from "semantic-ui-react";
import './styles.scss';

const Plant = ({
  age,
  hydration,
  genre
}
) => (

  <article className='article'>
    <div className="article__img" > </div>
      <div className='article__content'>
        <div className='article__age'> Âge de la plante : {age}</div>
        <div className='article__hydration'> Hydratation : {hydration}</div>
        <div className='article__genre'> Genre : {genre}</div>
      </div>
      {/* Si une plante est présente, proposer d'arroser : */}
      <Button color="blue" size="mini" className='article__hydrate'>
            Arroser</Button>
      {/* Si pas de plante présente, proposer d'en planter une : */}
      <Button color="blue" size="mini" className='article__plant'>
            Planter</Button>
    
  </article>  

)
export default Plant