import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slice/counterSlice';
import { Button, View } from 'react-native';

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Add 5" onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  );
};
export default CounterControls;
