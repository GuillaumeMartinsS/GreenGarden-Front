import {Button} from "semantic-ui-react";
import './styles.scss';

import {useDispatch} from 'react-redux';

import {
  hydratePlantById
} from '../../actions/plant';

import {
  getGardenById
} from '../../actions/garden';

const Plant = ({
  id,
  age,
  hydration,
  genre,
  picture
}
) => 

{
  const dispatch = useDispatch();

  const handleHydrate = () => {
  dispatch(hydratePlantById(id));
  } 

  const pictureFile = `http://localhost:8080/plantPictures/${picture}`;

  let dehydrateFilter = 0;

  if (hydration === 2)
  {
    dehydrateFilter = 0.5;
  }

  if (hydration === 1)
  {
    dehydrateFilter = 1;
  }

  return(
  <article className='article'>
    <div style={{backgroundImage: `url(${pictureFile})`, filter:`grayscale(${dehydrateFilter})`}} className="article__img" > </div>
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