import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';

const Profile = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <MainText>Profile</MainText>
    </AppWrapper>
  );
};

export default Profile;
