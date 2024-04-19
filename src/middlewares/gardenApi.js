// == IMPORT NPM
import axios from "axios";

// == IMPORT ASSETS
import {
  GET_GARDEN_BY_ID, resetGardenState, saveGardenWithId, UPDATE_GARDEN_BY_ID, getGardenById
} from '../actions/garden';

const gardenApi = (store) => (next) => (action) =>
{
    const baseURL = 'http://localhost:8080';
    // const id = 1;
    // console.log(action.id);

    switch (action.type) 
    {
        case GET_GARDEN_BY_ID: 
            axios.get(`${baseURL}/api/garden/${action.id}`)
            .then((response) => {
              console.log('je suis dans le middleware :  action GET_GARDEN_BY_ID');
              console.log(response.data);
              store.dispatch(saveGardenWithId(response.data))
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log('error', error);
            }); 
          break;

          case UPDATE_GARDEN_BY_ID: 
          axios.get(`${baseURL}/api/evolution/garden/${action.id}`)
          .then((response) => {
            console.log('je suis dans le middleware : action UPDATE_GARDEN_BY_ID');
            console.log(response.data);
            store.dispatch(saveGardenWithId(response.data))
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

export default gardenApi;