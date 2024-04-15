import {Button} from "semantic-ui-react";
import './styles.scss';

import {useDispatch} from 'react-redux';

import {
  hydratePlantById
} from '../../actions/plant';


const Plant = ({
  id,
  age,
  hydration,
  genre,
}
) => 

{
  const dispatch = useDispatch();

  const handleHydrate = () => {
  dispatch(hydratePlantById(id));
  } 


  return(
  <article className='article'>
    <div className="article__img" > </div>
      <div className='article__content'>
        <div className='article__age'> Âge de la plante : {age}</div>
        <div className='article__hydration'> Hydratation : {hydration}</div>
        <div className='article__genre'> Genre : {genre}</div>
        </div>
      <Button color="blue" size="mini" onClick={handleHydrate} className='article__hydrate'>
            Arroser</Button>
  </article>  )

}

export default Plant