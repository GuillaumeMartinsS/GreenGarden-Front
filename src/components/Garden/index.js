import {Button} from "semantic-ui-react";

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";

import {
  getGardenById, updateGardenById
} from '../../actions/gardens';

import Plant from '../Cards/Plant';
import './styles.scss';

const Garden = () => {

  const dispatch = useDispatch();

  const {id} = useParams();

  console.log(id);

  useEffect(
    () => {
      dispatch(getGardenById(id));
    },
    []
  );

  const plants = useSelector((state) => state.garden.plants);
  console.log('je lis le state');
  console.log(plants);

  const handleUpdate = () => {
    dispatch(updateGardenById(id));
  }

  return (

  <main className='main__container'>
    <Button color="blue" size="large" className='main__button' Horizontally Attached="right" onClick={handleUpdate}>Mettre à jour</Button>
    <div className='main__garden'>
       {plants && (plants.map((plant) => (
          <Plant
            key={plant.id}
            age={plant.age}
            hydration={plant.hydration}
            genre={plant.genre.name}  
          />
      )))}


    </div>

  </main>  )

  }
export default Garden