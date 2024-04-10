// ACTION TYPE GET_GARDEN_BY_ID
export const GET_GARDEN_BY_ID = 'GET_GARDEN_BY_ID';

// ACTION CREATOR getGardenById
export const getGardenById = (id) => ({
  type: GET_GARDEN_BY_ID,
  id:id
});

// ACTION TYPE SAVE_GARDEN_WITH_ID
export const SAVE_GARDEN_WITH_ID = 'SAVE_GARDEN_WITH_ID';

// ACTION CREATOR saveGardenWithId
export const saveGardenWithId = (garden) => ({  
  type: SAVE_GARDEN_WITH_ID,
  garden,
});

// ACTION TYPE UPDATE_GARDEN_BY_ID
export const UPDATE_GARDEN_BY_ID = 'UPDATE_GARDEN_BY_ID';

// ACTION CREATOR updateGardenById
export const updateGardenById = (id) => ({  
  type: UPDATE_GARDEN_BY_ID,
  id:id
});

// ACTION TYPE RESET_GARDEN_STATE
export const RESET_GARDEN_STATE = 'RESET_GARDEN_STATE';

// ACTION CREATOR resetGardenState
export const resetGardenState = () => ({
  type: RESET_GARDEN_STATE,
});