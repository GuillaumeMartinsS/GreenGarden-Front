// ACTION TYPE GET_GARDEN_BY_ID
export const GET_GARDEN_BY_ID = 'GET_GARDEN_BY_ID';

// ACTION CREATOR getGardenById
export const getGardenById = (id) => ({
  type: GET_GARDEN_BY_ID,
  id:id
});

// ACTION TYPE SAVE_GARDEN_WITH_ID
export const SAVE_GARDEN_WITH_ID = 'SAVE_GARDEN_WITH_ID';

// ACTION CREATOR getUserWithSlug
export const saveGardenWithId = (garden) => ({  
  type: SAVE_GARDEN_WITH_ID,
  garden,
});