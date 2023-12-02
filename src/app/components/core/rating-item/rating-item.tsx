import React from 'react';
import {PointsText, RatingItemWrapper, TimeText} from './rating-item.style';
import RatingTimeAgo from '../rating-time-ago/rating-time-ago';
import {t} from 'i18next';
import RatingStars from '../rating-stars/rating-stars';

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
      <RatingStars rating={rating} />
      <PointsText status={points === 0 ? 'drow' : 'win'}>
        {`+${points}${t('points-unit-text')}`}
      </PointsText>
    </RatingItemWrapper>
  );
};

export default RatingItem;
