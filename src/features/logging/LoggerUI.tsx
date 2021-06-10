import {Select} from 'antd';
import {LogLevelDesc} from 'loglevel';
import React from 'react';
import v from 'voca';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {RootState} from '../../app/store';
import {possibleLogStateValues, setLoggerState} from './loggerSlice';

const {Option} = Select;

const LoggerSelect: React.FC = () => {
  const logLevel: LogLevelDesc = useAppSelector(
    (state: RootState) => state.logger.logLevel
  );

  const dispatch = useAppDispatch();
  const selectionChanged = (value: LogLevelDesc) =>
    dispatch(setLoggerState(value));

  // Set default value to whatever is stored in storage
  return (
    <>
      <Select value={logLevel} onChange={selectionChanged}>
        {possibleLogStateValues.map(item => (
          <Option value={item} key={item}>
            {v.capitalize(item)}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default LoggerSelect;
