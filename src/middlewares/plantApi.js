// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
  HYDRATE_PLANT_BY_ID
} from '../actions/plant';

import {
  getGardenById
} from '../actions/garden';


const plantApi = (store) => (next) => (action) =>
{
    const baseURL = 'http://localhost:8080';

    console.log('dada');

    switch (action.type) 
    {
        case HYDRATE_PLANT_BY_ID: 
            axios.get(`${baseURL}/api/plants/${action.id}/hydrate`)
            .then((response) => {
              console.log('je suis dans le middleware :  action HYDRATE_PLANT_BY_ID');
              console.log(response.data);
              store.dispatch(getGardenById(response.data.garden.id));
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log('error', error);
            }); 
          break;

        default:
            next(action);  
    }

}

export default plantApi;