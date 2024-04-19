
// ACTION TYPE HYDRATE_PLANT_BY_ID
export const HYDRATE_PLANT_BY_ID = 'HYDRATE_PLANT_BY_ID';

// ACTION CREATOR hydratePlantById
export const hydratePlantById = (id) => ({  
  type: HYDRATE_PLANT_BY_ID,
  id:id,
});
