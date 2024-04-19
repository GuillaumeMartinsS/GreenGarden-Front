import { SAVE_GARDEN_WITH_ID, RESET_GARDEN_STATE } from '../actions/garden';

export const initialState = {
plants:[]
};

// A noter : pour le reducer recipesReducer, seule la tranche recipes est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GARDEN_WITH_ID:
      console.log("je suis dans le reducer");
      console.log(action.garden.plants);
      return {
        ...state,      
        plants: action.garden.plants,
      };

    case RESET_GARDEN_STATE:
      return {    
        plants:[]
      };

    default:
      return state;
  }
};

export default reducer;