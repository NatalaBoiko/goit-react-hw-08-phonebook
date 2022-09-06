import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//     persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { contactsReduser } from './contacts/contactsSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
  //   middleware: getDefaultMiddleware => [
  //     ...getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
  //   ],
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);

// export { store, persistor };
