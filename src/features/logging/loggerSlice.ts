import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import log, {LogLevelDesc} from 'loglevel';
import {AppThunk} from '../../app/store';
import localStorageKeys from '../../config/localStorageKeys';
import {LoggingState} from '../../interfaces/logger';

export const possibleLogStateValues = [
  'trace',
  'debug',
  'info',
  'warn',
  'error',
  'silent',
];

const initialState: LoggingState = {
  logLevel: 'info',
};

export const loggerSlice = createSlice({
  name: 'Logger',
  initialState,
  reducers: {
    setLogLevel: (state, action: PayloadAction<LogLevelDesc>) => {
      Object.assign(state, {
        ...state,
        logLevel: action.payload,
      });

      log.trace(`Updated log level state to ${action.payload}`);
    },
  },
});

export const loadLoggerState = (): AppThunk => dispatch => {
  const defaultState: LoggingState = JSON.parse(JSON.stringify(initialState));

  if (window.localStorage.getItem(localStorageKeys.loggingLevel)) {
    const storedLevel = window.localStorage.getItem(
      localStorageKeys.loggingLevel
    ) as string;
    // ensure type is accurate, and the value was not changed in local storage
    if (possibleLogStateValues.includes(storedLevel)) {
      defaultState.logLevel = storedLevel as LogLevelDesc;
      log.setLevel(storedLevel as LogLevelDesc);
    }
  }

  dispatch(loggerSlice.actions.setLogLevel(defaultState.logLevel));
};

export const setLoggerState =
  (level: LogLevelDesc): AppThunk =>
  dispatch => {
    // store the value to local state to remember it on next load
    window.localStorage.setItem(localStorageKeys.loggingLevel, level as string);
    dispatch(loggerSlice.actions.setLogLevel(level));
    log.setLevel(level);
  };

export default loggerSlice.reducer;

log.trace(`Initiating ${loggerSlice.name}.`);
