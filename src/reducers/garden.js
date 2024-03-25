import { SAVE_GARDEN_WITH_ID } from '../actions/gardens';

export const initialState = {
saved:[]
};

// A noter : pour le reducer recipesReducer, seule la tranche recipes est visible !
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GARDEN_WITH_ID:
      return {
        ...state,      
        saved: action.garden,
      };
    default:
      return state;
  }
};

export default reducer;