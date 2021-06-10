import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import loggerReducer from '../features/logging/loggerSlice';
import statusReducer from '../features/status/statusSlice';

export const store = configureStore({
  reducer: {
    logger: loggerReducer,
    status: statusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
