import React from 'react';
import Header from '../../components/core/header/header';
import {AppWrapper} from '../../../utils/shared-styles';
import {
  HomeWrapper,
  RatingsList,
  RecentRatingsWrapper,
  Tab,
  TabIcon,
  TabLabel,
  TabsWrapper,
} from './home.style';
import PointsProgressChart from '../../components/core/chart/points-progress-chart';
import {t} from 'i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import TitleHeader from '../../components/core/title-header/title-header';
import RatingItem from '../../components/core/rating-item/rating-item';

const ratingItems = [
  {
    time: new Date(),
    rating: 5,
    points: 300,
  },
  {
    time: '2023-11-28T06:24:44.124Z',
    rating: 3.5,
    points: 0,
  },
  {
    time: '2023-06-28T06:24:44.124Z',
    rating: 2,
    points: 0,
  },
  {
    time: '2023-11-29T10:55:44.124Z',
    rating: 1,
    points: 0,
  },
  {
    time: '2023-10-28T06:24:44.124Z',
    rating: 5,
    points: 300,
  },
];

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
        <RecentRatingsWrapper>
          <TitleHeader title={t('recent-evaluations-header')} />
          <RatingsList>
            {React.Children.toArray(
              ratingItems.map(item => (
                <RatingItem
                  points={item.points}
                  rating={item.rating}
                  time={item.time}
                />
              )),
            )}
          </RatingsList>
        </RecentRatingsWrapper>
      </HomeWrapper>
    </AppWrapper>
  );
};

export default Home;
