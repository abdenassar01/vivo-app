import {Text} from 'react-native';
import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';

const QuizSuccess = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <Text>QuizSuccess</Text>
    </AppWrapper>
  );
};

export default QuizSuccess;
