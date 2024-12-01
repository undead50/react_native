import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);

  return <Text>Count: {count}</Text>;
};

export default CounterDisplay;
