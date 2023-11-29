import React from 'react';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';
import {AppWrapper} from '../../../utils/shared-styles';
import {HomeWrapper, Tab, TabIcon, TabLabel, TabsWrapper} from './home.style';
import PointsProgressChart from '../../components/core/chart/points-progress-chart';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Home = () => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  return (
    <AppWrapper>
      <Header openDrower />
      <HomeWrapper>
        <PointsProgressChart progress={75} />
        <TabsWrapper>
          <Tab color="#80BD0A" onPress={() => navigate('Quiz')}>
            <TabIcon
              resizeMode="stretch"
              source={require('../../../assets/icons/quiz-tab.png')}
            />
            <TabLabel>{t('home-quiz-link')}</TabLabel>
          </Tab>
          <Tab color="#20A9E3" onPress={() => navigate('Conversion')}>
            <TabIcon
              source={require('../../../assets/icons/exchange-tab.png')}
            />
            <TabLabel>{t('home-conversion-link')}</TabLabel>
          </Tab>
          <Tab color="#6E6F72" onPress={() => navigate('Orders')}>
            <TabIcon source={require('../../../assets/icons/orders-tab.png')} />
            <TabLabel>{t('home-demads-link')}</TabLabel>
          </Tab>
          <Tab color="#FFB400" onPress={() => navigate('Ratings')}>
            <TabIcon
              source={require('../../../assets/icons/ratings-tab.png')}
            />
            <TabLabel>{t('home-evaluation-link')}</TabLabel>
          </Tab>
        </TabsWrapper>
        <MainText>home</MainText>
      </HomeWrapper>
    </AppWrapper>
  );
};

export default Home;
