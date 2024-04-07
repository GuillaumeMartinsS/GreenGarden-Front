import {Button} from "semantic-ui-react";

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";

import {
  getGardenById,
} from '../../actions/gardens';

import Plant from '../Cards/Plant';
import './styles.scss';

const Garden = () => {

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(
    () => {
      dispatch(getGardenById(id));
    },
    []
  );

  const plants = useSelector((state) => state.garden.plants);
  console.log('je lis le state');
  console.log(plants);


  return (

  <main className='main__container'>
    <Button color="blue" size="large" className='main__button' Horizontally Attached="right">Mettre à jour</Button>
    <div className='main__garden'>
       {plants.map((plant) => (
          <Plant
            key={plant.id}
            age={plant.age}
            hydration={plant.hydration}
            genre={plant.genre.name}  
          />
      ))}
    </div>

  </main>  )

  }
export default Garden