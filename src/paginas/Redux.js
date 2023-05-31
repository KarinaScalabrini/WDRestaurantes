import { configureStore } from '@reduxjs/toolkit';

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'marcarFavoritos':
      if (state.includes(action.payload)) {
        return state; 
      }
      return [...state, action.payload]; 
    case 'desmarcarFavoritos':
      return state.filter(itemId => itemId !== action.payload); 
    default:
      return state;
  }
};

const rootReducer = {
  favoritos: favoritesReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
