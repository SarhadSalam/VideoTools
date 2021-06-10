import React from 'react';
import {Typography} from 'antd';
import {useAppSelector} from '../../app/hooks';
import {RootState} from '../../app/store';
import v from 'voca';

const {Text} = Typography;

const StatusBar: React.FC = () => {
  const status = useAppSelector((state: RootState) => state.status);

  return (
    <>
      <Text code title="Platform Status">
        {v.capitalize(status.status)}
      </Text>
    </>
  );
};

export default StatusBar;
