import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import log from 'loglevel';
import {AppThunk} from '../../app/store';
import {PlatformStatus} from '../../interfaces/platformStatus';

const initialState: PlatformStatus = {
  status: 'idle',
};

export const statusSlice = createSlice({
  name: 'Status',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<PlatformStatus>) => {
      Object.assign(state, action.payload);

      log.trace(`Updated platform status to ${action.payload}`);
    },
  },
});

export const setStatusState =
  (status: PlatformStatus): AppThunk =>
  dispatch => {
    // store the value to local state to remember it on next load
    dispatch(statusSlice.actions.setStatus(status));
  };

export default statusSlice.reducer;

log.trace(`Initiating ${statusSlice.name}.`);
