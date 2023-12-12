import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {
  CentredContent,
  MainRatingWrapper,
  NbrRatingText,
  RatingHeader,
  RatingsList,
  RatingsScreenWrapper,
} from './ratings.style';
import TitleHeader from '../../components/core/title-header/title-header';
import {t} from 'i18next';
import RatingStars from '../../components/core/rating-stars/rating-stars';
import RatingItem from '../../components/core/rating-item/rating-item';
const ratingItems = [
  {
    time: '2007-11-28T06:24:44.124Z',
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

const Ratings = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <RatingsScreenWrapper>
        <TitleHeader title={t('evaluation-nav-label')} />
        <CentredContent>
          <MainRatingWrapper>
            <RatingHeader>3.5</RatingHeader>
            <RatingStars rating={3.5} starSize={30} />
            <NbrRatingText>305 {t('evaluation-unit')}</NbrRatingText>
          </MainRatingWrapper>
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
        </CentredContent>
      </RatingsScreenWrapper>
    </AppWrapper>
  );
};

export default Ratings;
