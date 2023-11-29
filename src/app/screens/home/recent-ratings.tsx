import React from 'react';

import TitleHeader from '../../components/core/title-header/title-header';
import RatingItem from '../../components/core/rating-item/rating-item';
import {RatingsList, RecentRatingsWrapper} from './home.style';
import {t} from 'i18next';

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

export default function RecentRatings() {
  return (
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
  );
}
