import React from 'react';
import {
  PointsText,
  RatingItemWrapper,
  StarImage,
  StarsList,
  TimeText,
} from './rating-item.style';
import RatingTimeAgo from '../rating-time-ago/rating-time-ago';
import {t} from 'i18next';

type Props = {
  time: Date | string;
  rating: number;
  points: number;
};

const RatingItem = ({time, points, rating}: Props) => {
  return (
    <RatingItemWrapper>
      <TimeText>
        <RatingTimeAgo time={time} />
      </TimeText>
      <StarsList>
        {[...Array(Math.floor(rating))].map((item, index) => (
          <StarImage
            key={`${item}-start-${index}`}
            source={require('../../../../assets/icons/star.png')}
          />
        ))}
        {[...Array(5 - Math.floor(rating))].map((item, index) => (
          <StarImage
            key={`${item}-start-${index}`}
            source={require('../../../../assets/icons/star-empty.png')}
          />
        ))}
      </StarsList>
      <PointsText status={points === 0 ? 'drow' : 'win'}>
        {`+${points}${t('points-unit-text')}`}
      </PointsText>
    </RatingItemWrapper>
  );
};

export default RatingItem;
