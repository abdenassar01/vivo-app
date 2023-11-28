import {View, Text} from 'react-native';
import React from 'react';
import Icon from '../components/common/icon/icon';
import WithDrawerHeader from '../components/core/header/with-drawer-header';

const Home = () => {
  return (
    <View>
      <WithDrawerHeader />
      <Text>Home</Text>
      <Icon uri="https://i.imgur.com/O7U3pie.png" size={24} />
    </View>
  );
};

export default Home;
